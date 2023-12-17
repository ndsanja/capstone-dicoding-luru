/* eslint-disable react/prop-types */
import MerchantItem from "./MerchantItem";
import "./MerchantList.scss";

export default function MerchantList({ merchants }) {
  // if (!merchants?.length) {
  //     console.log(merchants.length)
  //     return <p>No merchant found!</p>;
  // }

  return (
    <div>
      {merchants?.map((merchant) => {
        return <MerchantItem key={merchant.id} {...merchant} />;
      })}
    </div>
  );
}
