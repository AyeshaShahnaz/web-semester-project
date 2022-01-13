import React from "react";
import Card from "./Card";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div style={{ width: "100vw" }}>
      <div
        id="carouselExampleCaptions"
        class="carousel slide"
        data-bs-ride="carousel"
      >
        <div class="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            class="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <Link to="/wintercol">
              <img
                src="https://cdn.shopify.com/s/files/1/2635/3244/files/Desktop-Winter-Western-Banner.jpg?v=1638110090"
                class="d-block w-100"
                alt="..."
               
              />
              
            </Link>
           
            <div class="carousel-caption d-none d-md-block">
              <h1>Wear Your Dream</h1>
              <h5>Hey! Are You Excited For Winter Shopping?</h5>
            </div>
          </div>
          <div class="carousel-item">
            <Link to="/summerCol">
              <img
                src="https://cdn.shopify.com/s/files/1/2635/3244/files/Desktop-Unstitched-Embroidered-Banner.jpg?v=1638110234"
                class="d-block w-100"
              
              />
            </Link>
           
            <div class="carousel-caption d-none d-md-block">
              
              <h1>Summer Collection</h1>
              <h4 class="text-dark">
                Season Is Here.Are You Ready For Clothing?
              </h4>
            </div>
          </div>
          <div class="carousel-item">
            <Link to="/SpringCol">
              <img
                src="https://cdn.shopify.com/s/files/1/2635/3244/files/Desktop-Ready-To-Wear-Banner.jpg?v=1638110143"
                class="d-block w-100"
                alt="..."
                
              />
            </Link>
            {/* <img src="..." class="d-block w-100" alt="..."></img> */}
            <div class="carousel-caption d-none d-md-block">
              <h1>Spring Collection</h1>
              <p></p>
            </div>
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}
