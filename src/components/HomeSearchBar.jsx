import { useState, useEffect } from "react";
import { merchants as merchantsData } from "../data/data";
import "./HomeSeacrhBar.scss";

export default function HomeSearchBar() {
  const [search, setSearch] = useState("");
  const [foundedSearch, setFoundedSearch] = useState([]);

  function onSubmit(e) {
    e.preventDefault();

    // const filtered = merchantsData.filter((merchant) => merchant.name.toLowerCase().includes(search.toLowerCase()));
    setFoundedSearch(
      merchantsData.filter((merchant) =>
        merchant.name.toLowerCase().includes(search.toLowerCase())
      )
    );
    console.log(foundedSearch);
  }

  return (
    <form className="searchForm" onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="Search merchant"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button type="submit">Search</button>
    </form>
  );
}

// export default class SearchBar extends React.Component {
//     constructor(props) {
//         super(props);

//         state = {
//             keyword: props.defaultKeyword || ''
//         };

//         onSubmitHandler = onSubmitHandler.bind(this);
//         onKeywordChangeHandler = onKeywordChangeHandler.bind(this);
//     }

//     onSubmitHandler(event) {
//         event.preventDefault();
//         props.search(state.keyword);
//     }

//     onKeywordChangeHandler(event) {
//         const { value } = event.target;

//         setState(() => {
//             return {
//                 keyword: value
//             };
//         });
//     }

//     render() {
//         return (
//             <form className="searchForm" onSubmit={onSubmitHandler}>
//                 <input type="text"
//                 placeholder="Search merchant"
//                 value={state.keyword}
//                 onChange={onKeywordChangeHandler}
//                  />
//                  <button type="submit">Search</button>
//             </form>

//         )
//     }
// }
