"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getClockRotation = void 0;
function getClockRotation(date) {
    var second = date.getSeconds() * 6 - 90; // 360 degrees in a full circle divided by 60 seconds
    var minute = date.getMinutes() * 6 - 90; // 360 degrees in a full circle divided by 60 minutes
    var hour = (date.getHours() % 12) * 30 + date.getMinutes() / 2 - 90; // 360 degrees in a full circle divided by 12 hours
    return {
        second: second - 90,
        minute: minute - 90,
        hour: hour - 90
    };
}
exports.getClockRotation = getClockRotation;
