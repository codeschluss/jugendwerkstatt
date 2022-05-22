import { useContext } from "react";
import AuthContext from "../../../contexts/AuthContext";
import Styles from "./Head.module.css";

const Head: React.FunctionComponent = () => {
  const { theUser } = useContext(AuthContext);

  return (
    <div className="w-full p-8 relative">
      <span
        className={`absolute inset-0 overflow-hidden ${Styles.headStyle}`}
      ></span>
      <img
        className="h-14 w-14 object-cover rounded-full"
        src={`http://localhost:8061/api/media/${theUser?.profilePicture?.id}`}
        alt=""
      />
      <div className="mt-5">
        <p className="text-lg font-semibold">{theUser?.fullname}</p>
        <p>{theUser?.email}</p>
      </div>
    </div>
  );
};

export default Head;
