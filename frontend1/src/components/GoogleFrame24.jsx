import React from "react";
import "../style.css";


export const GoogleFrame = ({ onClick }) => {
  return (
    <button className="BoxGoogle" onClick={onClick}>
      <img className="googleLogo" src="/Users/ishanpathak/Desktop/agrofrontend/frontend/src/Assets/googleLogo.svg" alt="Google Logo" /> 
      <div className="googleText">Google</div>
    </button>
  );
};

export default GoogleFrame;
