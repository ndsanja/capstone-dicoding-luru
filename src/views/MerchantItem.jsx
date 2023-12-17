/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import "./MerchantItem.scss";
import { publicUrl } from "../repository/supabase";

export default function MerchantItem({ id, title, picture, address }) {
  return (
    <div className="container">
      <Link to={`/merchants/${id}`}>
        <img src={`${publicUrl}/${id}/${picture}`} alt={title} />
      </Link>
      <h5>{title}</h5>
      <h5>{address}</h5>
    </div>
  );
}
