import styled from 'styled-components';

export const Box = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
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

`;
export const Head = styled.div`
background-color: #6038ee;
  color:white;
  width: 100%;
  display: flex;
  flex-direction: row;
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

`;
export const Title = styled.p`
  width: 50%;
  text-align:left;
  margin-left:10px;
`;
export const Cat = styled.p`
  width: 20%;
  text-align:left;
`;
export const Price = styled.p`
  width: 15%;
`;
export const Vat = styled.p`
  width: 15%;
  text-align:right;
  margin-right:15px;
`;
