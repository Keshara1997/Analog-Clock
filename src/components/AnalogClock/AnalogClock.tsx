import React, { FC, useEffect, useState } from "react";
import "./AnalogClock.css";
import dotsBg from "./assets/dots.svg";
import numbersBg from "./assets/numbers.svg";
import numbersAltBg from "./assets/numbers-alt.svg";
import linesBg from "./assets/lines.svg";
import { AnalogClockProps } from "./analogClockTypes";
import { getClockRotation } from "./utils";
import ClockHand from "./ClockHand";


const AnalogClock: FC<AnalogClockProps> = ({
  showMinuteHand = true,
  showSecondHand = true,
  showBorder = true,
  showHandBase = true,
  smooth = false,
  whiteNumbers = false,
  square = false,
  numbersType = "numbersAndLines",
  borderColor = "#000000",
  handBaseColor = "#000000",
  handColor = { hour: "#000000", miniute: "#000000", second: "#e74c3c" },
  handLength = { hour: "65px", miniute: "90px", second: "90px" },
  handThickness = { hour: "2px", miniute: "2px", second: "2px" },
  size = "200px",
  backgroundColor = "#ffffff",
  staticDate,
  customBg,
}) => {
  const [currentDate, setCurrentDate] = useState(staticDate || new Date());

  useEffect(() => {
    if (!staticDate) {
      const intervalTime = showSecondHand
        ? 1000
        : showMinuteHand
        ? 1000 * 60
        : 1000 * 3600;
      const interval = setInterval(
        () => setCurrentDate(new Date()),
        intervalTime
      );
      return () => clearInterval(interval);
    }
  }, [staticDate, showMinuteHand, showSecondHand]);

  const rotations = getClockRotation(currentDate);

  const backgroundImageSrc = {
    numbers: numbersBg,
    dots: dotsBg,
    numbersAndLines: numbersAltBg,
    lines: linesBg,
    roman: numbersAltBg,
  };

  const clockStyle: React.CSSProperties = {
    border: showBorder ? `2px solid ${borderColor}` : "none",
    width: size,
    height: size,
    backgroundColor: backgroundColor,
    borderRadius: square ? "5%" : "50%",
  };

  const fullWidthNumberTypes = ["numbersAndLines", "lines", "roman"];

  const bgStyle: React.CSSProperties = {
    filter: whiteNumbers ? "invert(100%)" : "none",
    width: fullWidthNumberTypes.includes(numbersType) || customBg ? "100%" : "90%",
    height: fullWidthNumberTypes.includes(numbersType) || customBg ? "100%" : "90%",
  };

  const handStyle: React.CSSProperties = {
    color: handBaseColor,
  };

  return (
    <div className="analog-clock" style={clockStyle}>
      <img
        className="analog-clock-bg"
        src={customBg || backgroundImageSrc[numbersType]}
        alt="background"
        style={bgStyle}
      />

      {showHandBase && (
        <div className="analog-clock-hand_base" style={handStyle}>
          ●
        </div>
      )}

      <ClockHand
        rotation={rotations.second}
        color={handColor.second}
        length={handLength.second}
        smooth={smooth}
        visible={showSecondHand}
        thickness={handThickness.second}
      />

      <ClockHand
        rotation={rotations.minute}
        color={handColor.miniute}
        length={handLength.miniute}
        smooth={smooth}
        visible={showMinuteHand}
        thickness={handThickness.miniute}
      />

      <ClockHand
        rotation={rotations.hour}
        color={handColor.hour}
        length={handLength.hour}
        thickness={handThickness.hour}
        smooth={smooth}
      />
    </div>
  );
};

export default AnalogClock;