import React, { useState } from "react";
import Navbar from "./Components/Navbar";
import Signup from "./Components/Signup";
import MyHome from "./Components/MyHome";
import Login from "./Components/Login";
import Aboutus from "./Components/Aboutus";
import Contactus from "./Components/Contactus";
import Card from "./Components/Card";
import SummerCard from "./Components/SummerCard";
import SpringCard from "./Components/SpringCard";
import Home from "./Components/Home";
import WinterCol from "./Components/WinterCol";
import SummerCol from "./Components/SummerCol";
import SpringCol from "./Components/SpringCol";
import Cart from "./Components/Cart";
import Footer from "./Components/Footer";
import ViewUser from "./Components/ViewUser";
import Updateuser from "./Components/Updateuser";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import { Switch, Route } from "react-router-dom";


function App() {
  const [cartData, setCartData] = useState([]);

  return (
    <div>
      <Navbar />

      <Switch>
        <Route exact path="/" component={Home} />

        <Route path="/signup" component={Signup}></Route>
        <Route path="/Login" component={Login}></Route>
        <Route path="/MyHome" component={MyHome}></Route>
        <Route path="/Aboutus" component={Aboutus} />
        <Route path="/Contactus">
          <Contactus />
        </Route>
        <Route path="/Card">
          <Card />
        </Route>
        <Route path="/SummerCard">
          <SummerCard />
          {/* <SummerCard cartData={cartData} setCartData={setCartData} /> */}
        </Route>
        <Route path="/SpringCard">
          <SpringCard />
        </Route>

        <Route
          path="/Wintercol"
          render={() => (
            <WinterCol cartData={cartData} setCartData={setCartData} />
          )}
        ></Route>

        <Route
          path="/Summercol"
          render={() => (
            <SummerCol cartData={cartData} setCartData={setCartData} />
          )}
        ></Route>
        <Route
          path="/Springcol"
          render={() => (
            <SpringCol cartData={cartData} setCartData={setCartData} />
          )}
        ></Route>
        <Route path="/ViewUser">
          <ViewUser />
        </Route>
        <Route path="/update/:id" component={Updateuser}></Route>

        <Route
          path="/cart"
          render={() => <Cart cartData={cartData} setCartData={setCartData} />}
        ></Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
