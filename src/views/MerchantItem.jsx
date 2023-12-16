import { Link } from "react-router-dom";
import "./MerchantItem.scss";

export default function MerchantItem({
  id,
  name,
  picture,
  address,
  description,
}) {
  // console.log(id)
  return (
    <div className="container">
      <Link to={`/merchants/${id}`}>
        <img src={picture} alt={name} />
      </Link>
      <h5>{address}</h5>
    </div>
  );
}
