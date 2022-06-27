import { FC } from "react";
import { API_URL } from "../../../../config/app";
import { useGetMeBasicQuery } from "../../../../GraphQl/graphql";
import { cx } from "../../../utils/ClassNames";

const Avatar: FC<{ size: string; className?: string }> = ({
  size,
  className,
}) => {
  const { data } = useGetMeBasicQuery();

  let letter;
  data?.me?.fullname &&
    (letter = data?.me?.fullname?.substring(0, 1).toUpperCase());

  return (
    <div>
      {data?.me?.profilePicture?.id ? (
        <img
          className={cx([
            `h-${size} w-${size} object-cover rounded-full`,
            className,
          ])}
          src={`${API_URL}media/${data?.me?.profilePicture?.id}`}
          alt=""
        />
      ) : (
        <span
          //   style={{ height: size + "px", width: size + "px" }}
          className={cx([
            `w-${size} h-${size} rounded-full flex bg-primary justify-center items-center text-white`,
            className,
          ])}
        >
          {letter}
        </span>
      )}
    </div>
  );
};

export default Avatar;
