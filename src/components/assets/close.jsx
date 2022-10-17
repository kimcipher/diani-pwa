import React from "react";

const Close = () => {
  return (
    <svg
      version="1.1"
      id="Layer_1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      x="0px"
      y="0px"
      viewBox="0 0 40 40"
      style={{color:"#000"}}
      xmlSpace="preserve"
    >
      <g>
        <rect
          x="0"
          y="16"
          transform="matrix(0.7071 -0.7071 0.7071 0.7071 -8.2843 20)"
          width="40"
          height="8"
        />
      </g>
      <g>
        <rect
          x="16"
          y="0"
          transform="matrix(0.7071 -0.7071 0.7071 0.7071 -8.2843 20)"
          width="8"
          height="40"
        />
      </g>
    </svg>
  );
};
export default Close;