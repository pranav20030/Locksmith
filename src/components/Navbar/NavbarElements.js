import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";


export const Nav = styled.nav`
  height: 64px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 10;
  background: rgba(82, 180, 74, 0.08);
  /* border-bottom: 1.5px solid rgba(12, 45, 6, 0.10);
  box-shadow: 0px 4px 8px 0px rgba(105, 103, 103, 0.10); */


  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
  }

  @media screen and (max-width:480px) {
    height: 60px;
    transition: 0s all ease-in-out;
  }
`;

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  z-index: 1;
  width: 100%;
  padding-right:  35px;
  
`;

export const NavLogo = styled(LinkR)`
  display: flex;
  align-items: center;
  justify-self: flex-start;
  cursor: pointer;
  text-decoration: none;
  background: #26344E;
  width: 300px;
  padding-top: 20px;


  @media screen and (max-width: 768px) {
    margin-left: 0px;
  }

  @media screen and (max-width: 480px) {
    margin-left: 0px;
    margin-top: 0px;
  }
`;
export const SvgLogo = styled.img`

`;

export const MobileIcon = styled.div`
  display: none;
  color: #000000 !important;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: -10px;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
    color: #000000 !important;
  }

  @media screen and (max-width: 480px) {
    font-size: 1.5em;
  }
`;


export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  margin-bottom: 0;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;
export const NavItem = styled.li`
  height: 80px;
`;





