import dayjs from "dayjs";

export const formatDate = (
  date?: string | number | Date | null | undefined
) => {
  return dayjs(date).format(process.env.REACT_APP_DEFAULT_DATE_FORMAT);
};

export const formatDateTime = (
  date?: string | number | Date | null | undefined
) => {
  return dayjs(date).format("HH:mm");
};
