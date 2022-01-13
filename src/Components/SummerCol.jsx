import React from "react";
import Card from "./Card";
import SummerCard from "./SummerCard";
import { Route, withRouter } from "react-router-dom";
import SummerData from "./SummerData";

export default function SummerCol(props) {
  const { cartData, setCartData } = props;
  const handelClick = (n) => {
    console.log("total old Data: ", cartData);
    console.log("new data: ", n);
    const newObj = cartData;
    newObj.push(n);
    console.log("total new Data: ", newObj);
    setCartData(newObj);
  };
  return (
    <div>
      <div className="d-flex justify-content-center text-dark">
        <h1>Summer Collection</h1>
      </div>
      <div className="container-fluid">
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
                        src={n.pdimgg}
                        alt="Card image cap"
                      />
                      <div class="card-body"></div>
                      <div>
                        <h5 class="card-title">{n.pdName}</h5>
                      </div>
                      <p class="card-text">{n.pdPrice}</p>
                      <div
                        style={{ width: "300px", marginBottom: "5px" }}
                        className="d-flex justify-content-center"
                      >
                        <button
                          className="rounded pe-5 ps-5"
                          class="btn btn-dark"
                          onClick={() => {
                        
                            handelClick(n);
                          }}
                        >
                          Add to Cart
                        </button>
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
