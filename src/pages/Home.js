import React from "react";
import { Link } from "react-router-dom";
import NavBar from "../components/NavBar/navBar";

const Home = () => {
  return (
    <div className="dhiwise-navigation">
      <NavBar />
      <h1>Homepage</h1>
      <p className="headline">
        This project was generated By{" "}
        <a href="https://www.dhiwise.com">Dhiwise</a>. Quickly use below links
        to navigate through all pages.
      </p>
      <ul>
        <li>
          <Link to="/">LandingPage</Link>
        </li>
        <li>
          <Link to="/loginpage">LoginPage</Link>
        </li>
        <li>
          <Link to="/registerpage">RegisterPage</Link>
        </li>
        <li>
          <Link to="/aboutuspage">AboutusPage</Link>
        </li>
        <li>
          <Link to="/listingspage">ListingsPage</Link>
        </li>
      </ul>
    </div>
  );
};

export default Home;
