/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { v4 as uuidV4 } from "uuid";
import "./CreateProduct.scss";
import { supabase } from "../repository/db";
import { useAtom } from "jotai";
import { productsStore } from "../stores/stores";
import { HiPhoto } from "react-icons/hi2";

export default function CreataStore({ setCreateProduct, merchantId }) {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState(0);
  const [quantity, setQuantity] = useState(0);
  const [description, setDescription] = useState("");
  const [newAvatar, setNewAvatar] = useState("");
  const [newAvatarUrl, setNewAvatarUrl] = useState("");
  const [products, setProducts] = useAtom(productsStore);

  const getProducts = async () => {
    const { data, error } = await supabase
      .from("products")
      .select()
      .eq("merchant_id", merchantId);
    if (!error) {
      setProducts(data);
    }
  };

  useEffect(() => {
    getProducts();
  }, [merchantId]);

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
        .from("products")
        .update({ picture: fileName })
        .eq("id", productId)
        .select()
        .single();

      if (!error) {
        setNewAvatar("");
      }
    }
  };

  const handleInsertProduct = async () => {
    const { data, error } = await supabase
      .from("products")
      .insert({
        title,
        price,
        quantity,
        picture: "",
        description,
        merchant_id: merchantId,
      })
      .select()
      .single();

    if (!error) {
      await handleUpdateAvatar(data?.id);
      setProducts([...products, data]);
      setTitle("");
      setPrice(0);
      setDescription("");
      setQuantity("0");
      setCreateProduct(false);
    }
  };
  return (
    <div className="wrapper-create-store">
      <div>Tambah Produk</div>

      <button className="close-button" onClick={() => setCreateProduct(false)}>
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
            <HiPhoto className="image" />
          )}
          <div className="btn-wrapper">
            <label htmlFor="image" className="label">
              upload
            </label>
            <input type="file" hidden id="image" onChange={handleChange} />
          </div>
        </div>
        <button onClick={handleInsertProduct}>Tambah Produk</button>
      </div>
    </div>
  );
}
