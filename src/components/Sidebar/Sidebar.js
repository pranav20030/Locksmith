import React, { useState } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import Cookies from "js-cookie";
import SubMenu from "./SubMenu";
import "./sidebarScrollDesign.css";


import * as actionTypes from "../../store/actions";
import { SidebarData, profileSidebarData } from "./SidebarData";


// icons

import { IconContext } from "react-icons/lib";

import { AiFillSetting } from "react-icons/ai";


const SidebarNav = styled.nav`
  background: #26344E;
  font-family: "Oxygen", serif;
  width: 300px;
  height: 100vh;
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  left: ${({ sidebar }) => (sidebar ? "0" : "-100%")};
  transition: 100ms;
  z-index: 8;

  @media screen and (max-width: 768px) {
    
    left: ${({ sidebar }) => (sidebar ? "-100%" : "0")};
  }
`;

const SidebarWrap = styled.div`
  width: 100%;
  overflow-x: hidden;
  box-shadow: rgb(0 0 0 / 10%) 0px 4px 12px;
`;


export const SidebarDiv = styled.p`
  margin-top: 4rem;
`;

const Sidebar = ({ userData, sidebar, setSidebar }) => {
  var showProfileSidebar = Cookies.get("showProfileSidebar") ? JSON.parse(Cookies.get("showProfileSidebar")) : "";
  const subadminData = JSON.parse(localStorage.getItem("userData")) || JSON.parse(sessionStorage.getItem("userData"));
  // const showSidebar = () => setSidebar(!sidebar);
  // const [isLoading, setIsLoading] = useState(false);
  // const navigate = useNavigate();

  // Get modulePermission from userData
  const modulePermission = subadminData?.modulePermission || userData?.modulePermission || [];

  // Filter SidebarData based on user permissions
  const filteredSidebarData = SidebarData.filter(item =>
    modulePermission.includes(item.path.split("/adminPanel/")[1]) || userData?.userType !== "subAdmin"
  );

  return (
    <>
      {showProfileSidebar ? (
        <IconContext.Provider value={{ color: "#fffff" }}>
          <SidebarNav sidebar={sidebar}>
            <SidebarWrap className="designScrollbarSide">
              <SidebarDiv></SidebarDiv>
              <div className="d-flex align-items-center" style={{padding:"18px 0 18px 18px"}}>
                <AiFillSetting style={{ color: "#0C2D06", fontWeight: "700", fontSize: "1.2rem" }} />
                <p className="admin-settings mb-0">Admin Settings</p>
              </div>
              {profileSidebarData.map((item, index) => {
                return <SubMenu item={item} key={index} />;
              })}
            </SidebarWrap>
          </SidebarNav>
        </IconContext.Provider>
      ) : (
        <IconContext.Provider value={{ color: "#fffff" }}>
          <SidebarNav sidebar={sidebar}>
            <SidebarWrap className="designScrollbarSide">
              <SidebarDiv></SidebarDiv>
              
              <div style={{marginTop:'6rem', color:'white', padding:'0rem 1rem'}}><hr /></div>
              {filteredSidebarData.map((item, index) => {
                return <SubMenu item={item} key={index} />;
              })}
            </SidebarWrap>
          </SidebarNav>
        </IconContext.Provider>
      )}
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    userData: state.userData,
    locationData: state.locations,
    defaultState: state.defaultState,
    sidebar: state.sidebar,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setUsers: (updatedValue) => {
      dispatch({
        type: actionTypes.UPDATE_USER,
        updatedUser: updatedValue,
      });
    },
    setDefaultState: (updatedValue) => {
      dispatch({
        type: actionTypes.UPDATE_DEFAULT,
        updateDefault: updatedValue,
      });
    },
    setSidebar: (updatedValue) => {
      dispatch({
        type: actionTypes.UPDATE_SIDEBAR,
        updateSidebar: updatedValue,
      });
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Sidebar);
