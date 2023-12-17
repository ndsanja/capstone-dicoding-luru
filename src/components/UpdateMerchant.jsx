/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { v4 as uuidV4 } from "uuid";
import "./UpdateMerchant.scss";
import { supabase } from "../repository/db";
import { useAtom } from "jotai";
import { userStore } from "../stores/stores";
import { useNavigate, useParams } from "react-router-dom";
import { publicUrl } from "../repository/supabase";
// import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";
// import { useMemo } from "react";

export default function UpdateMerchant({ setUpdateMerchant }) {
  const navigate = useNavigate();
  const [user, setUser] = useAtom(userStore);
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [description, setDescription] = useState("");
  const [newAvatar, setNewAvatar] = useState("");
  const [newAvatarUrl, setNewAvatarUrl] = useState("");
  const [merchant, setMerchant] = useState([]);
  const { id } = useParams();

  //   const [location, setLocation] = useAtom(locationStore);
  //   const { isLoaded } = useLoadScript({
  //     googleMapsApiKey: process.env.REACT_APP_GOOGLE_API_KEY,
  //   });

  //   const center = useMemo(() => ({ lat: 18.52043, lng: 73.856743 }), []);

  const getMerchant = async () => {
    const { data, error } = await supabase
      .from("merchants")
      .select()
      .eq("id", id)
      .single();

    if (!error) {
      setMerchant(data);
      setAddress(data?.address);
      setName(data?.title);
      setDescription(data?.description);
      setNewAvatarUrl(`${publicUrl}/${id}/${data?.picture}`);
    }
  };

  useEffect(() => {
    getMerchant();
  }, []);

  function handleChange(e) {
    setNewAvatarUrl(URL.createObjectURL(e.target.files[0]));
    setNewAvatar(e.target.files[0]);
  }

  const handleUpdateAvatar = async (merchantId) => {
    const fileName = `${uuidV4()}-${newAvatar?.name}`;
    const { data, error } = await supabase.storage
      .from("avatars")
      .upload(`${merchantId}/${fileName}`, newAvatar, {
        cacheControl: "3600",
        upsert: false,
      });

    if (!error) {
      const { data, error } = await supabase
        .from("merchants")
        .update({ picture: fileName })
        .eq("id", merchantId)
        .select()
        .single();

      if (!error) {
        setNewAvatar("");
      }
    }
  };

  const handleUpdateMerchant = async () => {
    const { data, error } = await supabase
      .from("merchants")
      .update({
        title: name,
        address,
        description,
        owner: user?.id,
      })
      .eq("id", id)
      .select()
      .single();

    if (!error && newAvatar) {
      await handleUpdateAvatar(data?.id);
      setName("");
      setAddress("");
      setDescription("");
    }
    if (!error) {
      setUpdateMerchant(false);
    }
  };

  const handleDeleteMerchant = async () => {
    const { error } = await supabase.from("merchants").delete().eq("id", id);
    if (!error) {
      navigate("/users?tab=merchants", { replace: true });
    }
  };
  return (
    <div className="wrapper-create-store">
      <div>Buat Toko</div>

      <button className="close-button" onClick={() => setUpdateMerchant(false)}>
        close
      </button>

      <div className="form">
        <input
          type="text"
          placeholder="nama"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="alamat"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
        <input
          type="text"
          placeholder="deskripsi"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <div className="avatar">
          {newAvatar ? (
            <img className="image" src={newAvatarUrl} alt="" />
          ) : (
            <img className="image" src={newAvatarUrl} alt="" />
          )}
          <div className="btn-wrapper">
            <label htmlFor="image" className="label">
              upload
            </label>
            <input type="file" hidden id="image" onChange={handleChange} />
          </div>
        </div>
        <button onClick={handleUpdateMerchant}>Update</button>
        <button onClick={handleDeleteMerchant}>Delete</button>
      </div>
      {/* {!isLoaded ? (
        <h1>Loading...</h1>
      ) : (
        <GoogleMap
          mapContainerClassName="map-container"
          center={center}
          zoom={10}
        />
      )} */}
    </div>
  );
}
