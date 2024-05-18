"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
require("./AnalogClock.css");
var dots_svg_1 = __importDefault(require("./assets/dots.svg"));
var numbers_svg_1 = __importDefault(require("./assets/numbers.svg"));
var numbers_alt_svg_1 = __importDefault(require("./assets/numbers-alt.svg"));
var lines_svg_1 = __importDefault(require("./assets/lines.svg"));
var roman_svg_1 = __importDefault(require("./assets/roman.svg"));
var utils_1 = require("./utils");
var ClockHand_1 = __importDefault(require("./ClockHand"));
var AnalogClock = function (_a) {
    var _b = _a.showMinuteHand, showMinuteHand = _b === void 0 ? true : _b, _c = _a.showSecondHand, showSecondHand = _c === void 0 ? true : _c, _d = _a.showBorder, showBorder = _d === void 0 ? true : _d, _e = _a.showHandBase, showHandBase = _e === void 0 ? true : _e, _f = _a.smooth, smooth = _f === void 0 ? false : _f, _g = _a.whiteNumbers, whiteNumbers = _g === void 0 ? false : _g, _h = _a.square, square = _h === void 0 ? false : _h, _j = _a.numbersType, numbersType = _j === void 0 ? "numbersAndLines" : _j, _k = _a.borderColor, borderColor = _k === void 0 ? "#000000" : _k, _l = _a.handBaseColor, handBaseColor = _l === void 0 ? "#000000" : _l, _m = _a.handColor, handColor = _m === void 0 ? { hour: "#000000", miniute: "#000000", second: "#e74c3c" } : _m, _o = _a.handLength, handLength = _o === void 0 ? { hour: "65px", miniute: "90px", second: "90px" } : _o, _p = _a.handThickness, handThickness = _p === void 0 ? { hour: "2px", miniute: "2px", second: "2px" } : _p, _q = _a.size, size = _q === void 0 ? "200px" : _q, _r = _a.backgroundColor, backgroundColor = _r === void 0 ? "#ffffff" : _r, staticDate = _a.staticDate, customBg = _a.customBg;
    var _s = (0, react_1.useState)(staticDate || new Date()), currentDate = _s[0], setCurrentDate = _s[1];
    (0, react_1.useEffect)(function () {
        if (!staticDate) {
            var intervalTime = showSecondHand
                ? 1000
                : showMinuteHand
                    ? 1000 * 60
                    : 1000 * 3600;
            var interval_1 = setInterval(function () { return setCurrentDate(new Date()); }, intervalTime);
            return function () { return clearInterval(interval_1); };
        }
    }, [staticDate, showMinuteHand, showSecondHand]);
    var rotations = (0, utils_1.getClockRotation)(currentDate);
    var backgroundImageSrc = {
        numbers: numbers_svg_1.default,
        dots: dots_svg_1.default,
        numbersAndLines: numbers_alt_svg_1.default,
        lines: lines_svg_1.default,
        roman: roman_svg_1.default,
    };
    var clockStyle = {
        border: showBorder ? "2px solid ".concat(borderColor) : "none",
        width: size,
        height: size,
        backgroundColor: backgroundColor,
        borderRadius: square ? "5%" : "50%",
    };
    var fullWidthNumberTypes = ["numbersAndLines", "lines", "roman"];
    var bgStyle = {
        filter: whiteNumbers ? "invert(100%)" : "none",
        width: fullWidthNumberTypes.includes(numbersType) || customBg ? "100%" : "90%",
        height: fullWidthNumberTypes.includes(numbersType) || customBg ? "100%" : "90%",
    };
    var handStyle = {
        color: handBaseColor,
    };
    return ((0, jsx_runtime_1.jsxs)("div", { className: "analog-clock", style: clockStyle, children: [(0, jsx_runtime_1.jsx)("img", { className: "analog-clock-bg", src: customBg || backgroundImageSrc[numbersType], alt: "background", style: bgStyle }), showHandBase && ((0, jsx_runtime_1.jsx)("div", { className: "analog-clock-hand_base", style: handStyle, children: "\u25CF" })), (0, jsx_runtime_1.jsx)(ClockHand_1.default, { rotation: rotations.second, color: handColor.second, length: handLength.second, smooth: smooth, visible: showSecondHand, thickness: handThickness.second }), (0, jsx_runtime_1.jsx)(ClockHand_1.default, { rotation: rotations.minute, color: handColor.miniute, length: handLength.miniute, smooth: smooth, visible: showMinuteHand, thickness: handThickness.miniute }), (0, jsx_runtime_1.jsx)(ClockHand_1.default, { rotation: rotations.hour, color: handColor.hour, length: handLength.hour, thickness: handThickness.hour, smooth: smooth })] }));
};
exports.default = AnalogClock;
