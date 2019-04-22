import React from "react";

import TheSmurfs from "./TheSmurfs.png";

import "./App.css";

function Home(props) {
  const routeToList = event => {
    event.preventDefault();
    props.history.push("/smurfs");
  };

  return (
    <div className="smurf-home">
      <img src={TheSmurfs} alt="smurf title card" />
      <button onClick={routeToList}>List Them Smurfs!</button>
    </div>
  );
}

export default Home;
