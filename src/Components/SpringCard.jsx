import React from "react";
import { Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import SpringData from "./SpringData";

export default function SpringCard() {
  return (
    <div>
      <div className="pt-5">
        <div className="container-fluid row justify-conten-center">
        <div className="col-12">
        <div className="container-fluid row justify-conten-center">
          {SpringData.map((s) => (
            <div className="col-3">
              <div className="mb-5 pe-4">
                <div class="card col-3" style={{ width: 18 + "rem" }}>
                  <img
                    class="card-img-top"
                    src={s.imgg2}
                    alt="Card image cap"
                  />

                  <div class="card-body"></div>
                  <div>
                    <h5 class="card-title">{s.pdName}</h5>
                  </div>
                  <p class="card-text">{s.pddis}</p>
                  <div
                    style={{ width: "300px" }}
                    className="d-flex justify-content-center"
                  >
                    <Route
                      render={({ history }) => (
                        <button
                          className="rounded pe-5 ps-5"
                          class="btn btn-dark"
                          onClick={() => {
                            history.push("/cart");
                          }}
                        >
                          Add to Cart
                        </button>
                      )}
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
          </div>
          </div>
        </div>
      </div>
    </div>
  );
}
