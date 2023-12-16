import MerchantList from "./MerchantList";
import { merchants as merchantsData } from "../data/data";
import { useState, useEffect } from "react";
import "./Explore.scss";
import { useSearchParams } from "react-router-dom";
import { supabase } from "../repository/db";

export default function Explore() {
  const [merchants, setMerchants] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  const getMerchants = async () => {
    const { data, error } = await supabase.from("merchants").select();

    if (!error) {
      setMerchants(data);
    }
  };

  useEffect(() => {
    getMerchants();
  }, []);

  // console.log("search", searchParams.get("products"));
  console.log("merchantsupabase", merchants);

  return (
    <section>
      <div className="container">
        {/* <h2>Explore</h2> */}
        <MerchantList merchants={merchants} />
      </div>
    </section>
  );
}

// export default class Explore extends React.Component {
//     constructor(props) {
//         super(props);

//         this.state = {
//             merchants: merchants,
//         };

//         }

//     render() {
//         return (
//             <section>
//                 <div className="container">
//                     {/* <h2>Explore</h2> */}
//                     <MerchantList merchants={this.state.merchants} />
//                 </div>
//             </section>
//         )
//     }
// }
