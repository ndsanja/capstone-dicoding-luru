// import { useState } from "react";
// import { useParams } from "react-router-dom";
// import { supabase } from "../repository/db";

// export default function MerchantDetail() {
//   const { id } = useParams();

//   const [title, setTitle] = useState("");
//   const [description, setDescription] = useState("");

//   const handleInputMerchant = async (e) => {
//     e.preventDefault();

//     const { data, error } = await supabase
//       .from("merchants")
//       .insert({
//         title,
//         description,
//         owner: "373265c5-d279-4761-9d05-7867b6194fd0",
//       })
//       .select()
//       .single();

//     console.log(error);
//     console.log(data);

//     if (!error) {
//       setTitle("");
//       setDescription("");
//     }
//   };

//   const handleSelect = async () => {
//     const { data, error } = await supabase
//       .from("merchants")
//       .select("*")
//       .eq("id", "bd8c7d50-957b-4b0b-aaf7-c5b5a3bc2403")
//       .single();

//     console.log(data);
//   };
//   return (
//     <>
//       <div>MerchantDetail {id}</div>

//       <form onSubmit={handleInputMerchant}>
//         <input
//           type="text"
//           value={title}
//           onChange={(e) => setTitle(e.target.value)}
//         />
//         <input
//           type="text"
//           value={description}
//           onChange={(e) => setDescription(e.target.value)}
//         />

//         <button type="submit">input</button>
//       </form>

//       <button onClick={handleSelect}>select</button>
//     </>
//   );
// }

import Discount from "../components/CardDiscount";
import RecomendationMenu from "../components/CardMenu";
import post from "../data/post.json";
import satai from "../assets/satai.jpg";

export default function MerchantDetail() {
  return (
    <>
      <section className="merchant">
        <div className="merchant-image">
          <img src={satai} alt="Jumbtron" />
        </div>
        <div className="merchant-text">
          <h1>{post[0].NameToko}</h1>
          <p>{post[0].alamat}</p>
        </div>
      </section>
      <section>
        <h2 className="discount-title">Spesial Offer</h2>
        <div className="discount">
          <Discount />
        </div>
      </section>
      <section>
        <div className="card-item">
          <h2 className="recomendation-title">Rekomendasi</h2>
          <RecomendationMenu />
        </div>
      </section>
    </>
  );
}
