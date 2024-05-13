export function getClockRotation(date: Date) {
  const second = date.getSeconds() * 6 - 90;// 360 degrees in a full circle divided by 60 seconds
    const minute = date.getMinutes() * 6 - 90; // 360 degrees in a full circle divided by 60 minutes
    const hour = (date.getHours() % 12) * 30 + date.getMinutes() / 2 - 90;  // 360 degrees in a full circle divided by 12 hours

    return {
      second: second - 90,
      minute: minute - 90,
      hour: hour - 90
    };
  }