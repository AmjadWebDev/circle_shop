import React from 'react';
import { Main, Logo, Menu, Logout } from './style';

const SideMenu = () => {
  return (
    <Main>
      <Logo>
        <h3>Circle Products</h3>
        <img src="/white-circle.png" alt="logo" />
      </Logo>
      <Menu>
        <p>Dashboard</p>
        <p><span>&#9679;</span>Products management</p>
        <p>Employees management</p>
      </Menu>
      <Logout>
        <p>Logout</p>
      </Logout>
    </Main>
  );
};

export default SideMenu;
