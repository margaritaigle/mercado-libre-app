import "./SearchBox.scss";
import LogoML from "../../assets/Logo_ML.png";
import MagnifyingGlass from "../../assets/ic_Search.png";

export const SearchBox = () => {
  return (
    <header className="search-box-container">
      <img src={LogoML} className="ml-logo" />
      <form className="search-box">
        <input placeholder="Nunca dejes de buscar" type="text" />
        <button className="magnifying-glass btn" type="submit">
          <img src={MagnifyingGlass} />
        </button>
      </form>
    </header>
  );
};
