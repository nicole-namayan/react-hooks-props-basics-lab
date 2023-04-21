import React from "react";
import Links from "./Link";

function About(props) {
  return (
    <div id="about">
      <h2>About Me</h2>
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      {props.bio && props.bio.length > 1 ? <p>{props.bio}</p> : null}
      <Links github = {props.links.github} linkedin = {props.links.linkedin} /> 
    </div>
  );
}

export default About;
