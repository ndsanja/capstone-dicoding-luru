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
import { useGeolocated } from "react-geolocated";

export default function CreataStore({ setCreateMerchant }) {
  const [user, setUser] = useAtom(userStore);
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [description, setDescription] = useState("");
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);
  const [open, setOpen] = useState(null);
  const [close, setClose] = useState(null);
  const [facebook, setFacebook] = useState("");
  const [twitter, setTwitter] = useState("");
  const [instagram, setInstagram] = useState("");
  const [tiktok, setTiktok] = useState("");
  const [youtube, setYoutube] = useState("");
  const [phone, setPhone] = useState("");
  const [newAvatar, setNewAvatar] = useState("");
  const [newAvatarUrl, setNewAvatarUrl] = useState("");

  const [merchants, setMerchants] = useAtom(myMerchantsStore);
  const { coords } = useGeolocated();

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
    setLatitude(coords?.latitude);
    setLongitude(coords?.longitude);
  }, [user, coords]);

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
        lat: latitude,
        lng: longitude,
        open,
        close,
        facebook,
        instagram,
        twitter,
        tiktok,
        youtube,
        phone,
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
      setLatitude("");
      setLongitude("");
      setOpen("");
      setClose("");
      setFacebook("");
      setInstagram("");
      setTwitter("");
      setTiktok("");
      setYoutube("");
      setPhone("");
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
        <input
          type="number"
          placeholder="Latitude"
          value={latitude}
          onChange={(e) => setLatitude(e.target.value)}
        />
        <input
          type="number"
          placeholder="Longitude"
          value={longitude}
          onChange={(e) => setLongitude(e.target.value)}
        />
        <input
          type="time"
          placeholder="Open"
          value={open}
          onChange={(e) => setOpen(e.target.value)}
        />
        <input
          type="time"
          placeholder="Close"
          value={close}
          onChange={(e) => setClose(e.target.value)}
        />
        <input
          type="text"
          placeholder="Phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        <input
          type="text"
          placeholder="Instagram"
          value={instagram}
          onChange={(e) => setInstagram(e.target.value)}
        />
        <input
          type="text"
          placeholder="Youtube"
          value={youtube}
          onChange={(e) => setYoutube(e.target.value)}
        />
        <input
          type="text"
          placeholder="Facebook"
          value={facebook}
          onChange={(e) => setFacebook(e.target.value)}
        />
        <input
          type="text"
          placeholder="Tiktok"
          value={tiktok}
          onChange={(e) => setTiktok(e.target.value)}
        />
        <input
          type="text"
          placeholder="Twitter"
          value={twitter}
          onChange={(e) => setTwitter(e.target.value)}
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
    </div>
  );
}
