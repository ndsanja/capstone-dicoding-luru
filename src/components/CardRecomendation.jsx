/* eslint-disable react/prop-types */
import { publicUrl } from "../repository/supabase";
import "./CardRecomendation.scss";
import { Link } from "react-router-dom";

export default function Recomendation({ merchants }) {
  return (
    <>
      <div className="recomendation-list">
        {merchants?.map((merchants) => (
          <div key={merchants?.id}>
            <img
              src={`${publicUrl}/${merchants?.id}/${merchants?.picture}`}
              alt={merchants.name}
            />
            <Link to={`/merchants/${merchants.id}`}>
              <h4 className="Link">{merchants.title}</h4>
            </Link>

            <p className="alamat-text">{merchants.address}</p>
            <p className="description-text">{merchants.description}</p>
          </div>
        ))}
      </div>
    </>
  );
}
