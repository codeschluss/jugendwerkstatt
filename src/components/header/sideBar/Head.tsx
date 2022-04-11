import Styles from "./Head.module.css";

const Head: React.FunctionComponent = () => {
  return (
    <div className="w-full p-8 relative">
      <span
        className={`absolute inset-0 overflow-hidden ${Styles.headStyle}`}
      ></span>
      <img src="/assets/avatar-temp.png" alt="" />
      <div className="mt-5">
        <p className="text-lg font-semibold">Jenny Wilson</p>
        <p>jenny.wilson@gmail.com</p>
      </div>
    </div>
  );
};

export default Head;
