import React, { useState } from "react";
import ReactDOM from "react-dom";
import App from "../App";
import './login.css';
import {BrowserRouter, Routes,Route} from"react-router-dom";
import Dashboard from './user pages/userDashBoard';
function Login() {
  
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const database = [
    {
      username: "siva",
      password: "123"
    },
    {
      username: "user2",
      password: "pass2"
    }
  ];

  const errors = {
    uname: "invalid username",
    pass: "invalid password"
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    var { uname, pass } = document.forms[0];
    const userData = database.find((user) => user.username === uname.value);
    if (userData) {
      if (userData.password !== pass.value) {  
        setErrorMessages({ name: "pass", message: errors.pass });
      } else {
        sessionStorage.setItem("auth","true");
        setIsSubmitted(true);
      }
    } else { 
      setErrorMessages({ name: "uname", message: errors.uname });
    }
  };

  
  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );


  const renderForm = (
    <div className="form" >
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <label for="id1" className="text-white">Username</label>
          <input type="text" name="uname" id="id1" required />
          {renderErrorMessage("uname")}
        </div>
        <div className="input-container">
          <label for="id2" className="text-white">Password </label>
          <input type="password" name="pass" id="id2"required />
          {renderErrorMessage("pass")}
        </div>
        <div className="button-container">
          <input type="submit" />
        </div>
      </form>
    </div>
  );

  return (
<>
{sessionStorage.getItem("auth")=="true" ? <div>
    <Dashboard/></div> :
<div className="app bg-sky-400">
      <h1 className="text-5xl text-red-800 font-bold">Car Rental</h1>
      <div className="login-form">
        <div className="title text-white" ><b>Login</b></div>
         {renderForm}
      </div>
    
    </div>
    }

</>
  );
}

export default Login;
