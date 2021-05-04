import React from "react";
import { Link } from "react-router-dom";
import { slide as Menu } from "react-burger-menu";
import {StyledBurgerMenu} from "./MenuBurger.style"


export default function Burger() {
  return (
    <StyledBurgerMenu>
      <Menu left width={"180px"}>
        <Link to="/">Dashboard</Link>
        <Link to="/">Products management</Link>
        <Link to="/">Employees management</Link>
        <Link to="/">Logout</Link>
      </Menu>
    </StyledBurgerMenu>
  );
}