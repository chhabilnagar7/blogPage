import { React, useState } from "react";
import './landingPage.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const LandingPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [emailError,setEmailError] = useState('');
  const [passwordError,setPasswordError] = useState('');
  const [nameError,setNameError] = useState('');

  const navigate = useNavigate();

  const validateEmail = ()=>{
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(!emailPattern.test(email)){
      return "Invalid email"
    }

  }

  const validatePassword = ()=>{
    const minLength = 8;
    const hasUpperCase = /[A-Z]/.test(password)
    const hasLowerCase = /[a-z]/.test(password)
    const hasDigit = /\d/.test(password)
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password)

    if(password.length<minLength){
      return `Password must be at least ${minLength} characters long`
    }
    if(!hasUpperCase){
      return 'Password must contain at least one lowercase letter'

    }
    if(!hasLowerCase){
      return 'Password must contain at least one lowercase letter'
    }
    if(!hasDigit){
      return 'Password must contain at least one digit'
    }
    if(!hasSpecialChar){
      return 'Password must contain at least one special character'
    }
    return '';
    
  }

  const validateName = ()=>{
    const namePatern = /^[a-zA-Z]*$/
    if(!namePatern.test(name)){
      return "Name should contain letters and spaces"
    }
  }


  const handleLogin = async (e) => {
    e.preventDefault();
    const emailError = validateEmail();
    const passwordError = validatePassword();
    setEmailError(emailError)
    setPasswordError(passwordError)

    try {
      const res = await axios.post("http://localhost:5000/api/auth/login", { email, password });
      localStorage.setItem("token", res.data.user.token);
      localStorage.setItem("userEmail", res.data.user.email);
      localStorage.setItem("userName", res.data.user.name);

      const message = res.data.message || "User login successfully";
      console.log("Login success:", message);
      toast.success(message);
      setTimeout(() => {
        navigate('/stories');
    }, 3000);
    } catch (error) {
      console.error("Login error:", error);
      toast.error(error.response?.data?.message || "Error during login");
    }
  };

  const handleSignUp = async (e) => {
    e.preventDefault();
    const emailError = validateEmail();
    const passwordError = validatePassword();
    const nameError = validateName();
    setNameError(nameError)
    setEmailError(emailError)
    setPasswordError(passwordError)

    try {
      const res = await axios.post("http://localhost:5000/api/auth/signup", { name, email, password });
      localStorage.setItem("token", res.data.token);
      localStorage.setItem('userName',name)
      localStorage.setItem('userEmail',email)

      const message = res.data.message || "User signed up successfully";
      console.log("Signup success:", message);
      toast.success(message);

      setTimeout(() => {
        navigate('/stories');
    }, 3000);
    } catch (error) {
      console.error("Signup error:", error);
      toast.error(error.response?.data?.message || "Error during signup");
    }
  };

  return (
    <div className="backgroundLandingPage">
      <ToastContainer />
      <div className="contentLanding">
        <div className="welcome">
          <h2>CREATE YOUR OWN STORIES!</h2>
        </div>
        <div className="buttons">
          {/* Login Button and Modal */}
          <div className="loginButton">
            <button
              type="button"
              className="btn btn-primary"
              data-bs-toggle="modal"
              data-bs-target="#loginModal"
            >
              Login
            </button>

            <div
              className="modal fade"
              id="loginModal"
              tabIndex="-1"
              aria-labelledby="loginModalLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <h2 className="modal-title" id="loginModalLabel">
                      Login
                    </h2>
                    <button
                      type="button"
                      className="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div className="modal-body">
                    <form>
                      <div className="mb-3">
                        <label htmlFor="loginEmail" className="form-label">
                          Email address
                        </label>
                        <input
                          type="email"
                          placeholder="Enter your email"
                          className="form-control"
                          id="loginEmail"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          required

                          aria-describedby="emailHelp"
                        />

                         {emailError && (
                            <div className="errorMsg">{emailError}</div>
                          )}
                      </div>
                      <div className="mb-3">
                        <label htmlFor="loginPassword" className="form-label">
                          Password
                        </label>
                        <input
                          type="password"
                          placeholder="Enter your password"
                          className="form-control"
                          id="loginPassword"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          required
                        />
                        {passwordError && (
                          <div className="errorMsg">{passwordError}</div>
                        )}
                      </div>
                      <button
                        type="submit"
                        className="btn btn-primary"
                        data-bs-dismiss="modal"
                        onClick={handleLogin}
                      >
                        Login
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Signup Button and Modal */}
          <div className="signupButton">
            <button
              type="button"
              className="btn btn-primary"
              data-bs-toggle="modal"
              data-bs-target="#signupModal"
            >
              Signup
            </button>
            <div
              className="modal fade"
              id="signupModal"
              tabIndex="-1"
              aria-labelledby="signupModalLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title" id="signupModalLabel">
                      Signup
                    </h5>
                    <button
                      type="button"
                      className="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div className="modal-body">
                    <form>
                      <div className="mb-3">
                        <label htmlFor="signupName" className="form-label">
                          Name
                        </label>
                        <input
                          type="text"
                          placeholder="Enter your name"
                          className="form-control"
                          id="signupName"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          required
                          aria-describedby="nameHelp"
                        />
                        {nameError && (
                            <div className="errorMsg">{nameError}</div>
                        )}
                      </div>
                      <div className="mb-3">
                        <label htmlFor="signupEmail" className="form-label">
                          Email address
                        </label>
                        <input
                          type="email"
                          placeholder="Enter your email"
                          className="form-control"
                          id="signupEmail"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          required
                          aria-describedby="emailHelp"
                        />
                        {emailError && (
                            <div className="errorMsg">{emailError}</div>
                          )}
                      </div>
                      <div className="mb-3">
                        <label htmlFor="signupPassword" className="form-label">
                          Create Password
                        </label>
                        <input
                          type="password"
                          placeholder="Enter your password"
                          className="form-control"
                          id="signupPassword"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          required
                        />
                        {passwordError && (
                            <div className="errorMsg">{passwordError}</div>
                          )}
                      </div>
                      <button
                        type="submit"
                        className="btn btn-primary"
                        data-bs-dismiss="modal"
                        onClick={handleSignUp}
                      >
                        Signup
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
