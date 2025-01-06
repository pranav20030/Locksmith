import React, { useState, useEffect, useRef } from "react";
import { FaBars } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import { IoCaretDownOutline } from "react-icons/io5";
import Cookies from "js-cookie";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  SvgLogo,
} from "./NavbarElements";

import navbarLogo from "../../assets/logo.png";
import "react-phone-input-2/lib/style.css";
import Overlay from "../Overlay";
import SidebarOverlay from "../SidebarOverlay";
import { connect } from "react-redux";
import * as actionTypes from "../../store/actions";
import axios from "../../axios";
import { toast } from "react-toastify";
import dummyProfile from "../../assets/img.png";
import { RiLogoutBoxLine } from "react-icons/ri";
import { HiArrowNarrowLeft } from "react-icons/hi";
import { RxCross2 } from "react-icons/rx";
import { PiPassword } from "react-icons/pi";
import { AiOutlineUser } from "react-icons/ai";
import { Modal } from "../../components/Modal";
import "./Nav.css";
import { Link, NavLink, useNavigate  } from 'react-router-dom';

const Navbar = (props) => {
  const { userData, history, sidebar, setSidebar, setUsers } = props;
  const navigate = useNavigate();
  const [openModal, setOpenModal] = useState(false);
  const accessToken = sessionStorage.getItem("token") || localStorage.getItem("token");
  const adminData = JSON.parse(sessionStorage.getItem("userData") || localStorage.getItem("userData"));
  var showProfileSidebar = Cookies.get("showProfileSidebar") ? JSON.parse(Cookies.get("showProfileSidebar")) : "";


  const [isLoading, setIsLoading] = useState(false);
  const [isLoadingSidebarBackground, setIsLoadingSidebarBackground] =
    useState(false);
  const [DisplayMenu, setDisplayMenu] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);
  const showBackOverlay = () =>
    setIsLoadingSidebarBackground(!isLoadingSidebarBackground);

  const leftBoxRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (leftBoxRef.current && !leftBoxRef.current.contains(event.target)) {
        setDisplayMenu(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const handleLogout = async () => {
    setIsLoading(true);
    setOpenModal(false);

    try {
      const { data } = await axios.post(`/private/logout`, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });

      localStorage.removeItem("email");
      localStorage.removeItem("token");
      localStorage.removeItem("userData");
      Cookies.remove("showProfileSidebar");
      setUsers("");

      toast.success(data.message, {
        position: "top-right",
      });

      navigate("/adminPanel");
    } catch (error) {
      if (error.response.status === 401) {
        toast.error(error.response.data.message, {
          position: "top-right",
        });
      } else {
        toast.error("Something went wrong", {
          position: "top-right",
        });
      }
    } finally {
      setIsLoading(false);
    }
  };

  const showDisplaymenu = () => {
    setDisplayMenu(!DisplayMenu);
  };

  const handleProfile = () => {
    Cookies.set("showProfileSidebar", true, { expires: 365 });
    showDisplaymenu();
    navigate("/adminPanel/profile");
  };

  const changedPassword = () => {
    Cookies.set("showProfileSidebar", true, { expires: 365 });
    showDisplaymenu();
    navigate("/adminPanel/changedPassword");
  };

  const leftBox = (
    <>
      <NavMenu ref={leftBoxRef}>
        <div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              cursor: "pointer",
            }}
            onClick={() => showDisplaymenu()}
          >
            <div className="nav-btn-logo">
              <SvgLogo
                className="profile-image"
                src={userData?.profileImage ? userData?.profileImage : dummyProfile}
              />
            </div>
            <div>
              <IoCaretDownOutline />
            </div>
          </div>
          {DisplayMenu ? (
            <div className="nav-profile-container">
              <div className="d-flex align-items-center justify-content-end">
                <RxCross2
                  style={{
                    cursor: "pointer",
                    position:"relative",
                    top:"6px",
                    right:"10px"
                  }}
                  onClick={() => showDisplaymenu()}
                />
              </div>
              <div className="nav-profile-section p-3">
                <div className="profile-dropdown-section">
                  <div className="nav-btn-logo">
                    <SvgLogo
                      className="profile-image"
                      src={userData?.profileImage ? userData?.profileImage : dummyProfile}
                    />
                  </div>
                  <div className="me-5 text-start">
                    <div className="profile-name text-black fw-600">Samantha Hanna</div>
                    <div className="profile-name text-black fw-400" style={{opacity:'0.7'}}>Admin</div>
                  </div>
                </div>

                <div className="d-flex align-items-center" style={{margin:"18px 0 10px 0"}}>
                  {/* <AiFillSetting style={{ color: "#00000080" }} /> */}
                  <p className="font-2 fs-14 fw-400 mb-0">Admin Settings</p>
                </div>
                <div className="customButton " onClick={() => handleProfile()}>
                  <AiOutlineUser style={{ color: "#0C2D06", fontSize: "1.3rem" }} />
                  <span className="profile-section-text">My Profile</span>
                </div>
                <div
                  className="customButton "
                  onClick={() => changedPassword()}
                >
                  <PiPassword  style={{ color: "#0C2D06", fontSize: "1.3rem" }} />
                  <span className="profile-section-text">Change Password</span>
                </div>
                <hr style={{margin:"0.5rem 0"}} />
                <div
                  className="customButton "
                  onClick={() => {
                    showDisplaymenu()
                    setOpenModal(true);
                  }}
                >
                  <RiLogoutBoxLine
                    style={{
                      transform: "rotateY(180deg)",
                      color: "#0C2D06",
                      fontSize: "1.3rem",
                    }}
                  />
                  <span className="profile-section-text">Logout</span>
                </div>
              </div>
            </div>
          ) : (
            false
          )}
        </div>
        <NavItem></NavItem>
      </NavMenu>
    </>
  );

  return (
    <>
      <IconContext.Provider value={{ color: "#000000" }}>
        <Nav>
          <NavbarContainer>
            <div 
              style={{ display: "flex", alignItems: "center", gap:"4rem" }}
              onClick={() => {
                Cookies.set("showProfileSidebar", false, { expires: 365 });
              }}
            >
              <NavLogo to="/adminPanel/dashboard" >
                <SvgLogo className="logoImage" src={navbarLogo} />
                <h1 style={{color:'white', textDecoration:'none', marginTop:'1rem', fontSize:'2.5rem'}}>LOCKSMITH</h1>
              </NavLogo>

              {showProfileSidebar && (
                <NavLink 
                  className="back-to-home"
                  to="/adminPanel/dashboard"
                  style={{textDecoration:'none'}}
                >
                  <HiArrowNarrowLeft />
                  <span className="">Back to home</span>
                </NavLink>
              )}
            </div>
            <MobileIcon
              onClick={() => {
                showBackOverlay();
                showSidebar();
              }}
            >
              <FaBars style={{ color: "#000000" }} />
            </MobileIcon>
            
            {leftBox}
          </NavbarContainer>
        </Nav>
      </IconContext.Provider>

      {/* Modal for logout  */}
      <Modal
        maxWidth="lg"
        width="360px"
        RoundedCorners={true}
        isOpen={openModal}
        onClose={() => {
          setOpenModal(false);
        }}
        backgroundModal={false}
        backgroundModalContent={false}
        title={
          <div >
            <div className="d-flex align-items-center justify-content-end">
              <RxCross2
                style={{
                  cursor: "pointer",
                }}
                onClick={() => {setOpenModal(false);}}
              />
            </div>
            <div style={{display:'flex', flexDirection:'column', alignItems:'center'}}>
            <RiLogoutBoxLine
                    style={{
                      transform: "rotateY(180deg)",
                      color: "red",
                      fontSize: "3rem",
                    }}
                  />
            <p className="profile-section-text">Are you sure you want to logout? We will safely secure your data!</p>
            </div>
            
           
          </div>
        }
        content={
          <>
            <div className="logout-button-group">
              <div
                className="logout-button"
                onClick={() => handleLogout()} 
              >
                Yes
              </div>
              <div className="cancel-button" onClick={() => {
                  setOpenModal(false);
                }}>
                Cancel
              </div>
            </div>
          </>
        }
      />

      {isLoading && <Overlay />}
      {!sidebar ? <SidebarOverlay /> : ""}
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

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);


