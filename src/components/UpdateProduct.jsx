/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { v4 as uuidV4 } from "uuid";
import "./UpdateProduct.scss";
import { supabase } from "../repository/db";
import { useNavigate, useParams } from "react-router-dom";
import { publicUrl } from "../repository/supabase";

export default function UpdateMerchant({
  setUpdateProduct,
  merchantId,
  product,
  setProduct,
}) {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState(0);
  const [quantity, setQuantity] = useState(0);
  const [description, setDescription] = useState("");
  const [newAvatar, setNewAvatar] = useState("");
  const [newAvatarUrl, setNewAvatarUrl] = useState("");
  const { id } = useParams();

  const getProduct = async () => {
    const { data, error } = await supabase
      .from("products")
      .select()
      .eq("id", id)
      .single();

    if (!error) {
      setProduct(data);
      setTitle(data?.title);
      setPrice(data?.price);
      setQuantity(data?.quantity);
      setDescription(data?.description);
      setNewAvatarUrl(`${publicUrl}/${id}/${data?.picture}`);
    }
  };

  useEffect(() => {
    getProduct();
  }, []);

  function handleChange(e) {
    setNewAvatarUrl(URL.createObjectURL(e.target.files[0]));
    setNewAvatar(e.target.files[0]);
  }

  const handleUpdateAvatar = async (productId) => {
    const fileName = `${uuidV4()}-${newAvatar?.name}`;
    const { data, error } = await supabase.storage
      .from("avatars")
      .upload(`${productId}/${fileName}`, newAvatar, {
        cacheControl: "3600",
        upsert: false,
      });

    if (!error) {
      const { data, error } = await supabase
        .from("merchants")
        .update({ picture: fileName })
        .eq("id", productId)
        .select()
        .single();

      if (!error) {
        setNewAvatar("");
      }
    }
  };

  const handleUpdateProduct = async () => {
    const { data, error } = await supabase
      .from("products")
      .update({
        title,
        price,
        quantity,
        description,
        merchant_id: merchantId,
      })
      .eq("id", id)
      .select()
      .single();

    if (!error && newAvatar) {
      await handleUpdateAvatar(data?.id);
      setTitle("");
      setPrice("");
      setQuantity("");
      setDescription("");
    }
    if (!error) {
      await getProduct();
      setUpdateProduct(false);
    }
  };

  const handleDeleteProduct = async () => {
    const { error } = await supabase.from("products").delete().eq("id", id);
    if (!error) {
      navigate(`/merchants/${merchantId}`, { replace: true });
    }
  };
  return (
    <div className="wrapper-create-store">
      <div>Update Product</div>

      <button className="close-button" onClick={() => setUpdateProduct(false)}>
        close
      </button>

      <div className="form">
        <input
          type="text"
          placeholder="nama"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="number"
          placeholder="price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        <input
          type="number"
          placeholder="Jumlah"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
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
        <button onClick={handleUpdateProduct}>Update</button>
        <button onClick={handleDeleteProduct}>Delete</button>
      </div>
    </div>
  );
}
