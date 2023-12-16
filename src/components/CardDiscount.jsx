import post from "../data/post.json";
import "./CardDiscount.scss";
import DiscountJpg from "../assets/discount.jpg";
// import { Link } from "react-router-dom";
export default function Discount() {
  return (
    <>
      <div className="discount-list">
        {post.map((discount) => (
          <div key={discount.id} className="discount-item">
            <img src={DiscountJpg} alt={discount.name} />
          </div>
        ))}
      </div>
    </>
  );
}
