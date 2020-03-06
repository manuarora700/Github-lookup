import React, { Fragment } from "react";

const About = () => {
  return (
    <Fragment>
      <h1>About this App</h1>
      <p>
        This application is Built using React 16 with React Router, React Hooks
        (context API) and more.
      </p>
      <p>Application is deployed on Netlify</p>
      <p>Version 1.0.0</p>
      <p>
        Visit my <a href="https://www.manuarora.me">Website</a> and{" "}
        <a href="https://www.github.com/manuarora700">GitHub</a> for more
        information
      </p>
    </Fragment>
  );
};
export default About;
