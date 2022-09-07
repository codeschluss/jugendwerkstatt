import dayjs from "dayjs";

export const formatDate = (date: Date) =>
  dayjs(date).format(process.env.REACT_APP_DEFAULT_DATE_FORMAT);
