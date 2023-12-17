import MerchantList from "./MerchantList";
import { useState, useEffect } from "react";
import "./Explore.scss";
import { useSearchParams } from "react-router-dom";
import { supabase } from "../repository/db";

export default function Explore() {
  const [merchants, setMerchants] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();

  const getInitMerchants = async () => {
    const { data, error } = await supabase
      .from("merchants")
      .select()
      .ilike("title", `%${searchParams.get("s")}%`);

    if (!error) {
      setMerchants(data);
    }
  };
  const getMerchants = async () => {
    const { data, error } = await supabase
      .from("merchants")
      .select()
      .ilike("title", `%${searchTerm}%`);

    if (!error) {
      setMerchants(data);
    }
  };

  useEffect(() => {
    setSearchTerm(searchParams.get("s"));
    getInitMerchants();
  }, []);

  const handleSearch = async () => {
    setSearchParams({ s: searchTerm });
    await getMerchants();
  };
  return (
    <section>
      <div className="explore-wrapper-bg">
        <div className="explore-wrapper">
          <div className="explore-wrapper-main">
            <h2>Explore</h2>
            <div className="searchBar">
              <input
                className="search-bar"
                placeholder="Silahkan Cari Disini"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              ></input>
              <button onClick={handleSearch}>Cari</button>
              <div className="button-container">
                <button>Terdekat</button>
                <button>Terlaris</button>
                <button>Rating</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="wrapper">
        <MerchantList merchants={merchants} />
      </div>
    </section>
  );
}
