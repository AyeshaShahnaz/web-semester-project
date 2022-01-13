import React from "react";
import { Link } from "react-router-dom";
import Joi from "joi-browser";
class Registration extends React.Component {
  state = {
    data: { registration: "", program: "", gender: "", pDate: "" },
    errors: {},
    dataused: {},
  };

  schema = {
    registration: Joi.string().alphanum().required().label("Registration"),
    program: Joi.string().valid("BCS").valid("BSE").optional(),
    gender: Joi.any().valid("Male", "Female"),
    pDate: Joi.string()
      .valid("22-11-2021", "25-11-2021")
      .label("Preferred Date"),
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
    const errors = { ...this.state.errors };
    const errorMessage = this.validateProperty(e.currentTarget);
    if (errorMessage) errors[e.currentTarget.name] = errorMessage;
    else delete errors[e.currentTarget.name];

    const data = { ...this.state.data };
    data[e.currentTarget.name] = e.currentTarget.value;
    this.setState({ data, errors });
  };
  clearForm = () => {
    this.state.data = {
      registration: "",
      program: "",
      gender: "",
      pDate: "",
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

    fetch("http://localhost:8000/studentlist", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(this.state.dataused),
    }).then(() => {
      console.log("new student data added");
    });
  };

  render() {
    return (
      <div className="ms-5 mt-5" style={{ display: "flex" }}>
        <form onSubmit={this.handleSubmit}>
          <div class="mb-3">
            <label htmlFor="registration">Registration</label>
            <input
              id="registration"
              name="registration"
              value={this.state.data.registration}
              onChange={this.handleChange}
              className="form-control"
            />
            <div id="emailHelp" class="form-text">
              Registration number is required.
            </div>
          </div>
          {this.state.errors.registration && (
            <div className="alert alert-danger">
              {this.state.errors.registration}
            </div>
          )}

          <div>
            <select
              id="program"
              ClassName="program"
              Name="program"
              class="form-select"
              aria-label="Default select example"
              value={this.state.data.program}
              onChange={this.handleChange}
            >
              <option selected>Select Program</option>
              <option value="BCS">BSE</option>
              <option value="BSE">BCS</option>
            </select>
          </div>
          {this.state.errors.program && (
            <div className="alert alert-danger">
              {this.state.errors.program}
            </div>
          )}

          <div className="mt-5">
            <label class="form-label">Gender</label>
            <div class="form-check">
              <input
                class="form-check-input"
                type="radio"
                id="Male"
                name="gender"
                value="Male"
                id="flexRadioDefault1"
                checked={this.state.data.gender}
                onChange={this.handleChange}
              />
              <label class="form-check-label" for="flexRadioDefault1">
                Male
              </label>
            </div>
            <div class="form-check">
              <input
                class="form-check-input"
                type="radio"
                name="gender"
                value="Female"
                id="Female"
                checked={this.state.data.gender}
                onChange={this.handleChange}
              />
              <label class="form-check-label" for="flexRadioDefault2">
                Female
              </label>
            </div>
          </div>
          {this.state.errors.gender && (
            <div className="alert alert-danger">{this.state.errors.gender}</div>
          )}

          <div className="mt-3">
            <label class="form-label me-3">Preferred Date</label>
            <div class="form-check form-check-inline">
              <input
                class="form-check-input"
                name="pDate"
                type="checkbox"
                id="1"
                value="22-11-2021"
                checked={this.state.data.pDate[0]}
                onChange={this.handleChange}
              />
              <label class="form-check-label" for="inlineCheckbox1">
                22-11-2021
              </label>
            </div>
            <div class="form-check form-check-inline">
              <input
                class="form-check-input"
                name="pDate"
                type="checkbox"
                id="2"
                value="25-11-2021"
                checked={this.state.data.pDate[1]}
                onChange={this.handleChange}
              />
              <label class="form-check-label" for="inlineCheckbox2">
                25-11-2021
              </label>
            </div>
          </div>
          {this.state.errors.pDate && (
            <div className="alert alert-danger">{this.state.errors.pDate}</div>
          )}

          <button type="submit" class="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default Registration;
