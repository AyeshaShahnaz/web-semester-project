import React from "react";
import { Link } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";

export default function Contactus() {
  return (
    <div
      style={{
        width: "100%",
        height: "600px",
        backgroundSize: "cover",
        backgroundImage: `url("https://static.standard.co.uk/s3fs-public/thumbnails/image/2018/08/30/10/onlineshoppingclothing.jpg?width=968&auto=webp&quality=75&crop=968%3A645%2Csmart")`,
      }}
    >
      <div className="text-center py-5">
        <p className="p-0 m-0 h1 mb-4">Contact Us!</p>
        <form
          className="col-6 text-start bg-light p-4"
          style={{ margin: "0px auto" }}
        >
          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">
              UserName/Email
            </label>
            <input type="email" class="form-control" id="exampleInputEmail1" />
          </div>

          <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">
              Password
            </label>
            <input
              type="password"
              class="form-control"
              id="exampleInputPassword1"
            />
          </div>

          <div
            style={{ width: "100vw" }}
            className="d-form justify-content-center"
          >
            <button type="submit" class="btn btn-dark">
              Send
            </button>
          </div>
        </form>
        
      </div>
    </div>
  );
}
