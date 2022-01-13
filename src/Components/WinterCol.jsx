import React from "react";
import Card from "./Card";
import CardData from "./CardData";
export default function WinterCol(props) {
  const { cartData, setCartData } = props;
  const handelClick = (n) => {
    // console.log("total old Data: ", cartData);
    console.log("new data: ", n);
    const newObj = cartData;
    newObj.push(n);
    console.log("total new Data: ", newObj);
    setCartData(newObj);
  };
  return (
    <div>
      <div className="d-flex justify-content-center text-black">
        <h1>Winter Collection</h1>
      </div>
      <div className="col-12">
        <div className="pt-5">
          <div className="container-fluid row justify-conten-center">
            {CardData.map((p) => (
              <div className="col-3">
                <div className="mb-5 pe-4">
                  <div class="card col-3" style={{ width: 18 + "rem" }}>
                    <img
                      class="card-img-top"
                      src={p.pdimgg}
                      alt="Card image cap"
                    />

                    <div class="card-body"></div>
                    <div>
                      <div>
                        <h5 class="card-title">{p.pdPrice}</h5>
                      </div>
                      <div>
                        <p class="card-text">{p.pdName}</p>
                      </div>
                    </div>
                    <div
                      style={{ width: "300px", marginBottom: "5px" }}
                      className="d-flex justify-content-center"
                    >
                      <button
                        className="rounded pe-5 ps-5"
                        class="btn btn-dark                                            "
                        onClick={() => {
                          handelClick(p);
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
  );
}
