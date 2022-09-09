import { Capacitor } from "@capacitor/core";

const detectDevice = () => {
  const toMatch = [
    /Android/i,
    /webOS/i,
    /iPhone/i,
    /iPad/i,
    /iPod/i,
    /BlackBerry/i,
    /Windows Phone/i,
  ];
  const device = Capacitor.getPlatform(); // -> 'web', 'ios' or 'android'

  const abc = () => {
    if (
      (/\b(iPad)\b/.test(navigator.userAgent) &&
        /WebKit/.test(navigator.userAgent)) ||
      (navigator.platform === "MacIntel" &&
        navigator.maxTouchPoints &&
        navigator.maxTouchPoints > 1)
    ) {
      return true;
    }
  };

  return device !== "ios"
    ? toMatch.some((toMatchItem) => {
        return navigator.userAgent.match(toMatchItem);
      })
    : abc ||
        toMatch.some((toMatchItem) => {
          return navigator.userAgent.match(toMatchItem);
        });
};

export default detectDevice;
