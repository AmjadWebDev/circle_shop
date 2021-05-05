import styled from 'styled-components';
import { device } from '../../layout/Devices.style';

export const Main = styled.div`
  text-align: center;
  float: left;

  margin-left: calc(280px + 9%);
  margin-left: -moz-calc(280px + 9%);
  margin-left: -webkit-calc(280px + 9%);

  margin-right: 9%;
  padding-top: 100px;

  width: calc(82% - 280px);
  width: -moz-calc(82% - 280px);
  width: -webkit-calc(82% - 280px);

  padding-bottom: 150px;
  @media ${device.desktop} {
    margin-left: calc(200px + 11%);
    margin-left: -moz-calc(200px + 11%);
    margin-left: -webkit-calc(200px + 11%);

    margin-right: 9%;
    padding-top: 100px;

    width: calc(82% - 200px);
    width: -moz-calc(82% - 200px);
    width: -webkit-calc(82% - 200px);
  }

  @media ${device.small_screen} {
    margin-left: calc(180px + 11%);
    margin-left: -moz-calc(180px + 11%);
    margin-left: -webkit-calc(180px + 11%);

    margin-right: 9%;
    padding-top: 100px;

    width: calc(82% - 180px);
    width: -moz-calc(82% - 180px);
    width: -webkit-calc(82% - 180px);
  }
  @media ${device.tablet} {
    margin-left: calc(0px + 9%);
    margin-left: -moz-calc(0px + 9%);
    margin-left: -webkit-calc(0px + 9%);

    margin-right: 10%;
    padding-top: 100px;

    width: calc(82% - 0px);
    width: -moz-calc(82% - 0px);
    width: -webkit-calc(82% - 0px);
  }
  @media ${device.mobile} {
    margin-left: calc(0px + 9%);
    margin-left: -moz-calc(0px + 9%);
    margin-left: -webkit-calc(0px + 9%);

    margin-right: 10%;
    padding-top: 100px;

    width: calc(82% - 0px);
    width: -moz-calc(82% - 0px);
    width: -webkit-calc(82% - 0px);
  }
`;
export const Title = styled.div`
  color: #5542ff;
  font-family: 'Roboto', sans-serif;
  font-weight: bolder;
  font-size: 32px;
  @media ${device.desktop} {
    font-size: 28px;
  }
  @media ${device.small_screen} {
    font-size: 23px;
  }
  @media ${device.tablet} {
    font-size: 20px;
  }
  @media ${device.mobile} {
    font-size: 20px;
  }
`;
