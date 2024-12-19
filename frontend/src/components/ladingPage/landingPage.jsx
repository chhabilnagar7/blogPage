import React from "react";
import './landingPage.css';


const LandingPage = () => {
  return (
    <div className="backgroundLandingPage">
      <div className="content">
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
                    <h5 className="modal-title" id="loginModalLabel">
                      Login
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
                        <label htmlFor="loginEmail" className="form-label">
                          Email address
                        </label>
                        <input
                          type="email"
                          placeholder="Enter your email"
                          className="form-control"
                          id="loginEmail"
                          aria-describedby="emailHelp"
                        />
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
                        />
                      </div>
                      <button type="submit" className="btn btn-primary">
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
                            <label htmlFor="signupEmail" className="form-label">
                            Name
                            </label>
                            <input
                            type="text"
                            placeholder="Enter your name"
                            className="form-control"
                            id="signupEmail"
                            aria-describedby="emailHelp"
                            />
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
                          aria-describedby="emailHelp"
                        />
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
                        />
                      </div>
                      <button type="submit" className="btn btn-primary">
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
