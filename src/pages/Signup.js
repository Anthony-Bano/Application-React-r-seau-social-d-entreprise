import React from "react";
import Navigation from "../components/Navigation";
import Signupoption from "../components/Signupoption";
import { Backgroundcolor } from "../script/Backgroundcolor";
import { useContext } from "react";
const Signup = () => {
  const { backgroundcolor, setBackgroundcolor } = useContext(Backgroundcolor);
  setBackgroundcolor("#232735");
  return (
    <div>
      <p>la couleur est {backgroundcolor}</p>
      <Navigation />
      <Signupoption />
    </div>
  );
};

export default Signup;
