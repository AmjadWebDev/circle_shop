import React from 'react';
import { Switch, Main, Logo, Menu, Logout } from './style';
import Burger from "../../layout/menuBurger/menuBurger"

const SideMenu = () => {
  return (
    <Switch>
       <Burger  />
      <Main>
        <Logo>
          <h3>Circle Products</h3>
          <img src="/white-circle.png" alt="logo" />
        </Logo>
        <Menu>
          <p>Dashboard</p>
          <p>
            <span>&#9679;</span>Products management
          </p>
          <p>Employees management</p>
        </Menu>
        <Logout>
          <p>Logout</p>
        </Logout>
      </Main>
    </Switch>
  );
};

export default SideMenu;
