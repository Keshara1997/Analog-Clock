"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var ClockHand = function (_a) {
    var rotation = _a.rotation, color = _a.color, length = _a.length, _b = _a.visible, visible = _b === void 0 ? true : _b, _c = _a.smooth, smooth = _c === void 0 ? false : _c, thickness = _a.thickness;
    var handStyle = {
        backgroundColor: color,
        width: length,
        transform: "rotate(".concat(rotation, "deg)"),
        transition: smooth ? "transform 0.3s ease" : "none",
        height: thickness
    };
    return visible ? ((0, jsx_runtime_1.jsx)("div", { className: "analog-clock-hand", style: handStyle })) : null;
};
exports.default = ClockHand;
