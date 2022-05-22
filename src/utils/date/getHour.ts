export const getHour = (timestamp: string) =>
  timestamp ? timestamp.split("T").pop()?.replace("Z", "") : "";
