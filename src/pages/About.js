import React from "react";
import { GitHub } from "@mui/icons-material";

const About = () => {
  return (
    <div className="about">
      <h1>About</h1>
      <p>
        Simple CRUD app built with React and Redux to manage a todo list, along
        with contacts appointments.
      </p>
      <div className="link-out">
        <a href="https://github.com/" target="_blank">
          <GitHub /> GitHub repository
        </a>
      </div>
    </div>
  );
};

export default About;
