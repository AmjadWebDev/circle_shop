import styled from 'styled-components';

export const Main = styled.div`
  max-width: 90%;
  float: left;
  width: calc(93% - 230px);
  width: -moz-calc(93% - 230px);
  width: -webkit-calc(93% - 230px);
  padding-left: calc(230px + 7%);
  padding-left: -moz-calc(230px + 7%);
  padding-left: -webkit-calc(230px + 7%);
  padding-top: 30px;
  padding-bottom: 30px;
  position: fixed;
  z-index: 300;
  display: flex;
  flex-direction: column;
  color: #8f8f8f;
  font-family: 'Roboto', sans-serif;
  font-size: 14px;
  font-weight: 400;
`;
export const Title = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 70%;
  height: 20%;
  margin-top: 20px;
  img {
    width: 40px;
  }
  h1 {
    color: #5542ff;
    font-size: 28px;
    margin: 0 auto;
  }
`;
export const Details = styled.div`
  display: flex;
  flex-direction: row;
  width: 70%;
  height: 60%;
  margin-top: 70px;
`;
export const Right = styled.div`
  width: 15%;
`;
export const Mid = styled.div`
  width: 35%;
  display: flex;
  flex-direction: column;
  margin: 0 25px;
`;
export const Left = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;

  box-shadow: 0 2.8px 2.2px rgba(0, 0, 0, 0.014), 0 6.7px 5.3px rgba(0, 0, 0, 0.028), 0 12.5px 10px rgba(0, 0, 0, 0.03), 0 22.3px 17.9px rgba(0, 0, 0, 0.042), 0 41.8px 33.4px rgba(0, 0, 0, 0.046), 0 100px 80px rgba(0, 0, 0, 0.07);
  img {
    width: 60%;
    height: 70%;
  }
`;
export const SmTitle = styled.h3`
  color: #5542ff;
  font-family: 'Roboto', sans-serif;
  font-size: 18px;
`;
export const MidUp = styled.div``;
export const MidDown = styled.div`
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
  align-items: center;
`;
export const MidDownR = styled.div`
span{
  font-weight: bold;
}
`;
export const MidDownL = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  button {
    height: 30px;
    border: 2px solid gray;
    border-radius: 5px;
    color: white;
    background-color: #5542ff;
    margin-top:25px;
  }
`;
export const PriceBox = styled.input`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border: 2px solid #5542ff;
  border-radius: 5px;
  height: 30px;
  width: 90px;
  color: #8f8f8f;
  /* p {
    margin: 5px;
  } */
`;
