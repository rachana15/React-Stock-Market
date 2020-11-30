import React from "react";
import Logo from "../style/images/logo.png";
import SearchIcon from "@material-ui/icons/Search";
import "../style/css/Header.css";

function Header() {
  return (
    <div className="header">
      <div class="header__logo">
        <img src={Logo} alt="logo" />
      </div>
      <div class="header__search">
        <div class="header__searchIcon">
          <SearchIcon className="search__icon"/>
        </div>
        <div class="searchInput">
            
          <input placeholder="Search" type="text"></input>
        </div>
      </div>
      <div class="header__menuItem">
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
