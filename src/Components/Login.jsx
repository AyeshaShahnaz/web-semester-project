import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Joi from "joi-browser";
export default class Login extends React.Component {
  state = {
    data: { Email: "", password: "" },
    errors: {},
    dataused: {},
  };

  schema = {
    Email: Joi.string().alphanum().required().label("Email"),
    Password: Joi.string().alphanum().required().label("Password"),
  };

  validate = () => {
    const result = Joi.validate(this.state.data, this.schema, {
      abortEarly: false,
    });
    if (!result.error) return null;

    const errors = {};
    result.error.details.map((result) => {
      errors[result.path] = result.message;
    });

    return errors;
  };

  validateProperty = (input) => {
    const currentValue = { [input.name]: input.value };
    const currentSchema = { [input.name]: this.schema[input.name] };
    const result = Joi.validate(currentValue, currentSchema);
    return result.error ? result.error.details[0].message : null;
  };

  handleChange = (e) => {
    console.log(e);
    const errors = { ...this.state.errors };
    const errorMessage = this.validateProperty(e.currentTarget);
    console.log(e.currentTarget);
    if (errorMessage) errors[e.currentTarget.name] = errorMessage;
    else delete errors[e.currentTarget.name];

    const data = { ...this.state.data };
    data[e.currentTarget.name] = e.currentTarget.value;
    this.setState({ data, errors });
  };
  clearForm = () => {
    this.state.data = {
      Email: "",
      Password: "",
    };
  };
  handleSubmit = (e) => {
    e.preventDefault();
    const errors = this.validate();
    this.setState({ errors: errors || {} });
    console.log(this.state);
    this.state.dataused = this.state.data;
    this.clearForm();
    console.log(this.state);
  };

  render() {
    return (
      <div
        style={{
          width: "100%",
          height: "600px",
          backgroundSize: "cover",
          backgroundImage: `url("https://static.standard.co.uk/s3fs-public/thumbnails/image/2018/08/30/10/onlineshoppingclothing.jpg?width=968&auto=webp&quality=75&crop=968%3A645%2Csmart")`,
        }}
      >
        <div className="col-md-6 position-absolute start-50 translate-middle-x mt-5">
          <div class="mb-3">
            <p className="pt-3 pl-5 m-0 h1 mb-2 mx-5">Login Here</p>
            <div className="ms-5 mt-5" style={{ display: "flex" }}></div>
            <form onSubmit={this.handleSubmit}>
              <div class="mb-3">
                <label htmlFor="exampleInputEmail1">Email</label>
                <input
                  id="exampleInputEmail1"
                  name="Email"
                  // value={this.state.data.Email}
                  // value={this.state.data.Email}
                  // onChange={this.handleChange}
                  className="form-control"
                  // onChange={(e) => handleChange(e)}
                />
                <div id="emailHelp" class="form-text">
                  Email is required.
                </div>
              </div>
              {this.state.errors.Email && (
                <div className="alert alert-danger">
                  {this.state.errors.Email}
                </div>
              )}
              <div class="mb-3">
                <label htmlFor="exampleInputPassword1">Password</label>
                <input
                  id="exampleInputPassword1"
                  name="Password"
                  value={this.state.data.Password}
                  type="password"
                  onChange={this.handleChange}
                  className="form-control"
                />
                <div id="emailHelp" class="form-text">
                  Password is required.
                </div>
              </div>
              {this.state.errors.Password && (
                <div className="alert alert-danger">
                  {this.state.errors.Password}
                </div>
              )}

              <div
                style={{ width: "100vw" }}
                className="d-form justify-content-center"
              >
                <button type="submit" class="btn btn-dark">
                  Submit
                </button>
              </div>

              
            </form>
          </div>
        </div>
      </div>
    );
  }
}
