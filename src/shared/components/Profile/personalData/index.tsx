import { PencilIcon } from "@heroicons/react/solid";
import { Link, useNavigate } from "react-router-dom";
import { API_URL } from "../../../../config/app";
import {
  useGetMeBasicQuery,
  useRegisterUserMutation,
} from "../../../../GraphQl/graphql";
import useInput from "../../../../hooks/use-input";
import CustomHeader from "../../header/customHeader/CustomHeader";
import Button from "../../../../client/components/ui/Button";
import AuthInput from "../../authentication/AuthInput";

const PersonalData = () => {
  // const { bgColor } = useContext(AuthContext);

  const user = useGetMeBasicQuery();
  const navigate = useNavigate();
  const {
    value: enteredName,
    validity: enteredNameValidity,
    hasError: nameInputError,
    valueChangeHandler: nameChangeHandler,
    inputBlurHandler: nameBlurHandler,
  } = useInput((value: string) => value !== "", user.data?.me?.fullname);
  const {
    value: enteredEmail,
    validity: enteredEmailValidity,
    hasError: emailInputError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
  } = useInput(
    (value: string) =>
      value.includes("@") && value !== "" && value.includes("."),
    user.data?.me?.email
  );
  const {
    value: enteredPhone,
    hasError: phoneInputError,
    valueChangeHandler: phoneChangeHandler,
    inputBlurHandler: phoneBlurHandler,
  } = useInput(
    (value: string) =>
      value.includes("@") && value !== "" && value.includes("."),
    user?.data?.me?.phone
  );

  let letter;
  user.data?.me?.fullname &&
    (letter = user.data.me.fullname.substring(0, 1).toUpperCase());

  const [saveNewUser] = useRegisterUserMutation();

  const onSubmitHandler = (e: any) => {
    e.preventDefault();
    if (enteredNameValidity || enteredEmailValidity) {
      saveNewUser({
        variables: {
          entity: {
            id: user?.data?.me?.id,
            fullname:
              enteredName === "" ? user.data?.me?.fullname : enteredName,
            email: enteredEmail === "" ? user.data?.me?.email : enteredEmail,
            phone: enteredPhone === "" ? user.data?.me?.phone : enteredPhone,
          },
        },
        onCompleted: () => {
          navigate("/profile");
        },
      });
    }
  };

  return (
    <div className="text-[#676767] absolute  md:static w-full md:w-2/5  z-20 top-0 bg-white">
      <CustomHeader>Personal Data</CustomHeader>
      <div className="">
        <form
          onSubmit={onSubmitHandler}
          className="flex flex-col items-center justify-between w-full h-full pb-20 md:justify-start "
        >
          <div className="flex flex-col items-center justify-between w-full">
            <div className="relative flex flex-row justify-end w-full pt-5 pr-10">
              {user.data?.me?.profilePicture?.id ? (
                <img
                  className="object-cover w-24 h-24 rounded-full"
                  src={`${API_URL}media/${user.data.me?.profilePicture?.id}`}
                  alt=""
                />
              ) : (
                <span
                  className={`w-24 h-24 rounded-full bg-primary flex justify-center 
                  items-center text-white text-4xl`}
                >
                  {letter}
                </span>
              )}
              <span
                className="absolute w-8 flex justify-center items-center h-8 
              border-[1px] bottom-0 border-gray-600 rounded-full bg-white z-20"
              >
                <Link to="/profile-upload-picture">
                  <PencilIcon className="w-5 h-5" />
                </Link>
              </span>
            </div>
            <div className="mt-5">
              <AuthInput
                id="Name"
                type="text"
                onChange={nameChangeHandler}
                onBlur={nameBlurHandler}
                value={enteredName}
                error={nameInputError ? "Kann nicht lehr gelassen werden" : ""}
                inputClassName={`${
                  nameInputError && "border-500-red"
                }" w-full text-xl p-3 peer focus:outline-none border-2 rounded-md relative"`}
              />
              <AuthInput
                id="Email"
                type="text"
                onChange={emailChangeHandler}
                onBlur={emailBlurHandler}
                value={enteredEmail}
                error={emailInputError ? "Kann nicht lehr gelassen werden" : ""}
                inputClassName={`${
                  emailInputError && "border-500-red"
                }" w-full text-xl p-3 peer focus:outline-none border-2 rounded-md relative"`}
              />
              <AuthInput
                id="Telefon"
                type="text"
                onChange={phoneChangeHandler}
                onBlur={phoneBlurHandler}
                value={enteredPhone}
                error={phoneInputError ? "Kann nicht lehr gelassen werden" : ""}
                inputClassName={`${
                  phoneInputError && "border-500-red"
                }" w-full text-xl p-3 peer focus:outline-none border-2 rounded-md relative"`}
              />
            </div>
          </div>
          <span className="w-4/6 md:w-2/5 md:mt-5">
            <Button
              isDisabled={enteredNameValidity || enteredEmailValidity}
              isValidated={enteredEmailValidity || enteredNameValidity}
              buttonType={"submit"}
            >
              ??nderungen speichern
            </Button>
          </span>
        </form>
      </div>
    </div>
  );
};

export default PersonalData;
