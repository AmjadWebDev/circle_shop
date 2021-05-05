import styled from "styled-components";
import { device } from "../Devices.style"

export const Logo = styled.div`
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin: 30px auto;
  h3{
    font-size: 1em;
    margin-bottom:50px;
  }
  
	
  
`;
export const StyledBurgerMenu = styled.div`
@media ${device.larg} {
    display: none;
  }
@media ${device.desktop} {
    display: none;
  }
  @media ${device.small_screen} {
    display: none;
  }
  .bm-item {
  display: inline-block;

  /* Our sidebar item styling */
  text-decoration: none;
  margin-bottom: 10px;
  color: white;
  transition: color 0.2s;
}

/* Change color on hover */
.bm-item:hover {
  color: white;
}
.bm-burger-button {
  position: fixed;
  width: 36px;
  height: 30px;
  left: 36px;
  top: 36px;
}

/* Color/shape of burger icon bars */
.bm-burger-bars {
  background: #564AFF;
}

/* Position and sizing of clickable cross button */
.bm-cross-button {
  height: 24px;
  width: 24px;
}

/* Color/shape of close button cross */
.bm-cross {
  background: white;
}

/* General sidebar styles */
.bm-menu {
  background: #564AFF;
  padding: 2.5em 1.5em 0;
  font-size: 1.15em;
}

/* Morph shape necessary with bubble or elastic */
.bm-morph-shape {
  fill: #373a47;
}

/* Wrapper for item list */
.bm-item-list {
  color: #b8b7ad;
}

/* Styling of overlay */
.bm-overlay {
  background: rgba(0, 0, 0, 0.3);
}
`;