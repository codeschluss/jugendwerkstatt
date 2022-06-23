import { ScheduleInputs } from "../../organisms";

export interface SchedulesPreviewProps {
  handleDeleteAll: () => void;
  handleDeleteById: (idx: number) => void;
  schedules: [] | ScheduleInputs[];
}
