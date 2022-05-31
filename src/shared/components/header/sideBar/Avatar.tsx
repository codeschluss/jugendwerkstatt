import React, { useContext } from "react";
import { API_URL } from "../../../../config/app";
import AuthContext from "../../../../contexts/AuthContext";
import { useGetMeBasicQuery } from "../../../../GraphQl/graphql";

const Avatar: React.FC<{ size: string }> = ({ size }) => {
  const { bgColor } = useContext(AuthContext);
  const { data } = useGetMeBasicQuery();

  let letter;
  data?.me?.fullname &&
    (letter = data?.me?.fullname?.substring(0, 1).toUpperCase());
  return (
    <div>
      {data?.me?.profilePicture?.id ? (
        <img
          className={`h-${size} w-${size} object-cover rounded-full`}
          src={`${API_URL}media/${data?.me?.profilePicture?.id}`}
          alt=""
        />
      ) : (
        <span
          //   style={{ height: size + "px", width: size + "px" }}
          className={` w-${size} h-${size} rounded-full ${bgColor} flex justify-center items-center text-white`}
        >
          {letter}
        </span>
      )}
    </div>
  );
};

export default Avatar;
