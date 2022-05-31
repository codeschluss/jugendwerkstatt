import { NavLink } from "react-router-dom";
import I from "../../ui/IconWrapper";
import detectDevice from "../../../utils/isTouch";
import { useContext } from "react";
import SideBarContext from "../../../../contexts/SideBarContext";

interface ItemProps {
  clicked?: () => void;
  icon: React.ReactNode;
  name: string;
  href: string;
}

const Item: React.FC<ItemProps> = ({ clicked, icon, name, href }) => {
  const isTouch = detectDevice();
  const { sideBar } = useContext(SideBarContext);
  return (
    <li>
      <NavLink
        className={(navData) =>
          navData.isActive
            ? "border-l-4 bg-gray-100 md:bg-transparent border-primary md:border-white text-[#424242] md:text-white block"
            : `border-l-4 border-transparent block md:text-white`
        }
        to={href}
        onClick={isTouch ? clicked : undefined}
      >
        <span
          className={`flex items-center px-4 py-2 font-medium ${
            !isTouch ? !sideBar && "justify-end" : ""
          } `}
        >
          <I className="mr-2">{icon}</I>
          <span className={`${!isTouch ? !sideBar && "hidden" : ""}`}>
            {name}
          </span>
        </span>
      </NavLink>
    </li>
  );
};

export default Item;
