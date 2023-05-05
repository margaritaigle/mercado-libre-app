import "./SearchBox.scss";
import LogoML from "../../assets/Logo_ML.png";
import MagnifyingGlass from "../../assets/ic_Search.png";
import { useNavigate, createSearchParams, Outlet } from "react-router-dom";
import { useState } from "react";

export const SearchBox = () => {
  const [searchValue, setSearchValue] = useState("");

  const params = { q: searchValue };

  const navigate = useNavigate();
  const handleSubmit = (ev: React.FormEvent<HTMLFormElement>) => {
    ev.preventDefault();

    navigate({ pathname: "/items", search: `${createSearchParams(params)}` });
  };

  const handleChange = (ev: React.ChangeEvent<HTMLInputElement>) =>
    setSearchValue(ev.target.value);

  const handleClick = () => {
    navigate("/");
    setSearchValue("");
  };

  return (
    <>
      <header className="search-box-container">
        <img
          height={30}
          src={LogoML}
          className="ml-logo"
          onClick={handleClick}
        />
        <form className="search-box" onSubmit={handleSubmit}>
          <input
            placeholder="Nunca dejes de buscar"
            type="text"
            onChange={handleChange}
            value={searchValue}
          />
          <button className="magnifying-glass btn" type="submit">
            <img src={MagnifyingGlass} width={15} alt="meli-logo" />
          </button>
        </form>
      </header>
      <Outlet />
    </>
  );
};
