import React, { useState } from "react";

import Cookies from "js-cookie";
import { connect } from "react-redux";
import * as actionTypes from "../../store/actions";
import { Formik, Field, Form, ErrorMessage } from "formik";

import {  useNavigate } from "react-router-dom";
import Overlay from "../Overlay";
import axios from "../../axios";
import { toast } from "react-toastify";


import Icon from "../../assets/logo.png";

import { loginValidator } from "../../utils/validators";

import { Container, FormContainer, LogoText } from "./LoginElements";



const LoginSection = ({ setUsers, userData }) => {
  
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const accessToken =
    sessionStorage.getItem("token") || localStorage.getItem("token");

  if (accessToken) {
    navigate("/adminPanel/dashboard");
  }

  const [loginValues, setLoginValues] = useState({
    email: "",
    password: "",
  });

  const handleLogin = async (values) => {
    setIsLoading(true);

    const formvalues = {
      email: values.email,
      password: values.password,
    };

    try {
      const { data } = await axios.post("/login", formvalues);

      
      sessionStorage.setItem("email", data?.data?.email);
      sessionStorage.setItem("token", data?.accessToken);
      sessionStorage.setItem("userData", JSON.stringify(data?.data));

      Cookies.remove("showProfileSidebar");
      setUsers(data?.data);

      if (data?.data?.userType === "subAdmin") {
        const modulePermission = data?.data?.modulePermission;

        if (modulePermission && modulePermission.length > 0) {
          const firstPath = modulePermission[0];
          navigate(`/adminPanel/${firstPath}`);
        } else {
          navigate("/adminPanel/dashboard");
        }
      } else {
        navigate("/adminPanel/dashboard");
      }
    } catch (error) {
      if (error.response.status === 422) {
        toast.error(`${error.response.data?.errors[0].msg}`, {
          position: "top-right",
        });
      } else {
        toast.error(`${error.response.data?.message}`, {
          position: "top-right",
        });
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <Container>
        <section className="auth">
          <div className="login">
            <div className="logincontainer">
              <div className="login-main-cant">
                <LogoText>
                  <img src={Icon} alt="Locksmith" style={{width:"40px"}} />
                  <h1>LOCKSMITH</h1>
                </LogoText>
                <FormContainer>
                  <h3>Login as Admin!</h3>
                  <Formik
                    enableReinitialize
                    initialValues={loginValues}
                    validate={loginValidator}
                    validateOnChange
                    onSubmit={(values) => handleLogin(values)}
                  >
                    {(formikBag) => {
                      const isFormValid =
                        formikBag.values.email && formikBag.values.password;

                      return (
                        <Form className="form">
                          <div style={{ marginBottom: "10px" }}>
                            <label>Email Id:</label>
                            <Field
                              type="email"
                              name="email"
                              placeholder="Enter your email ID"
                              style={{ width: "100%", padding: "8px" }}
                            />
                            <ErrorMessage
                              name="email"
                              component="div"
                              style={{
                                color: "red",
                                fontSize: "14px",
                                marginTop: "5px",
                              }}
                            />
                          </div>
                          <div style={{ marginBottom: "10px" }}>
                            <label>Password:</label>
                            <Field
                              type="password"
                              name="password"
                              placeholder="Enter your password"
                              style={{ width: "100%", padding: "8px" }}
                            />
                            <ErrorMessage
                              name="password"
                              component="div"
                              style={{
                                color: "red",
                                fontSize: "14px",
                                marginTop: "5px",
                              }}
                            />
                          </div>
                          <button
                            type="submit"
                            disabled={!isFormValid}
                            style={{
                              padding: "10px",
                              width: "100%",
                              background:
                                "linear-gradient(274.4deg, #26344E -8.9%, #0E53D3 177.01%)",

                              color: "white",
                              border: "none",
                              cursor: !isFormValid ? "not-allowed" : "pointer",
                            }}
                          >
                            Submit
                          </button>
                        </Form>
                      );
                    }}
                  </Formik>
                </FormContainer>
              </div>
            </div>
          </div>
          {isLoading && <Overlay />}
        </section>
      </Container>
      {isLoading && <Overlay />}
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    userData: state.userData,
    locationData: state.locations,
    defaultState: state.defaultState,
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
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginSection);
