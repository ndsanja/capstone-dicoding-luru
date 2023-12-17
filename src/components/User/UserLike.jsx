import { useAtom } from "jotai";
import { supabase } from "../../repository/db";
import { userStore } from "../../stores/stores";
import { useEffect, useState } from "react";
import Recomendation from "../CardRecomendation";

export default function HomeLike() {
  const [user, setUser] = useAtom(userStore);
  const [merchantLikes, setMerchantLikes] = useState([]);

  const getMerchantLikes = async () => {
    const { data, error } = await supabase
      .from("merchant_likes")
      .select(`merchants(*)`)
      .eq("user_id", user?.id);

    if (!error) {
      setMerchantLikes(
        data?.map((e) => ({
          id: e.merchants.id,
          title: e.merchants.title,
          description: e.merchants.description,
          address: e.merchants.address,
          picture: e.merchants.picture,
        }))
      );
    }

    // console.log(
    //   data?.map((e) => ({
    //     id: e.merchants.title,
    //     title: e.merchants.title,
    //     description: e.merchants.description,
    //     address: e.merchants.address,
    //     picture: e.merchants.picture,
    //   }))
    // );
  };

  useEffect(() => {
    getMerchantLikes();
  }, [user]);

  return (
    <div>
      <Recomendation merchants={merchantLikes} />
    </div>
  );
}
