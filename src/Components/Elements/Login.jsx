import React from "react";
import { Link } from "react-router-dom";
// import "react-toastify/dist/ReactToastify.css";

function Login({ title, setEmail, setPassword, handleAction }) {
  return (
    <div className="loginbg">
      <div className="container   ">
        <div className="row">
          <div className="col-md-2"></div>
          <div className="col-md-8">
            <div className=" card text-center  py-5 bg-white ">
              <h1 className="textcolor">Login </h1>
              <h5 className="textcolor">Lets go gets started</h5>

              <br />
              <label>
                <b className="textcolor">Email</b>
                <input
                  type="text"
                  className="form-control"
                  onChange={(event) => {
                    setEmail(event.target.value);
                  }}
                  placeholder="Enter Your Email"
                />
              </label>

              <br />
              <label>
                <b className="textcolor">Password</b>
              </label>
              <div>
                <input
                  type="password"
                  className="form-control"
                  onChange={(event) => {
                    setPassword(event.target.value);
                  }}
                  placeholder="Enter Your Password"
                />{" "}
              </div>

              <Link to="/passward" className="passward textcolor">
                Forget passward
              </Link>
              <br />
              <button
                type="submit"
                className="btn btn-dark"
                onClick={handleAction}
              
              >
                {title}
              </button>
              <br />
              <Link type="button" to="/" class="btn btn-secondary">
                Sign up

              </Link>
            </div>
          </div>

          <div className="col-md-2"></div>
        </div>
      </div>
    </div>
  );
}

export default Login;
