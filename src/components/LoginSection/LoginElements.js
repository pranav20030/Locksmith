import styled from "styled-components";


export const Container = styled.div`
 background: #26344E;
 align-items: center;
 display: flex;
 flex-direction: column;
 height: 100vh;
 width: 100vw;
 padding-top: 4rem;
 
`

export const LogoText = styled.div`
 display: flex;
 align-items: center;
 justify-content: center;
 margin-bottom: 1rem;

 

 h1{
    color: white;
    font-family: "Roboto", serif;
    font-size: 2rem;
    padding-top: 1rem;
    
 }
`
export const FormContainer = styled.div`
 display: flex;
 flex-direction: column;
 background: white;
 width: 550px;
 height: 340px;

 border-radius: 10px;
 padding: 2rem 2rem;
 gap: 10px;
 width: 100%;
 h3{
  font-size: 1rem;
 }
 .form{
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 210px;
 }

 .form-control{
    display: flex;
    flex-direction: column;
    width: 100%;
    
 }
 h3{
    text-align: left;
    font-weight: bold;
 }
 .input{
   
    width: 90%;
    display: block;
    padding: 0.5rem 1rem ;
    margin-bottom: 10px;
 }
 .label{
    
    font-weight: bold;
    margin-bottom: 10px;
 }
 .error{
    color: red;
    
 }
 .submitbtn{
    padding: 0.5rem 1rem;
     background: linear-gradient(274.4deg, #26344E -8.9%, #0E53D3 177.01%);
     color: white;
     margin-top: 20px;
     
     width: 100%;
     cursor: pointer;
    
 }
`