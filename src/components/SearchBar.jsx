import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SearchBar() {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearch = () => {
    navigate(`explores?s=${searchTerm}`);
  };

  return (
    <>
      <input
        className="search-bar"
        placeholder="Silahkan Cari Disini"
        value={searchTerm}
        onChange={handleChange}
      ></input>
      <button onClick={handleSearch}>Cari</button>
    </>
  );
}
