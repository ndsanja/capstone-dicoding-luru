/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";
import { useAtom } from "jotai";
import { productsStore } from "../stores/stores";
import { publicUrl } from "../repository/supabase";

export default function RecomendationMenu() {
  const [products, setProducts] = useAtom(productsStore);

  return (
    <>
      <div className="recomendation-list">
        {products.map((product) => (
          <div key={product.id}>
            <img
              src={`${publicUrl}/${product?.id}/${product?.picture}`}
              alt={product.name}
            />
            <h4>{product.title}</h4>
            <p className="alamat-text">{product.description}</p>
            {/* <p className="description-text">{product.product.}</p> */}
            <Link to={`/products/${product?.id}`}>Detail</Link>
          </div>
        ))}
      </div>
    </>
  );
}
