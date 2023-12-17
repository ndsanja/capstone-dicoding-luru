import { useEffect, useState } from "react";
import { v4 as uuidV4 } from "uuid";
import "./CreateStore.scss";
import { supabase } from "../../repository/db";
import { useAtom } from "jotai";
import {
  locationStore,
  myMerchantsStore,
  userStore,
} from "../../stores/stores";
import { HiPhoto } from "react-icons/hi2";
// import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";
// import { useMemo } from "react";

export default function CreataStore({ setCreateMerchant }) {
  const [user, setUser] = useAtom(userStore);
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [description, setDescription] = useState("");
  const [newAvatar, setNewAvatar] = useState("");
  const [newAvatarUrl, setNewAvatarUrl] = useState("");
  const [merchants, setMerchants] = useAtom(myMerchantsStore);

  //   const [location, setLocation] = useAtom(locationStore);
  //   const { isLoaded } = useLoadScript({
  //     googleMapsApiKey: process.env.REACT_APP_GOOGLE_API_KEY,
  //   });

  //   const center = useMemo(() => ({ lat: 18.52043, lng: 73.856743 }), []);

  const getMyMerchants = async () => {
    const { data, error } = await supabase
      .from("merchants")
      .select()
      .eq("owner", user?.id);
    if (!error) {
      setMerchants(data);
    }
  };

  useEffect(() => {
    getMyMerchants();
  }, [user]);

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

  const handleInsertMerchant = async () => {
    const { data, error } = await supabase
      .from("merchants")
      .insert({
        title: name,
        address,
        picture: "",
        description,
        owner: user?.id,
      })
      .select()
      .single();

    if (!error) {
      await handleUpdateAvatar(data?.id);
      setMerchants([...merchants, data]);
      setName("");
      setAddress("");
      setDescription("");
      setCreateMerchant(false);
    }
  };
  return (
    <div className="wrapper-create-store">
      <div>Buat Toko</div>

      <button className="close-button" onClick={() => setCreateMerchant(false)}>
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
            <HiPhoto className="image" />
          )}
          <div className="btn-wrapper">
            <label htmlFor="image" className="label">
              upload
            </label>
            <input type="file" hidden id="image" onChange={handleChange} />
          </div>
        </div>
        <button onClick={handleInsertMerchant}>Buat Toko</button>
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
