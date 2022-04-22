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
        <h3 className="ml-3 mt-2">{tel}</h3>
      </div>
      <div className="flex text-md">
        <I>
          <MailIcon />
        </I>
        <h3 className="ml-3 mt-2">{email}</h3>
      </div>
      <div className="flex text-md">
        <I>
          <GlobeAltIcon />
        </I>
        <h3 className="ml-3 mt-2">{web}</h3>
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
        <h3 className="ml-3 mt-2">{schedule}</h3>
      </div>
      <div className="flex text-md">
        <I>
          <CalendarIcon />
        </I>
        <h3 className="ml-3 mt-2">{startDate}</h3>
      </div>
      <div className="flex text-md">
        <I>
          <OfficeBuildingIcon />
        </I>
        <h3 className="ml-3 mt-2">{theRest}</h3>
      </div>
      <div>{description}</div>
    </>
  );
};
