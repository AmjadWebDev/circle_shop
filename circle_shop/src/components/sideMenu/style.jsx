import styled from 'styled-components';
import { device } from '../../layout/Devices.style';

export const Switch = styled.div``;
export const Main = styled.div`
  background-color: #564aff;
  color: white;
  font-family: 'Roboto', sans-serif;
  font-size: 16px;
  position: fixed;
  float: left;
  width: 280px;
  padding-top: 30px;
  padding-left: 25px;
  top: 0;
  bottom: 0;

  z-index: 400;
  @media ${device.desktop} {
    width: 200px;
  }
  @media ${device.small_screen} {
    width: 180px;
  }
  @media ${device.tablet} {
    display: none;
  }
  @media ${device.mobile} {
    display: none;
  }
`;
export const Logo = styled.div`
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
  align-items: center;
  width: 70%;
  margin: 30px auto;
  img {
    width: 60px;
    height: 60px;
    margin-right: 10px;
  }
  @media ${device.small_screen} {
    font-size: 15px;
    img {
      width: 50px;
      height: 50px;
    }
  }
`;
export const Menu = styled.div`
  width: 80%;
  font-size: 13px;
  font-weight: bold;
  margin-top: 120px;
  border-bottom: 2px solid rgba(186, 186, 186, 0.5);
  padding-bottom: 20px;
  margin-left: 10px;
  p {
    margin: 25px 0;
  }
  span {
    font-size: 20px;
    margin-right: 8px;
  }
  @media ${device.desktop} {
    margin-top: 80px;
    font-size: 12px;
    padding-bottom: 15px;
  }
  @media ${device.small_screen} {
    margin-top: 60px;
    font-size: 11px;
    padding-bottom: 12px;
  }
`;
export const Logout = styled.div`
  font-size: 13px;
  font-weight: bold;
  padding-top: 25px;
  margin-left: 10px;
  @media ${device.desktop} {
    font-size: 12px;
    padding-top: 20px;
  }
  @media ${device.small_screen} {
    font-size: 11px;
    padding-top: 18px;
  }
`;
