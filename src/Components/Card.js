import React from "react";
import { Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import CardData from "./CardData";

import react, { useState } from "react";
export default function Card() {
  return (
    <div className="pt-5">
      <div className="container-fluid row justify-conten-center">
        {CardData.map((p) => (
          <div className="col-3">
            <div className="mb-5 pe-4">
              <div class="card col-3" style={{ width: 18 + "rem" }}>
                <img class="card-img-top" src={p.imgg} alt="Card image cap" />

                <div class="card-body"></div>
                <div>
                  <h5 class="card-title">{p.pName}</h5>
                </div>
                <p class="card-text">{p.pdis}</p>
                <div
                  style={{ width: "300px", marginBottom: "5px" }}
                  className="d-flex justify-content-center"
                >
                  
                  <Route
                    render={({ history }) => (
                      <button
                        className="rounded pe-5 ps-5"
                        class="btn btn-dark                                            "
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
        {/* {SummerData.map((n) => ( 
          <div className="col-3">
            <div className="mb-5 pe-4">
              <div class="card col-3" style={{ width: 18 + "rem" }}>
                <img class="card-img-top" src={n.imgg1} alt="Card image cap" />

                <div class="card-body"></div>
                <div>
                  <h5 class="card-title">{n.productName}</h5>
                </div>
                <p class="card-text">{n.productdis}</p>
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
        ))}   */}
      </div>
    </div>
  );
}
