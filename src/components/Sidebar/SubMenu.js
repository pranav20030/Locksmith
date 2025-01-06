import React, { useState } from "react";
import styled from "styled-components/macro";
import { NavLink, useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import * as actionTypes from "../../store/actions";

const SidebarLink = styled(Link)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0rem 2rem;
 
  height: 33px;
  text-decoration: none;
 
  margin-bottom: 1px;
  
  color: ${({ sidebarActive }) => sidebarActive ? "#FFFFFF" : "#FFFFFF"};
  background: ${({ sidebarActive }) => sidebarActive ? "linear-gradient(90deg, rgba(255, 255, 255, 0.22) -7.27%, rgba(170, 200, 255, 0.22) 100%)" : ""}; 
  


  
`;

const SidebarLabel = styled.span`
  margin-left: 14px;
  font-family: "Oxygen", serif;
  font-size: 14px;
  font-weight: 700;
  line-height: 19.07px;
  text-align: left;

  // &:hover {
  //   color: #21afe6;
  // }
`;

const DropdownLink = styled(Link)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 18px 0px 18px 18px;
  margin-left: 10px;
  height: 45px;
  text-decoration: none;
  border-radius: 6px 0 0 6px;
  /* color: rgb(12, 45, 6); */
  margin-bottom: 1px;
  background: ${({ sidebarActive }) => sidebarActive ? "linear-gradient(90deg, rgba(255, 255, 255, 0.22) -7.27%, rgba(170, 200, 255, 0.22) 100%)" : ""};

  /* &:hover {
    color: rgb(12, 45, 6);
  } */
`;

const IconLabel = styled.div`
  width: 100%;
  border-radius: 1.5px;
  display: flex;
  align-items: baseline;
  // color: ${({ sidebarActive }) => (sidebarActive ? "#fff" : "grey")};

  &:hover {
    cursor: pointer;
  }
`;

const SidebarIcon = styled.span`
  font-weight: 700;
  font-size: 1.2rem;

  &:hover {
    color: #21afe6;
  }
`;

const SubMenu = ({ userData, item, history, sidebar, setSidebar }) => {
  const [subnav, setSubnav] = useState(false);
  const showSubnav = () => setSubnav(!subnav);
  const showSidebar = () => setSidebar(!sidebar);

  const location = useLocation();
  const sidePathname = location.pathname.split("/adminPanel")[1];

  const handleClick = () => {
    localStorage.setItem("selectedPackageType", 0);
    if (item.subNav) {
      showSubnav();
    } else if (!sidebar) {
      showSidebar();
    }
  };

  const isActive = 
    location.pathname === item.path ;

  return (
    <>
      <SidebarLink
        sidebarActive={isActive}
        to={item.path}
        onClick={handleClick}
        
      >
        <IconLabel sidebarActive={isActive}>
          <SidebarIcon
            style={{
              // color: isActive ? "#FFFFFF" : "#0C2D06",
              fontWeight: isActive ? "600" : "",
            }}
          >
            {item.icon}
          </SidebarIcon>
          <SidebarLabel
           
          >
            {item.title}
          </SidebarLabel>
        </IconLabel>
        <div>
          {item.subNav && subnav
            ? item.iconOpened
            : item.subNav
            ? item.iconClosed
            : null}
        </div>
      </SidebarLink>
      {subnav &&
        item.subNav.map((item, index) => {
          return (
            <DropdownLink
              to={item.path}
              sidebarActive={
                location.pathname === item.path ||
                sidePathname === item.path.split("/adminPanel")[1]
              }
              key={index}
            >
              <IconLabel
                style={{
                  color: location.pathname === item.path ? "#FFFFFF" : "#0C2D06",
                  fontWeight: location.pathname === item.path ? "600" : "",
                }}
              >
                <SidebarLabel
                  style={{
                    color: location.pathname === item.path ? "#FFFFFF" : "#0C2D06",
                    fontWeight: location.pathname === item.path ? "600" : "",
                    marginLeft: "33px",
                  }}
                >
                  {item.title}
                </SidebarLabel>
              </IconLabel>
            </DropdownLink>
          );
        })}
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

export default connect(mapStateToProps, mapDispatchToProps)(SubMenu);