import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./components/Home/Home";
import EventDetails from "./widget/Events/EventDetails";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Checkout from "./BookTicket/Checkout";
import {ContextProvider} from './Context';
import BookSlots from "./BookTicket/BookSlots";
import Login from './components/Login';
import Signup from "./components/Signup";
import PastBookings from "../src/BookTicket/PastBookings";
import ProtectedRoute from './components/ProtectedRoute';
import MyOrders from '../src/BookTicket/MyOrders';
function App () {
  return (
    <ContextProvider>
    <div>
      <Header />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/event/:id" component={BookSlots} />
        <ProtectedRoute path="/checkout" component={Checkout} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
        <Route path="/pastbookings" component={PastBookings} />
        <Route path="/myorders" component={MyOrders} />
      </Switch>
      <div className="Footer">
        <Footer />
      </div>
    </div>
    </ContextProvider>
  );
}

export default App;
