import styled from "styled-components";

export const DashboardContainer = styled.div`
  color: #fff;
  background: ${({ lightBg }) => (lightBg ? "#f9f9f9" : "#F2F2F2")};
  margin-left: 300px;
  overflow: scroll;
  overflow-x: hidden;
  overflow-y: hidden;
  padding: 0rem 2rem;

   @media (max-width: 768px) {
    margin-left: 0px;
  }

  @media screen and (max-width: 768px) {
    margin-left: 0px;
  }
`;

export const DashboardWrapper = styled.div`
  display: flex;
  z-index: 1;
  height: 91vh;
  width: 100%;
  margin-right: auto;
  margin-left: auto;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  overflow: overlay;
`;

export const DashboardHeading = styled.div`
  width: 100%;
  padding: 1rem 0;
  display: flex;
  justify-content: space-between;
  gap: 1rem;

  @media screen and (max-width: 768px) {
    padding: 0.5rem 0;

  }
  .select{
    color: black;
    margin-top: -0.5rem;
    font-size: 1.2rem;
  }
`;
export const DashText = styled.div`
 display: flex;
 flex-direction: column;
`

export const DashHeading = styled.div`
  font-family: "Roboto", serif;
  font-size: 22px;
  font-weight: 500;
  line-height: 26px;
  letter-spacing: 0em;
  text-align: left;
  color: #05004E;
  

  @media screen and (max-width: 880px) {
    font-size: 18px;
  }

  @media screen and (max-width: 768px) {
    font-size: 20px;
  }

  @media screen and (max-width: 480px) {
    font-size: 14px;
  }
`;

export const DashCard = styled.div`
  height: auto;
  // width: auto;
  display: flex;
  font-size: 17px;
  padding: 10px 15px;
  background-color: white;
  justify-content: space-between;
  align-items: center;
  border-radius: 5px;
  margin-bottom: 15px;
  box-shadow: 0px 2px 2px #00000012;
  color: #1a1a1a;
`;

export const DashContainerCard = styled.div`
  // background-color: pink;
  height: auto;
  width: 80%;
  padding: 20px 20px;
  display: grid;
  margin-left: 1.5rem;
  grid-template-columns: auto auto auto auto;
  grid-gap: 14px 25px;

  @media screen and (max-width: 1290px) {
    display: flex;
    flex-direction: column;
  }
`;

export const HeadingButton = styled.div``;

export const DashContentCard = styled.div`
  height: auto;
  width: 320px;
  display: flex;
  font-size: 17px;
  padding: 15px;
  background-color: #ffffff;
  justify-content: space-between;
  align-items: center;
  border-radius: 8px;
  margin-bottom: 15px;
  box-shadow: 0px 2px 2px lightgrey;
  color: #1a1a1a;

  @media screen and (max-width: 1590px) {
    width: 300px;
  }

  @media screen and (max-width: 425px) {
    width: 335px;
  }

  @media screen and (max-width: 375px) {
    width: 300px;
  }

  @media screen and (max-width: 320px) {
    width: 250px;
  }
`;
export const CardDetail = styled.div`
 width: 100%;
 display: flex;
 justify-content: space-between;
`
export const DashContainerCardIcon = styled.div`
  height: auto;
  width: auto;
  display: flex;
  justify-content: center;
  border-radius: 50%;
  padding: 0.8rem 0rem;
  color: white;
`;

export const DashIcon = styled.img`
  height: auto;
  width: 50%;
  padding: 14px;
`;

export const DashContainerCardContent = styled.div`
  height: auto;
  width: 65%;
  margin: auto;
  // background-color: lightcyan;
`;

export const DashContainerCardContentTotal = styled.p`
  color: #808080;
  font: normal normal normal 11px/24px Lato;
  letter-spacing: 0.11px;
`;

export const DashContainerCardContentNumber = styled.p`
  color: #000000;
  font: normal normal bold 20px/24px Lato;
  letter-spacing: 0.2px;
`;

export const DashContainerCardContentOrder = styled.p`
  color: #404040;
  font: normal normal normal 14px/24px Lato;

  letter-spacing: 0.42px;
`;

export const DashContent = styled.p`
  height: auto;
  width: 97%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
  color: #1a1a1a;
  padding: 0 10px;
  font-size: 1.3rem;
  // margin-left: 2rem;
`;

export const Button = styled.button`
  width: fit-content;
  padding: 0.6rem 1.5rem;
  border-radius: 4px;
  background: #52b44a;
  color: #ffffff;
  border: none;
  outline: none;
  display: flex;
  align-items: center;
  justify-content: center;
`;