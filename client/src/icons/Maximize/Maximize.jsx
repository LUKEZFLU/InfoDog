/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const Maximize = ({ color = "#9CA3AF", className }) => {
  return (
    <svg
      className={`maximize ${className}`}
      fill="none"
      height="32"
      viewBox="0 0 32 32"
      width="32"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        d="M6.33337 19.6667V23C6.33337 24.4728 7.52728 25.6667 9.00004 25.6667H12.3334"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
      <path
        className="path"
        d="M25.6666 19.6667V23C25.6666 24.4728 24.4727 25.6667 23 25.6667H19.6666"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
      <path
        className="path"
        d="M25.6666 12.3333V8.99998C25.6666 7.52722 24.4727 6.33331 23 6.33331H19.6666"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
      <path
        className="path"
        d="M6.33337 12.3333V8.99998C6.33337 7.52722 7.52728 6.33331 9.00004 6.33331H12.3334"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
    </svg>
  );
};

Maximize.propTypes = {
  color: PropTypes.string,
};
