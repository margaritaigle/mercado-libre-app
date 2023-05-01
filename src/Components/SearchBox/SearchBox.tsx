import "./SearchBox.scss";
import LogoML from "../../assets/Logo_ML.png";
import MagnifyingGlass from "../../assets/ic_Search.png";
import { useNavigate, createSearchParams } from "react-router-dom";
import { useState } from "react";

export const SearchBox = () => {
  const [searchValue, setSearchValue] = useState("");

  const params = { q: searchValue };

  const navigate = useNavigate();
  const handleSubmit = (ev: React.FormEvent<HTMLFormElement>) => {
    ev.preventDefault();
    navigate({ pathname: "/items", search: `${createSearchParams(params)}` });
  };

  const handleChange = (ev: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(ev.target.value);
  };

  return (
    <header className="search-box-container">
      <img src={LogoML} className="ml-logo" />
      <form className="search-box" onSubmit={handleSubmit}>
        <input
          placeholder="Nunca dejes de buscar"
          type="text"
          onChange={handleChange}
        />
        <button className="magnifying-glass btn" type="submit">
          <img src={MagnifyingGlass} />
        </button>
      </form>
    </header>
  );
};
