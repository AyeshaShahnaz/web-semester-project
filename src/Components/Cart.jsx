import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import react, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
// import SummerData from "./SummerData";
export default function Cart(props) {
  const { cartData, setCartData } = props;
  const [grandTotal, setGrandTotal] = useState(0);
  const [grandTotalRefresher, setGrandTotalRefresher] = useState(0);

  const incrementInAproduct = (pId) => {
    const myData = cartData.map((pNo) =>
      pNo.id === pId
        ? {
            id: pNo.id,
            pdQuantity: pNo.pdQuantity + 1,
            pdPrice: pNo.pdPrice,
            pdName: pNo.pdName,
            pdimgg: pNo.pdimgg,
          }
        : pNo
    );
    const finalData = myData.filter((pNo) => pNo.pdQuantity != 0);
    setCartData(finalData);
    setGrandTotalRefresher(grandTotalRefresher + 1);
  };
  const removeProductById = (pid) => {
    const pdata = cartData.filter((pNo) => pNo.id != pid);
    setCartData(pdata);
  };
  const decrementInAproduct = (pId) => {
    const myData = cartData.map((pNo) =>
      pNo.id === pId
        ? {
            id: pNo.id,
            pdQuantity: pNo.pdQuantity - 1,
            pdPrice: pNo.pdPrice,
            pdName: pNo.pdName,
            pdimgg: pNo.pdimgg,
          }
        : pNo
    );
    const finalData = myData.filter((pNo) => pNo.pdQuantity != 0);
    setCartData(finalData);
    setGrandTotalRefresher(grandTotalRefresher + 1);
  };
  const grandTotalCal = () => {
    let totalbill = 0;
    cartData.forEach(
      (pno) => (totalbill = totalbill + pno.pdPrice * pno.pdQuantity)
    );
    setGrandTotal(totalbill);
  };
  
  useEffect(() => {
    console.log(cartData);
    const ids = cartData.map((o) => o.id);
    const filtered = cartData.filter(
      ({ id }, index) => !ids.includes(id, index + 1)
    );
    console.log(filtered);
    setCartData(filtered);
    grandTotalCal();
  }, [grandTotalRefresher]);
  return (
    <div>
      <>
        <div className="container bg-white rounded-top " id="zero-pad">
          <div className="row d-flex justify-content-center">
            <div className="col-lg-10 col-12 pt-3">
              <div className="d-flex"></div>
              <div className="d-flex flex-column pt-4">
                <div>
                  <h5 className="text-uppercase font-weight-normal">
                    shopping bag
                  </h5>
                </div>
              </div>
              <div
                className="d-flex flex-row px-lg-5 mx-lg-5 mobile"
                id="heading"
              >
                <div style={{ marginLeft: "3vw" }}></div>
                <div className="px-lg-5 mr-lg-5" id="produc">
                  PRODUCTS
                </div>
                <div style={{ marginLeft: "3vw" }}></div>

                <div className="px-lg-5 ml-lg-5" id="prc">
                  PRICE
                </div>
                <div style={{ marginLeft: "3vw" }}></div>
                <div className="px-lg-5 ml-lg-1" id="quantity">
                  QUANTITY
                </div>
                <div className="px-lg-5 ml-lg-3" id="total">
                  TOTAL
                </div>
              </div>
              {/* this.props.match.params.id */}
              {cartData.map((p) => (
                <div>
                  <div className="d-flex flex-row justify-content-between align-items-center pt-lg-4 pt-2 pb-3 border-bottom mobile">
                    <div className="d-flex flex-row align-items-center">
                      <div className="rounded overflow-hidden">
                        <img
                          src={p.pdimgg}
                          width={150}
                          height={150}
                          alt
                          id="image"
                        />
                      </div>
                      <div style={{ marginLeft: "30px" }}>
                        <div className="d-flex flex-column pl-md-3 pl-1">
                          <div>
                            <h6>{p.pdName}</h6>
                          </div>
                          <div>
                            Art.No:<span className="pl-2">091091001</span>
                          </div>
                          <div>
                            Color:<span className="pl-3">White</span>
                          </div>
                          <div>
                            Size:<span className="pl-4"> M</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="pl-md-0 pl-1">
                      <b>${p.pdPrice}</b>
                    </div>
                    <div className="pl-md-0 pl-2">
                      {" "}
                      <span className="fa fa-minus-square text-secondary" />
                      <button
                        className="btn btn-dark"
                        onClick={() => {
                          incrementInAproduct(p.id);
                        }}
                      >
                        +
                      </button>{" "}
                      <span className="px-md-3 px-1">{p.pdQuantity}</span>
                      <button
                        className="btn btn-dark"
                        onClick={() => {
                          decrementInAproduct(p.id);
                        }}
                      >
                        -
                      </button>
                      <span className="fa fa-plus-square text-secondary" />{" "}
                    </div>
                    <div className="pl-md-0 pl-1">
                      <b>${parseFloat(p.pdPrice) * p.pdQuantity}</b>
                    </div>
                    <button
                      className="btn btn-dark"
                      onClick={() => {
                        removeProductById(p.id);
                        setGrandTotalRefresher(grandTotalRefresher + 1);
                      }}
                    >
                      X
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="container bg-light rounded-bottom py-4" id="zero-pad">
          <div className="row d-flex justify-content-center">
            <div className="col-lg-10 col-12">
              <div className="d-flex justify-content-between align-items-center">
                <div> </div>
                <div className="px-md-0 px-1" id="footer-font">
                  {" "}
                  <b className="pl-md-4">
                    SUBTOTAL<span className="pl-md-4">${grandTotal}</span>
                  </b>{" "}
                </div>
                <div> </div>
              </div>
            </div>
          </div>
        </div>
      </>
    </div>
  );
}
