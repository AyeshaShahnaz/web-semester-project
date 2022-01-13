import React, { useEffect, useState } from "react";
import { Route, withRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import SummerData from "./SummerData";
 
function SummerCard(){


// function SummerCard(props) {
//   const { cartData, setCartData } = props;
//   const [pData, setPData] = useState([]);
//   const handelClick = () => {
//     console.log(pData);
//     const a = cartData;
//     a.push(pData);
//     console.log(a);
//     setCartData(a);
//   };
  return (
    <div className="pt-5">
      <div className="container-fluid row justify-conten-center"></div>
      <div className="col-12">
        <div className="container-fluid row justify-conten-center">
          {SummerData.map((n) => (
            <div className="col-3">
              <div className="mb-5 pe-4">
                <div class="card col-3" style={{ width: 18 + "rem" }}>
                  <img
                    class="card-img-top"
                    src={n.imgg1}
                    alt="Card image cap"
                  />
                  <div class="card-body"></div>
                  <div>
                    <h5 class="card-title">{n.productName}</h5>
                  </div>
                  <p class="card-text">{n.productdis}</p>
                  <div
                    style={{ width: "300px", marginBottom: "5px" }}
                    className="d-flex justify-content-center"
                  >
                    <Route
                      render={({ history }) => (
                        <button
                          className="rounded pe-5 ps-5"
                          class="btn btn-dark"
                          onClick={() => {
                            // setPData(n);
                            // handelClick();
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
  );
}
export default SummerCard;
