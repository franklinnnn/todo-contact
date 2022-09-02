import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home">
      <h1>Hello</h1>
      <ul>
        <li>
          <Link to="/todos">Start To do list</Link>
        </li>
        <li>
          <Link to="/contacts">Create contacts</Link>
        </li>
        <li>
          <Link to="/appointments">Schedule appointments</Link>
        </li>
      </ul>
    </div>
  );
};

export default Home;
