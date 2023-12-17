import { useEffect, useState } from "react";
import Discount from "../components/CardDiscount";
import Recomendation from "../components/CardRecomendation";
import SearchBar from "../components/SearchBar";
import "./Home.scss";
import Hero from "../assets/hero.jpg";
import { supabase } from "../repository/db";

export default function Home() {
  const [merchants, setMerchants] = useState([]);

  const handleGetMerchants = async () => {
    const { data, error } = await supabase.from("merchants").select();

    if (!error) {
      setMerchants(data);
    }
  };

  useEffect(() => {
    handleGetMerchants();
  }, []);

  return (
    <>
      <section className="hero">
        <div className="hero-image">
          <img src={Hero} alt="Jumbotron" />
        </div>
        <div className="hero-text">
          <h1>Luru.</h1>
          <p>Yang kamu mau ada di sekitarmu!!!</p>
          <SearchBar />
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
          <Recomendation merchants={merchants} />
        </div>
      </section>
    </>
  );
}
