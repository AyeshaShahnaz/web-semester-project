import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css"; 
import Joi from "joi-browser";
import { adduser } from "../Service/api";
const Signup = () => {
  const [userdata, setUserData] = useState({
    FirstName: "",
    LastName: "",
    Email: "",
    dataused: {},
    
  });
  //  handleSubmit = (e) => {
  //   e.preventDefault();
  //  };
  // clearForm = () => {
  //   this.state.data = {
  //     Email: "",
  //     Password: "",
  //   };
  // };

  const { FirstName, LastName, Email} = userdata;

  const handleChange = (e) => {
    setUserData({ ...userdata, [e.target.name]: [e.target.value] })
  }
  const addDetails = async (e) => {
    //for not refreshing page
    e.preventDefault();
   await adduser(userdata);
  }
  
return (
  <div
    style={{
      width: "100%",
      height: "1000px",
      backgroundSize: "cover",
      backgroundImage: `url("https://static.standard.co.uk/s3fs-public/thumbnails/image/2018/08/30/10/onlineshoppingclothing.jpg?width=968&auto=webp&quality=75&crop=968%3A645%2Csmart")`,
    }}
  >
    <div className="col-md-5 position-absolute start-50 translate-middle-x mt-10">
      <p className="pt-3 pl-5 m-0 h1 mb-2 mx-5">SignUp</p>

      <div className="ms-5 mt-5" style={{ display: "block" }}>
        {/* <form onSubmit={this.handleSubmit}> */}
        <form>
          <div class="mb-3">
            <label htmlFor="text">FirstName</label>
            <input
              id="FirstName"
              name="FirstName"
              onChange={(e) => handleChange(e)}
              className="form-control"
            />
            <div id="emailHelp" class="form-text">
              FirstName is required.
            </div>
          </div>

          <div class="mb-3">
            <label htmlFor="text">LastName</label>
            <input
              id="LastName"
              name="LastName"
              className="form-control"
              onChange={(e) => handleChange(e)}
            />
            <div id="emailHelp" class="form-text">
              lastName is required.
            </div>
          </div>

          <div class="mb-3">
            <label htmlFor="exampleInputEmail1">Email</label>
            <input
              id="exampleInputEmail1"
              name="Email"
              className="form-control"
              onChange={(e) => handleChange(e)}
            />
            <div id="emailHelp" class="form-text">
              Email is required.
            </div>
          </div>
          <div class="mb-3">
            <label htmlFor="exampleInputPassword1">Password</label>
            <input
              id="exampleInputPassword1"
              name="Password"
              type="password"
              className="form-control"
              onChange={(e) => handleChange(e)}
            />
            <div id="emailHelp" class="form-text">
              Password is required.
            </div>
          </div>
          <div class="mb-3">
            <label htmlFor="exampleInputPassword1">Confirm_Password</label>
            <input
              id="exampleInputPassword1"
              name="Confirm_Password"
              type="password"
              className="form-control"
              onChange={(e) => handleChange(e)}
            />
            <div id="emailHelp" class="form-text">
              Confirm_Password is required.
            </div>
          </div>

          <button
            type="submit"
            class="btn btn-primary"
            onClick={(e) => addDetails(e)}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  </div>
);
              
};
export default Signup;


