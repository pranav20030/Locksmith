import styled from "styled-components";

export const DashboardContainer = styled.div`
  color: #fff;
  
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






export const CardDetail = styled.div`
 width: 100%;
 display: flex;
 justify-content: space-between;
`









