import { ArrowSmDownIcon, PhoneIcon } from "@heroicons/react/solid";
import Item from "../Item";

const Calls = () => {
  return (
    <div>
      <Item
        href=""
        name="Jane Cooper"
        description={
          <span className="flex items-center">
            <span className="text-green-500 transform rotate-45 w-6 h-6">
              <ArrowSmDownIcon />
            </span>
            {new Date("13 December, 2022").toISOString()}
          </span>
        }
        imgUrl="/assets/avatarSmall2.png"
        rightInfo={
          <span className="w-6 h-6 block">
            <PhoneIcon />
          </span>
        }
      />
    </div>
  );
};

export default Calls;
