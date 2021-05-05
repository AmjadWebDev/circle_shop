import styled from 'styled-components';
import {device} from "../../layout/Devices.style"

export const Box = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 5px 0;
  min-height:50px;
  font-family: 'Roboto', sans-serif;
  font-size: 12px;
  font-weight:bold;
  color:#8f8f8f;
  text-align:center;
  border-radius:4px;
  box-shadow:
  0 2.8px 2.2px rgba(0, 0, 0, 0.014),
  0 6.7px 5.3px rgba(0, 0, 0, 0.028),
  0 12.5px 10px rgba(0, 0, 0, 0.03),
  0 22.3px 17.9px rgba(0, 0, 0, 0.042),
  0 41.8px 33.4px rgba(0, 0, 0, 0.046),
  0 100px 80px rgba(0, 0, 0, 0.07)
;
background-color:white;
@media ${device.desktop} {
  font-size:11px;
  }
 
	@media ${device.small_screen} {
    font-size:11px;
  }
	@media ${device.tablet} {
    font-size:10px;
  }
	@media ${device.mobile} {
    font-size:10px;
  }

`;
export const Head = styled.div`
background-color: #5542ff;
  color:white;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 5px 0;
  min-height:50px;
  font-family: 'Roboto', sans-serif;
  font-size: 12px;
  font-weight:bold;
  
  border-radius:4px;
  box-shadow:
  0 2.8px 2.2px rgba(0, 0, 0, 0.014),
  0 6.7px 5.3px rgba(0, 0, 0, 0.028),
  0 12.5px 10px rgba(0, 0, 0, 0.03),
  0 22.3px 17.9px rgba(0, 0, 0, 0.042),
  0 41.8px 33.4px rgba(0, 0, 0, 0.046),
  0 100px 80px rgba(0, 0, 0, 0.07)
;
@media ${device.desktop} {
  
  }
 
	@media ${device.small_screen} {
    font-size:11px;
  }
	@media ${device.tablet} {
    font-size:10px;
  }
	@media ${device.mobile} {
    font-size:10px;
  }
`;
export const Title = styled.p`
  width: 50%;
  text-align:left;
  margin-left:10px;
  margin-right:10px;
  @media ${device.desktop} {
    
  }
 
	@media ${device.small_screen} {
    width: 43%;
  }
	@media ${device.tablet} {
    width: 45%;
  }
	@media ${device.mobile} {
    width: 40%;
  }
`;
export const Cat = styled.p`
  width: 20%;
  text-align:left;
  display: flex;
  flex-direction: row;
  align-items: center;
  select{
    width:20px;
    background-color: #5542ff;
    color:white;
    margin-left:5px;
    border:transparent;
    
  }
  @media ${device.desktop} {
    
  }
 
	@media ${device.small_screen} {
    width:30%;
  }
	@media ${device.tablet} {
    width:35%;
    h5{
      font-size:10px;
    }
      font-size:9px;
  }
	@media ${device.mobile} {
    width:30%;
    h5{
      font-size:9px;
    }
      font-size:7px;
    
    
    select{
    width:17px;
    font-size:9px;
    margin-left:3px;
    
    
  }
  }
`;
export const Price = styled.p`
  width: 12%;
  @media ${device.desktop} {
    
  }
 
	@media ${device.small_screen} {
    width: 12%
  }
	@media ${device.tablet} {
    
  }
	@media ${device.mobile} {
    width:15%;
    
  }
`;
export const Vat = styled.p`
  width: 13%;
  text-align:right;
  margin-right:15px;
  span{
    font-weight:lighter;
    color: rgba(255, 255, 255,0.8)
  }
  @media ${device.desktop} {
    
  }
 
	@media ${device.small_screen} {
    width: 15%
  }
	@media ${device.tablet} {
    text-align:center;
    margin-left:3px;
    margin-right:10px;
  }
	@media ${device.mobile} {
    width: 20%;
    margin-right:5px;
    
   
  }
`;
