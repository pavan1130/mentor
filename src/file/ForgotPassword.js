import React from "react";
import { Link } from "react-router-dom";
import "../style/ForgotPassword.css";
export default function ForgotPassword() {
  return (
    <div>
      <div className="container3">
        <div className="box5"></div>

        <div className="box6">
          <h1 className="Forgot">Forgot</h1>
          <h1 className="Forgot">Your Password ?</h1>
          <form>
            <div class="mb-3">
              <input
                type="text"
                class="form-control"
                id="ip3"
                aria-describedby="emailHelp"
                placeholder="Enter Email or Phone"
              />
            </div>

            <div class="d-flex justify-content-center">
              <button type="submit" class="btn btn-primary" id="btn4">
                RESET PASSWORD
              </button>
            </div>
          </form>

          <Link
            to="/login"
            style={{ color: "grey", textDecoration: "none", marginTop: "10px" }}
          >
            Back to Login
          </Link>
        </div>
      </div>
        
    </div>
  );
}
