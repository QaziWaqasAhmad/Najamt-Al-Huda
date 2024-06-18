import React, { useContext, useState } from "react";
import Buttons from "../../../components/Buttons";
import TextFeilds from "../../../components/TextFeilds";
import { IconButton, InputAdornment, TextField } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { loginAdmin } from "../../../services/products/Products";
import { AppContext } from "../../../context";
import Loader from "../../../components/Loader";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import LoginMbl from "../../../components/LoginMbl";
import logo from "../../../assets/logo2.png";
import lock from "../../../assets/padlock.png";



const Login = () => {
  const { login } = useContext(AppContext);
  const[showPassword, setShowPassword] = useState(false)
  const[isLoading, setIsLoading] = useState(false)

  const [userss, setUserss] = useState({
    email: '',
    password: ''
  });


  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const loginUser = () => {
    // setEmailError('');
    // setPasswordError('');
    if (!userss.email.trim()) {
      toast.error("Email is required")
    }
    
    else if (!userss.password.trim()) {
      toast.error("Password is required")
      return;
    }
    else{

    setIsLoading(true);
    loginAdmin(userss)
      .then((res) => {
        if (res.status === 200) {
          let data = res?.data?.data;
          localStorage.setItem("user", JSON.stringify(data));
          login(data);
          // toast.success("hello")
          setIsLoading(false)
        }else{
          setIsLoading(false)
           toast.error(res?.data?.message)
        }
      })
      .catch((error) => {
        setIsLoading(false);
        toast.error("Something went wrong")
      })
    }
  };

  const handleOnChange = (e) => {
    setUserss({
      ...userss,
      [e.target.name]: e.target.value
    });
  };

  return (
    <>
      <Loader isLoading={isLoading} />
    <ToastContainer
      position="top-right"
      autoClose={1000}
      hideProgressBar={false}
      newestOnTop
      closeOnClick
      // rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="light"
    />
     
     <div className="login"> 
        <div className="container-fluid">
          <div className="row min-vh-100 ">
            <div className="col-md-7 p-0  login-bg  d-flex justify-content-center align-items-center  ">
              <div className="left-side text-center">
                <img src={logo} alt="image" className='' />
                <div className="logo-para w-50 mx-auto">
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora temporibus molestias labore debitis id ea cumque expedita vitae quod soluta!</p>
                </div>
              </div> 
            </div>
            <div className="col-md-5 p-0 d-flex justify-content-center align-items-center form-col">
              <div className="form-container p-5">
              <div className="form">
                <div className="d-flex align-items-center justify-content-between mb-3">
                <h5 className="text">WELCOME BACK Salman!</h5>
                <img src={lock} alt="password" className="lock" />
                </div>
                <TextFeilds
                id='email'
                type="email"
                label='Email'
                name='email'
                className="login-email field"
                onChange={(e)=>handleOnChange(e)}
                />
               <div className="password-container">
               <TextFeilds
                id='password'
                type={showPassword ? "text" : "password"}
                label='Password'
                className="login-password field"
                name="password"
                onChange={(e)=>handleOnChange(e)}
                />
                <button
                className="toggle-btn"
                onClick={togglePasswordVisibility}
                >
                {showPassword ? <Visibility /> : <VisibilityOff />}
                </button>
               </div>
                <Buttons
                className=" login-btn"
                name='LOGIN'
                onClick={loginUser}
                />
                <div className="d-flex align-items-center justify-content-between mt-2">
                <div className="remember-me">
                <input  type='checkbox' />
                <span className="">Remember me</span>
                </div>
                <div className="forgot-password">
                  <span className="forgot-password text-primary fw-bold">Forgot Password!</span>
                </div>
                </div>
               </div>
              </div>
            </div>

           
          </div>
        </div>
      </div>
    
    </>
  );
};

export default Login;
