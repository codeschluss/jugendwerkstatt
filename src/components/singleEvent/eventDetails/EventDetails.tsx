import {
  FlagIcon,
  PhoneIcon,
  MailIcon,
  UserGroupIcon,
  ClockIcon,
  OfficeBuildingIcon,
  GlobeAltIcon,
  CalendarIcon,
} from "@heroicons/react/outline";
import I from "../../ui/IconWrapper";
import { formatDate } from "../../../utils/date/formatDate";
import { getHour } from "../../../utils/date/getHour";

import { EventDetailsProps } from "./eventDetailsProps";

export const EventDetails: React.FC<EventDetailsProps> = ({
  street,
  houseNr,
  plz,
  place,
  tel,
  email,
  web,
  group,
  schedule,
  startDate,
  theRest,
  description,
}) => {
  return (
    <div className="">
      <div className="flex text-md align-middle">
        <I>
          <FlagIcon />
        </I>
        <h3 className="ml-3">
          {`${street} ${houseNr}`} <br />
          {`${plz} ${place}`}
        </h3>
      </div>
      <div className="flex text-md">
        <I>
          <PhoneIcon />
        </I>
        <a href={`tel:${tel}`} className="ml-3 mt-2">
          {tel}
        </a>
      </div>
      <div className="flex text-md">
        <I>
          <MailIcon />
        </I>
        <a href={`mailto:${email}`} className="ml-3 mt-2">
          {email}
        </a>
      </div>
      <div className="flex text-md">
        <I>
          <GlobeAltIcon />
        </I>
        <a href={`${web}`} target="_blank" className="ml-3 mt-2">
          {web}
        </a>
      </div>
      <div className="flex text-md">
        <I>
          <UserGroupIcon />
        </I>
        <h3 className="ml-3 mt-2">{group}</h3>
      </div>
      <div className="flex text-md">
        <I>
          <ClockIcon />
        </I>
        <h3 className="ml-3 mt-2">{getHour(schedule)} Uhr</h3>
      </div>
      <div className="flex text-md">
        <I>
          <CalendarIcon />
        </I>
        <h3 className="ml-3 mt-2">{formatDate(new Date(startDate || ""))}</h3>
      </div>
      <div className="flex text-md">
        <I>
          <OfficeBuildingIcon />
        </I>
        <h3 className="ml-3 mt-2">{theRest}</h3>
      </div>
      <div className="md:hidden block">{description}</div>
    </div>
  );
};
