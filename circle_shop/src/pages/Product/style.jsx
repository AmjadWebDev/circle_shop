import styled from 'styled-components';
import { device } from '../../layout/Devices.style';

export const Main = styled.div`
  float: left;
  width: calc(95% - 280px);
  width: -moz-calc(95% - 280px);
  width: -webkit-calc(95% - 280px);
  padding-left: calc(280px + 7%);
  padding-left: -moz-calc(280px + 7%);
  padding-left: -webkit-calc(280px + 7%);
  padding-top: 30px;
  padding-bottom: 30px;
  position: fixed;
  z-index: 300;
  display: flex;
  flex-direction: column;
  color: #707070;
  font-family: 'Roboto', sans-serif;
  font-size: 14px;
  font-weight: 400;

  @media ${device.desktop} {
    width: calc(95% - 200px);
    width: -moz-calc(95% - 200px);
    width: -webkit-calc(95% - 200px);
    padding-left: calc(200px + 7%);
    padding-left: -moz-calc(200px + 7%);
    padding-left: -webkit-calc(200px + 7%);
  }

  @media ${device.small_screen} {
    width: calc(95% - 180px);
    width: -moz-calc(95% - 180px);
    width: -webkit-calc(95% - 180px);
    padding-left: calc(180px + 5%);
    padding-left: -moz-calc(180px + 5%);
    padding-left: -webkit-calc(180px + 5%);

    font-size: 12px;
  }
  @media ${device.tablet} {
    width: calc(95% - 0px);
    width: -moz-calc(95% - 0px);
    width: -webkit-calc(95% - 0px);
    padding-left: calc(0px + 5%);
    padding-left: -moz-calc(0px + 5%);
    padding-left: -webkit-calc(0px + 5%);

    font-size: 11px;
  }
  @media ${device.mobile} {
    width: calc(95% - 0px);
    width: -moz-calc(95% - 0px);
    width: -webkit-calc(95% - 0px);
    padding-left: calc(0px + 5%);
    padding-left: -moz-calc(0px + 5%);
    padding-left: -webkit-calc(0px + 5%);

    font-size: 11px;
  }
`;
export const Title = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 80%;
  height: 20%;
  margin-top: 20px;
  img {
    width: 40px;
  }
  h1 {
    color: #564aff;
    font-size: 28px;
    margin: 0 auto;
  }

  @media ${device.small_screen} {
    h1 {
      font-size: 24px;
      text-align: center;
    }
    img {
      width: 25px;
      height: 25px;
    }
  }
  @media ${device.tablet} {
    margin-top: 50px;
    h1 {
      font-size: 20px;
      text-align: center;
    }
    img {
      width: 25px;
      height: 25px;
    }
  }
  @media ${device.mobile} {
    margin-top: 50px;
    h1 {
      font-size: 18px;

      margin-left: 20px;
    }
    img {
      width: 25px;
      height: 25px;
    }
  }
`;
export const Details = styled.div`
  display: flex;
  flex-direction: row;
  width: 95%;
  height: 70%;
  margin-top: 70px;

  @media ${device.mobile} {
    flex-direction: column;
  }
`;
export const Right = styled.div`
  width: 15%;

  @media ${device.small_screen} {
    span {
      font-size: 9px;
    }
  }
  @media ${device.tablet} {
    span {
      font-size: 8px;
    }
  }
  @media ${device.mobile} {
    display: none;
  }
`;

export const Left = styled.div`
  width: 50%;
  height: 100%;
  text-align: center;
  box-shadow: 0px 2px 5px #0000001a;
  img {
    vertical-align: middle;
    width: 50%;
    height: 70%;
    padding: 80px;
  }

  @media ${device.small_screen} {
    img {
      padding: 70px;
    }
  }
  @media ${device.tablet} {
    width: 45%;
    img {
      padding: 50px;
    }
  }
  @media ${device.mobile} {
    width: 93%;
    img {
      padding: 50px;
    }
  }
`;
export const SmTitle = styled.h3`
  color: #564aff;
  font-family: 'Roboto', sans-serif;
  font-size: 18px;

  @media ${device.small_screen} {
    font-size: 15px;
  }
  @media ${device.tablet} {
    font-size: 14px;
  }
  @media ${device.mobile} {
    font-size: 14px;
  }
`;
export const Mid = styled.div`
  width: 30%;
  display: flex;
  flex-direction: column;
  margin: 0 25px;

  @media ${device.desktop} {
    height: 60%;
  }

  @media ${device.tablet} {
    width: 35%;
  }
  @media ${device.mobile} {
    width: 90%;
    margin: 20px 0;
  }
`;
export const MidUp = styled.div`
  @media ${device.larg} {
    #mobileCat {
      display: none;
    }
  }
  @media ${device.desktop} {
    #mobileCat {
      display: none;
    }
  }

  @media ${device.small_screen} {
    #mobileCat {
      display: none;
    }
  }
  @media ${device.tablet} {
    #mobileCat {
      display: none;
    }
  }

  @media ${device.mobile} {
    #mobile {
      display: flex;
      flex-direction: row-reverse;
      justify-content: space-between;
    }
    #mobileCat {
      margin: auto 0;
    }
  }
`;
export const MidDown = styled.div`
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-around;
  align-items: center;

  @media ${device.tablet} {
    margin-top: 30px;
  }
`;
export const MidDownR = styled.div`
  margin: 0 0 10px 20px;
  span {
    font-weight: bold;
  }

  @media ${device.small_screen} {
    text-align: center;
    margin: 0 0 18px 5px;
  }
  @media ${device.tablet} {
    margin: 0 0 22px 10px;
  }
  @media ${device.mobile} {
    margin: 0 0 22px 10px;
  }
`;
export const MidDownL = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  button {
    height: 40px;

    color: white;
    background: #564aff 0% 0% no-repeat padding-box;
    border: 1px solid #564aff;
    border-radius: 3px;
    opacity: 1;
    margin-top: 25px;
  }

  @media ${device.tablet} {
    button {
      height: 35px;
      width: 70px;
    }

    margin-top: 0px;
  }
  @media ${device.mobile} {
    button {
      height: 35px;
      width: 95px;
    }
  }
`;
export const PriceBox = styled.input`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border: 1px solid #564aff;
  border-radius: 3px;
  opacity: 1;
  height: 30px;
  width: 90px;
  color: #707070;

  @media ${device.tablet} {
    height: 35px;
    width: 65px;
  }
`;
