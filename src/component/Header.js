import React from "react";
import styled from "styled-components";
import NavbarItem from "./NavbarItem";
const Header = () => {
  return (
    <Nav>
      <Logo src="./images/logo.svg" />
      <NavMenu>
        <NavbarItem url="./images/home-icon.svg" title="HOME" />
        <NavbarItem url="./images/search-icon.svg" title="SEARCH" />
        <NavbarItem url="./images/watchlist-icon.svg" title="WATCHLIST" />
        <NavbarItem url="./images/original-icon.svg" title="ORIGINALS" />
        <NavbarItem url="./images/movie-icon.svg" title="MOVIS" />
        <NavbarItem url="./images/series-icon.svg" title="SERIES" />
      </NavMenu>
      <UserImg src="./images/logo.svg" />
    </Nav>
  );
};
export default Header;

const Nav = styled.nav`
  height: 70px;
  background: #090b13;
  display: flex;
  align-items: center;
  padding: 0 36px;
  overflow-x: hidden;
`;
const Logo = styled.img`
  width: 80px;
`;
const NavMenu = styled.div`
  display: flex;
  flex: 1;
  margin-left: 25px;
  align-items: center;
  a {
    display: flex;
    align-items: center;
    cursor: pointer;
    padding: 0 12px;

    img {
      height: 20px;
      margin: 5px;
    }
    span {
      font-size: 13px;
      letter-spacing: 1.42px;
      position: relative;

      &:after {
        content: "";
        height: 2px;
        background: #fbffff;
        position: absolute;
        left: 0;
        right: 0;
        bottom: -16px;
        /* opacity:0; */
        transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
        transform: scaleX(0);
      }
    }
    &:hover {
      span:after {
        transform: scaleX(1);
      }
    }
  }
`;
const UserImg = styled.img`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  cursor: pointer;
`;
// #01f9c6
