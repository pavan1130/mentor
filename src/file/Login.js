import React from "react";
import { Link } from "react-router-dom";
import "../style/Login.css";
export default function Login() {
  return (
    <div>
      <div className="container2">
        <div className="box3"></div>

        <div className="box4">
          <h1 id="login">LOGIN</h1>
          <form>
            <div class="mb-3">
              <input
                type="email"
                class="form-control"
                id="ip1"
                aria-describedby="emailHelp"
                placeholder="UserName"
              />
            </div>
            <div class="mb-3">
              <input
                type="password"
                class="form-control"
                id="ip2"
                placeholder="Password"
              />

              <div id="emailHelp" class="form-text">
                <Link to="/forgotPassword">
                  <i>Forgot Password?</i>
                </Link>
              </div>
            </div>

            <div class="d-flex justify-content-center">
              <button type="submit" class="btn btn-primary" id="btn3">
                <Link
                  to="/loginSignUp"
                  style={{ color: "white", textDecoration: "none" }}
                >
                  Create Account
                </Link>
              </button>
            </div>
          </form>
        </div>
      </div>
        
    </div>
  );
}
