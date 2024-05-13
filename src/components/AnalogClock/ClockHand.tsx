import React from "react";
import { ClockHandProps } from "./analogClockTypes";


const ClockHand: React.FC<ClockHandProps> = ({
    rotation,
    color,
    length,
    visible = true,
    smooth = false,
    thickness
  }) => {
    
    const handStyle: React.CSSProperties = {
      backgroundColor: color,
      width: length,
      transform: `rotate(${rotation}deg)`,
      transition: smooth ? "transform 0.3s ease" : "none",
      height: thickness
    };
  
    return visible ? (
      <div className="analog-clock-hand" style={handStyle}></div>
    ) : null;
  };
  
  export default ClockHand;