import React from "react";
import { Link } from "react-router-dom";


function signup({ title, setEmail, setPassword, handleAction,setName,setContact,setAddress }) {

  return (
    <div className="signup">
      <div className="container  ">
        <div className="row">
          <div className="col-md-2"></div>
          <div className="col-md-8">
          <div className=" card text-center  py-5  ">
          <h1 className="textcolor">Sign up </h1>
          <h5 className="textcolor" >Please Enter your Details to join us</h5>


          <label>
            <b className="textcolor">Name</b>
          </label>
          <div>
          <input
                      type="text"
                      className="form-control"
                      placeholder="Enter Your Name"
                      onChange={(event) => {
                        setName(event.target.value);
                      }}
                    />
          </div>
          
          <br />

          <label>
            <b className="textcolor">Email</b>
          </label>

          <div>
          <input
                      id="email-check"
                     className="form-control"
                     type="text"
                     placeholder="Enter Your email"
                     onChange={(event) => {
                       setEmail(event.target.value);
                     }}
                   />
          </div>



          <br />
          <label>
            <b className="textcolor">Choose Password</b>
          </label>
         
        <div>
        <input
                      id="pass-check"
                     className="form-control"
                     type="password"
           onChange={(event) => {
             setPassword(event.target.value);
           }}
           placeholder="Enter Your Password"
                   />

        </div>
         
          <br />

          <label>
            <b className="textcolor">Contact</b>
          </label>

         <div>
         <input
                     
                     className="form-control"
                     type="contact"
            onChange={(event) => {
              setContact(event.target.value);
            }}
            placeholder="Enter your Contact Num"
                   />

         </div>
          
          <br />

          <label>
            <b className="textcolor">Address</b>
          </label>

          
        <div>
        <input
                     
                     className="form-control"
                     type="address"
                     onChange={(event) => {
                       setAddress(event.target.value);
                     }}
                     placeholder="Enter your Address"
                   />
        </div>

          <br />
          

          <button type="submit" className="btn btn-dark" onClick={handleAction}>
            {title}{" "}
          </button>
          <br />
          <Link type="button" to="/login" class="btn btn-secondary">
            Login
          </Link>
          <br />
        </div>
          </div>

          <div className="col-md-2 p-5 mt-5">
            {/* <img className="img-fluid  " src="Assests/coin.jpg" alt="" width={500} /> */}

          </div>
        
      </div>
    </div>
    </div>
  );
}

export default signup;
