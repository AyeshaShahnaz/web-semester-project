import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
//   const express = require('express')
// const app = express()
// const mongoose = require("mongoose")
// var connectionUrl = "mongodb://localhost:27017/databasename"
// mongoose.connect(connectionUrl, {useNewUrlParser: true, useUnifiedTopology: true}, (err)=>{
//     if(err) throw err
//     console.log("Connected")
// })

// app.get("/home", (req, res)=>{
//     res.send("Hello")
// })

// const port = process.env.PORT || 4000
// app.listen(port, ()=>{
//     console.log(`Listening to Port ${port}`)
// })


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
