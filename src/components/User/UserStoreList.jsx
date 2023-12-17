import { useEffect, useState } from "react";
import "./UserStoreList.scss";
import { supabase } from "../../repository/db";
import { useAtom } from "jotai";
import { myMerchantsStore, userStore } from "../../stores/stores";
import CreateStore from "./CreateStore";
import Recomendation from "../CardRecomendation";

export default function UserStoreList() {
  const [user, setUser] = useAtom(userStore);
  const [merchants, setMerchants] = useAtom(myMerchantsStore);
  const [createMerchant, setCreateMerchant] = useState(false);

  const getMyMerchants = async () => {
    const { data, error } = await supabase
      .from("merchants")
      .select()
      .eq("owner", user?.id);
    if (!error) {
      setMerchants(data);
    }
  };

  useEffect(() => {
    getMyMerchants();
  }, [user]);

  const handleCreateMerchant = () => {
    setCreateMerchant(true);
  };

  return (
    <div className="wrapper">
      <div>Merchant Saya</div>
      <button onClick={handleCreateMerchant}>Buat Merchant</button>
      {createMerchant && <CreateStore setCreateMerchant={setCreateMerchant} />}
      <div>
        <Recomendation merchants={merchants} />
      </div>
    </div>
  );
}
