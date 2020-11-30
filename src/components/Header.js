import React from "react";
import Logo from "../style/images/logo.png";
import SearchIcon from "@material-ui/icons/Search";
import "../style/css/Header.css";

function Header() {
  return (
    <div className="header">
      <div className="header__logo">
        <img src={Logo} alt="logo" />
      </div>
      <div className="header__search">
        <div className="header__searchIcon">
          <SearchIcon className="search__icon" />
        </div>
        <div className="searchInput">
          <input placeholder="Search" type="text"></input>
        </div>
      </div>
      <div className="header__menuItem">
        <a href="#">Free Stock</a>
        <a href="#">Portfolio</a>
        <a href="#">Cash</a>
        <a href="#">Messages</a>
        <a href="#">Account</a>
      </div>
    </div>
  );
}

export default Header;
