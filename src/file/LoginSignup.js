import React from "react";
import "../style/LoginSignup.css";
import { Link } from "react-router-dom";

export default function LoginSignUp() {
  return (
    <div className="container1">
      <div className="box1">
        <div className="heading">
          <h1 id="head">MENTOR</h1>
          <h4 id="idp-h4">
            <i>One - Step destination for all your needs</i>
          </h4>
        </div>

        <div className="button">
          <button type="button" className="btn btn-success" id="btn1">
            <Link
              to="/login"
              style={{ color: "white", textDecoration: "none" }}
            >
              Login
            </Link>
          </button>
        </div>
      </div>
      <div className="box2">
        <h1>Create Account</h1>
        <form>
          <div className="mb-3">
            <label for="exampleInputEmail1" className="form-label">
              Name
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              required
            />
          </div>

          <div className="mb-3">
            <label for="exampleInputEmail1" className="form-label">
              Email
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              required
            />
          </div>

          <div className="mb-3">
            <label for="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              required
            />
          </div>

          <div className="mb-3">
            <label for="exampleInputPassword1" className="form-label">
              Confirm Password
            </label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              required
            />
          </div>

          <div className="mb-3 form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="exampleCheck1"
              required
            />
            <label className="form-check-label" for="exampleCheck1">
              I agree to Conditions of Use and Privacy
            </label>
          </div>
          <div class="d-flex justify-content-center">
            <button type="submit" class="btn btn-dark" id="btn2">
              Create Account
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
