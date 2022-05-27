import { useContext } from "react";
import { API_URL } from "../../../config/app";
import AuthContext from "../../../contexts/AuthContext";
import { useGetMeBasicQuery } from "../../../GraphQl/graphql";
import Styles from "./Head.module.css";

const Head: React.FunctionComponent = () => {
  const { bgColor } = useContext(AuthContext);
  const { data } = useGetMeBasicQuery();

  let letter;

  data?.me?.fullname &&
    (letter = data?.me?.fullname?.substring(0, 1).toUpperCase());
  return (
    <div className="w-full p-8 relative">
      <span
        className={`absolute inset-0 overflow-hidden ${Styles.headStyle}`}
      ></span>
      {data?.me?.profilePicture?.id ? (
        <img
          className="h-14 w-14 object-cover rounded-full"
          src={`${API_URL}media/${data?.me?.profilePicture?.id}`}
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
        <p className="text-lg font-semibold">{data?.me?.fullname}</p>
        <p>{data?.me?.email}</p>
      </div>
    </div>
  );
};

export default Head;
