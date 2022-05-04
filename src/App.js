import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import Hero from "./components/Header/Hero";
import AboutSectionLeft from "./components/AboutUs/AboutSectionLeft";
import AboutSectionRight from "./components/AboutUs/AboutSectionRight";
import ExploreLocations from "./components/Explore/ExploreLocations";
import Dining from "./components/DiningSection/Dining";
import ContactForm from "./components/ContactUs/ContactForm";
import Footer from "./components/Footer/Footer";

import { LogIn, SignUp, Reset } from "./components/login-signup-modal/Modals";
import Cart from "./components/cart-modal/Cart"

import Booking from "./components/booking/Booking"
import UserProfile from "./components/UserProfile/UserProfile"

function App() {
  return (
    <div>
      <Router>

        <Switch>
            <Route path="/YourProfile">
                <UserProfile/>
            </Route>

            <Route path="/SearchRooms">
                <Booking/>
            </Route>

            <Route path="/">
              <div>
                <Hero />
                <AboutSectionLeft />
                <AboutSectionRight />
                <ExploreLocations />
                <Dining />
                <ContactForm />
                <Footer />
              </div>
            </Route>
            
          </Switch>

          <LogIn /> <SignUp /> <Reset /> <Cart/>

      </Router>
    </div>
  );
}

export default App;
