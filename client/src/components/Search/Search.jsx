import style from "./Search.module.css";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { getAllDogs, getDogByName } from "../../redux/actions/actions";

const Search = () => {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  const handleInput = (event) => {
 {
      setInput(event.target.value);
    }
  };
  const handleClick = (event) => {
    let { value } = event.target;
    if (value) {
      dispatch(getDogByName(value));
      setInput("");
    } else {
      dispatch(getAllDogs());
    }
  };
  return (
    <div className={style.containerSearch}>
      <input
        type="text"
        placeholder="Search"
        value={input}
        onChange={handleInput}
        className={style.searchInPut}
      />
      <button
        value={input}
        onClick={handleClick}
        // onKeyDown={handleKeyPress}
        className={style.buttonSearch}
      >
        🔎
      </button>
    </div>
  );
};

export default Search;
