import { useParams } from "react-router-dom";
import "./ProductDetail.scss";
import { supabase } from "../repository/db";
import { useEffect, useState } from "react";
import { publicUrl } from "../repository/supabase";
import UpdateProduct from "../components/UpdateProduct";

export default function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [updateProduct, setUpdateProduct] = useState(false);

  const getProduct = async () => {
    const { data, error } = await supabase
      .from("products")
      .select(`*, merchants(*)`)
      .eq("id", id)
      .single();

    if (!error) {
      setProduct(data);
    }
  };

  useEffect(() => {
    getProduct();
  }, []);

  return (
    <div className="product-wrapper__main">
      <div className="product-wrapper">
        <div className="product-image">
          <img src={`${publicUrl}/${id}/${product?.picture}`} alt="Test" />
        </div>
        <div className="product-text">
          <h4 className="product-text__title">{product?.title}</h4>
          <p className="product-text__address">{product?.merchants?.address}</p>
          <p className="product-text__description">{product?.descrition}</p>
          <p className="product-text__price">Rp.${product?.price}</p>
          <p className="product-text__price">Sisa {product?.quantity}</p>

          <div className="product-button">
            <button className="product-button__buynow">Buy Now</button>
            <button className="product-button__addtocart">Add to Cart</button>
            <button
              className="product-button__addtocart"
              onClick={() => setUpdateProduct(true)}
            >
              Edit
            </button>
          </div>
        </div>
      </div>
      {updateProduct && (
        <UpdateProduct
          setUpdateProduct={setUpdateProduct}
          merchantId={product?.merchant_id}
          product={product}
          setProduct={setProduct}
        />
      )}
    </div>
  );
}
