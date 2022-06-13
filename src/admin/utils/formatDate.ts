import dayjs from "dayjs";
import { DEFAULT_DATE_FORMAT } from "../../config/app";

export const formatDate = (
  date?: string | number | Date | null | undefined
) => {
  return dayjs(date).format(DEFAULT_DATE_FORMAT);
};
