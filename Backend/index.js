import express from "express";
import bodyParser from "body-Parser";
import mongoose from "mongoose";
import cors from "cors";
import signupforms from "./routes/Formdb.js";

const app = express();

const url =
  "mongodb://rehan:12345@clusterweb-shard-00-00.b14dm.mongodb.net:27017,clusterweb-shard-00-01.b14dm.mongodb.net:27017,clusterweb-shard-00-02.b14dm.mongodb.net:27017/myFirstDatabase?ssl=true&replicaSet=atlas-5tfgig-shard-0&authSource=admin&retryWrites=true&w=majority";

mongoose
  .connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("database connected"));

app.listen(5000);
app.use(cors());
app.use(bodyParser.json({ extended: true }));
//data receive in proper form like hello
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/Signup", signupforms);
app.use("/viewUser", signupforms);
app.use("/deleteData", signupforms);
app.use("/updateData", signupforms);

