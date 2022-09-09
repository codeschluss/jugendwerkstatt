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

  const iPad =
    /iPad|iPhone|iPod/.test(navigator.platform) ||
    (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1);

  const abc = () => {
    if (
      (/\b(iPad)\b/.test(navigator.userAgent) &&
        /WebKit/.test(navigator.userAgent)) ||
      (navigator.platform === "MacIntel" &&
        navigator.maxTouchPoints &&
        navigator.maxTouchPoints === 5)
    ) {
      return true;
    }
  };

  return (
    toMatch.some((toMatchItem) => {
      return navigator.userAgent.match(toMatchItem);
    }) ||
    iPad ||
    abc
  );
};

export default detectDevice;
