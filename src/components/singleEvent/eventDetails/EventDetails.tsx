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
import { string } from "yup";
import I from "../../ui/IconWrapper";

interface EventDetailsProps {
  street?: string;
  houseNr?: string;
  plz?: string;
  place?: string;
  tel?: string;
  email?: string;
  web?: string;
  group?: string;
  schedule?: any;
  startDate?: string;
  theRest?: string;
  description?: string;
}

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
    <>
      <div className="flex text-lg">
        <I>
          <FlagIcon />
        </I>
        <h3 className="ml-3">
          {`${street} ${houseNr}`} <br />
          {`${plz} ${place}`}
        </h3>
      </div>
      <div className="flex text-lg">
        <I>
          <PhoneIcon />
        </I>
        <h3 className="ml-3">{tel}</h3>
      </div>
      <div className="flex text-lg">
        <I>
          <MailIcon />
        </I>
        <h3 className="ml-3">{email}</h3>
      </div>
      <div className="flex text-lg">
        <I>
          <GlobeAltIcon />
        </I>
        <h3 className="ml-3">{web}</h3>
      </div>
      <div className="flex text-lg">
        <I>
          <UserGroupIcon />
        </I>
        <h3 className="ml-3">{group}</h3>
      </div>
      <div className="flex text-lg">
        <I>
          <ClockIcon />
        </I>
        <h3 className="ml-3">{schedule}</h3>
      </div>
      <div className="flex text-lg">
        <I>
          <CalendarIcon />
        </I>
        <h3 className="ml-3">{startDate}</h3>
      </div>
      <div className="flex text-lg">
        <I>
          <OfficeBuildingIcon />
        </I>
        <h3 className="ml-3">{theRest}</h3>
      </div>
      <div>{description}</div>
    </>
  );
};
