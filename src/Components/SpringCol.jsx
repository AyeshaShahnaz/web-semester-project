import React from "react";
import SpringCard from "./SpringCard";
import SpringData from "./SpringData";
export default function SpringCol(props) {
  //cartData is from app.js
  const { cartData, setCartData } = props;
  // n is a spring single product object
  const handelClick = (n) => {
    console.log("total old Data: ", cartData);
    console.log("new data: ", n);
    const newObj = cartData;
    //array
    newObj.push(n);
    console.log("total new Data: ", newObj);
    setCartData(newObj);
  };
  return (
    <div>
      <div className="d-flex justify-content-center text-dark">
        <h1>Spring Collection</h1>
      </div>
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
                        src={s.pdimgg}
                        alt="Card image cap"
                      />

                      <div class="card-body"></div>
                      <div>
                        <h5 class="card-title">{s.pdName}</h5>
                      </div>
                      <p class="card-text">{s.pdPrice}</p>
                      <div
                        style={{ width: "300px" }}
                        className="d-flex justify-content-center"
                      >
                        <button
                          className="rounded pe-5 ps-5"
                          class="btn btn-dark"
                          onClick={() => {
                            handelClick(s);
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
