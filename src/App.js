import React, { useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import { connect } from "react-redux";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import "./App.css";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";


import LoginSection from "./components/LoginSection";
import Dashboard from "./components/Dashboard/Dashboard";
import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";
import UserManagement from "./pages/UserManagement/UserManagement";




const PublicRoute = ({ defaultState }) => (
  <Routes>
    <Route path="/adminPanel" element={<LoginSection {...defaultState} />} />
    
  </Routes>
);

const PrivateRoute = ({ userData, defaultState }) => (
  <Routes>
    <Route path="/adminPanel/dashboard" element={<> <Navbar /><Sidebar /><Dashboard /></>} />
    <Route path="/adminPanel/userManagement" element={<> <Navbar /><Sidebar /><UserManagement/></>} />
   
    
    

    
  </Routes>
);

function App(props) {
  const { userData } = props;
  const navigate = useNavigate();

  useEffect(() => {
    
    if (userData === null) {
      navigate("/adminPanel");
    }
  }, [userData, navigate]);

  return (
    <div>
      {userData ? <PrivateRoute userData={userData} defaultState={props.defaultState} /> : <PublicRoute defaultState={props.defaultState} />}
      <ToastContainer />
    </div>
  );
}

const mapStateToProps = (state) => ({
  defaultState: state.defaultState,
  userData: state.userData,
});

export default connect(mapStateToProps)(App);
