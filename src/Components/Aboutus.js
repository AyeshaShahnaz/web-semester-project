import React from "react";
import { Link } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";

export default function Aboutus() {
  return (
      <div
      style={{
        width: "100%",
       height: "600px",
       backgroundSize: "cover",
       backgroundImage: `url("https://static.standard.co.uk/s3fs-public/thumbnails/image/2018/08/30/10/onlineshoppingclothing.jpg?width=968&auto=webp&quality=75&crop=968%3A645%2Csmart")`,
     }}
    >
     <div>
      <h1 class="text-center pt-5 pb-5">About Us</h1>

      <div class="d-flex justify-content-center">
         <p class="text-center pb-5">
           A high-street brand introduced by one of the largest names in the
           textile industry,Wear Your Dream is celebrated for combining 100% pure
           fabric with unprecedented design aesthetic to create designer wear at
          an affordable price. Our range of clothing has something for everyone:
          Daily wear, party wear, formal wear, silk tunics, scarves and
           unstitched fabric. The overarching theme of the collections is
          providing affordable designer clothes to the masses.
         </p>
       </div>
     </div>
     
     </div>
  );
    
}
