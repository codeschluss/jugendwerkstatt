import { useContext } from "react";
import AuthContext from "../../../contexts/AuthContext";
import Styles from "./Head.module.css";

const Head: React.FunctionComponent = () => {
  const { theUser, bgColor } = useContext(AuthContext);

  let letter;

  theUser?.fullname &&
    (letter = theUser.fullname.substring(0, 1).toUpperCase());
  return (
    <div className="w-full p-8 relative">
      <span
        className={`absolute inset-0 overflow-hidden ${Styles.headStyle}`}
      ></span>
      {theUser?.profilePicture?.id ? (
        <img
          className="h-14 w-14 object-cover rounded-full"
          src={`http://localhost:8061/api/media/${theUser?.profilePicture?.id}`}
          alt=""
        />
      ) : (
        <span
          className={`w-14 h-14 rounded-full ${bgColor} flex justify-center items-center text-white`}
        >
          {letter}
        </span>
      )}
      <div className="mt-5">
        <p className="text-lg font-semibold">{theUser?.fullname}</p>
        <p>{theUser?.email}</p>
      </div>
    </div>
  );
};

export default Head;
