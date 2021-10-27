import React from "react";

const NavbarItem = (props) => {
  return (
    <a>
      <img src={props.url} alt=""/>
      <span>{props.title}</span>
    </a>
  );
};
export default NavbarItem;
