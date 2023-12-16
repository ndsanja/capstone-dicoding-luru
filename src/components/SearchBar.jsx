import { useState } from "react";

export default function SearchBar({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState("");

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      onSearch(searchTerm);
    }
  };

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <>
      <input
        className="search-bar"
        placeholder="Silahkan Cari Disini"
        value={searchTerm}
        onKeyDown={handleKeyDown}
        onChange={handleChange}
      ></input>
    </>
  );
}
