import dayjs from "dayjs";
import { DEFAULT_DATE_FORMAT } from "../../config/app";

export const formatDate = (date: Date) =>
  dayjs(date).format(DEFAULT_DATE_FORMAT);
