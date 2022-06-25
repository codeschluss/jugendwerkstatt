import { useGetMeBasicQuery } from "../../../../GraphQl/graphql";
import Avatar from "./Avatar";
import Styles from "./Head.module.css";

const Head: React.FunctionComponent = () => {
  const { data } = useGetMeBasicQuery();

  return (
    <div className="relative w-full p-8">
      <span
        className={`absolute inset-0 overflow-hidden ${Styles.headStyle}`}
      ></span>
      <Avatar size="20" />
      <div className="mt-5">
        <p className="text-lg font-semibold">{data?.me?.fullname}</p>
        <p>{data?.me?.email}</p>
      </div>
    </div>
  );
};

export default Head;
