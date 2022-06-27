import dayjs from "dayjs";
import { FC, ReactElement } from "react";
import { Badge, Button } from "../../atoms";
import { SchedulesPreviewProps } from "./SchedulesPreview.props";

export const SchedulesPreview: FC<SchedulesPreviewProps> = ({
  schedules,
  handleDeleteAll,
  handleDeleteById,
}): ReactElement => {
  const handleDelete = (index: number) => () => handleDeleteById(index);

  return (
    <div className="p-5">
      <h1 className="mb-4 text-xl">Bestehende Termine zu diesem Event</h1>
      <div className="flex flex-col space-y-5 overflow-y-auto h-80">
        {schedules?.map((date, idx) => (
          <Badge key={idx} onRemove={handleDelete(idx)}>
            {`${dayjs(date.startDate).format("DD-MM-YYYY")} - ${dayjs(
              date.endDate
            ).format("DD-MM-YYYY")}, ${dayjs(date.startDate).format(
              "HH:mm"
            )} - ${dayjs(date.endDate).format("HH:mm")}`}
          </Badge>
        ))}
      </div>
      <Button type="button" className="mt-10" onClick={handleDeleteAll}>
        Alle Termine löschen
      </Button>
    </div>
  );
};
