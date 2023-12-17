import { useNavigate } from "react-router-dom";
import { supabase } from "../../repository/db";
import { publicUrl } from "../../repository/supabase";
import { useEffect, useState } from "react";
import { useAtom } from "jotai";
import { userStore } from "../../stores/stores";
import { v4 as uuidV4 } from "uuid";
import "./UserSetting.scss";

export default function HomeSetting() {
  const navigate = useNavigate();
  const [name, setName] = useState();
  const [user, setUser] = useAtom(userStore);
  const [newAvatar, setNewAvatar] = useState("");
  const [newAvatarUrl, setNewAvatarUrl] = useState("");

  useEffect(() => {
    setName(user?.full_name);
  }, [user]);

  function handleChange(e) {
    setNewAvatarUrl(URL.createObjectURL(e.target.files[0]));
    setNewAvatar(e.target.files[0]);
  }

  const handleUpdateAvatar = async () => {
    const fileName = `${uuidV4()}-${newAvatar?.name}`;
    const { data, error } = await supabase.storage
      .from("avatars")
      .upload(`${user?.id}/${fileName}`, newAvatar, {
        cacheControl: "3600",
        upsert: false,
      });

    if (!error) {
      const { data, error } = await supabase
        .from("profiles")
        .update({ avatar_url: fileName })
        .eq("id", user?.id)
        .select()
        .single();

      if (!error) {
        setUser({ ...user, avatar_url: data?.avatar_url });
        setNewAvatar("");
      }
    }
  };

  const handleLogout = async () => {
    const { error } = await supabase.auth.signOut();

    if (!error) {
      navigate("/auth/login", { replace: true });
    }
  };

  const handleModifyName = async (e) => {
    e.preventDefault();
    const { data, error } = await supabase
      .from("profiles")
      .update({
        full_name: name,
      })
      .eq("id", user?.id)
      .select()
      .single();

    if (!error) {
      setUser({ ...user, full_name: data?.full_name });
    }
  };
  return (
    <div className="wrapper">
      <div className="avatar">
        {newAvatar ? (
          <img className="image" src={newAvatarUrl} alt="" />
        ) : (
          <img
            className="image"
            src={`${publicUrl}/${user?.id}/${user?.avatar_url}`}
          />
        )}
        <div className="btn-wrapper">
          <label htmlFor="image" className="label">
            upload
          </label>
          <input type="file" hidden id="image" onChange={handleChange} />
          <button onClick={handleUpdateAvatar}>Update Avatar</button>
        </div>
      </div>

      <form className="full-name-wrapper" onSubmit={handleModifyName}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <button type="submit">update</button>
      </form>
      <button className="option" onClick={handleLogout}>
        logout
      </button>
    </div>
  );
}
