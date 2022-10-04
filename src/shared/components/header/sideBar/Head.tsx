import { Link } from "react-router-dom";
import { useGetMeBasicQuery } from "../../../../GraphQl/graphql";
import { useAuthStore } from "../../../../store";
import Avatar from "./Avatar";
import Styles from "./Head.module.css";
import { UserIcon, UserAddIcon } from "@heroicons/react/outline";

const Head: React.FunctionComponent = () => {
  const { data } = useGetMeBasicQuery();
  const { isAuthenticated } = useAuthStore();

  return (
    <div className="relative w-full p-8">
      <span
        className={`absolute inset-0 overflow-hidden ${Styles.headStyle}`}
      ></span>
      {isAuthenticated ? (
        <>
          <Avatar fullname={data?.me?.fullname} />
          <div className="mt-5">
            <p className="text-lg font-semibold">{data?.me?.fullname}</p>
            <p>{data?.me?.email}</p>
          </div>{" "}
        </>
      ) : (
        <div className="flex flex-col w-full items-center ">
          <Link className="mb-3 flex items-center" to={"login"}>
            <UserIcon className="w-5 h-5 mr-1"></UserIcon> Einloggen
          </Link>{" "}
          <Link to={"register"} className="flex items-center">
            <UserAddIcon className="w-5 h-5 mr-1"></UserAddIcon> Registrieren
          </Link>
        </div>
      )}
    </div>
  );
};

export default Head;
