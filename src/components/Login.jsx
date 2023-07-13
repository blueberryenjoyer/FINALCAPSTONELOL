import React from "react";
import { loginUser } from "./api-adapters/adapters";
import { useNavigate } from "react-router-dom";







const Login = ({ loggedin, setLoggedin }) => {

  const navigate = useNavigate()

  async function doLogin() {
    let name = (document.getElementById('loginName')).value
    let password = (document.getElementById('loginPassword')).value
    let newToken = loginUser(name, password)
    localStorage.setItem("token", await newToken);
    setLoggedin(true)
    alert("you are now logged in")
    navigate("/cats");
  }



  return (
    <div className="Login">

      <p>login</p>
      <input id='loginName' type="text" placeholder="name" />
      <input id='loginPassword' type="text" placeholder="password" />
      <p className='submitLogin' onClick={doLogin}>submit. this is a button.</p>

    </div>
  );
};

export default Login;
