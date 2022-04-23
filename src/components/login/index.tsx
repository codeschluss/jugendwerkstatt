import { useMutation } from "@apollo/client";
import React, {
  MutableRefObject,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "../../contexts/AuthContext";
import { LOGIN_GET_TOKEN } from "../../GraphQl/mutation";
import logo from "../../images/jugendwerkstatt-logo.png";

const Index = () => {
  const navigate = useNavigate();
  const [passwordInputType, setPasswordInputType] = useState("password");
  const [hiddenLine, setHiddenLine] = useState(true);
  const [disabledButton, setDisabledButton] = useState(false);
  const [emailValidationText, setEmailValidationText] = useState("");
  const [passwordValidationText, setPasswordValidationText] = useState("");

  const emailRef = useRef() as MutableRefObject<HTMLInputElement>;
  const passwordRef = useRef() as MutableRefObject<HTMLInputElement>;

  const togglePassword = () => {
    if (passwordInputType === "password") {
      setPasswordInputType("text");
      setHiddenLine(false);
    } else {
      setPasswordInputType("password");
      setHiddenLine(true);
    }
  };
  const { userToken, setUserToken } = useContext(AuthContext);
  const { refreshToken, setRefreshToken } = useContext(AuthContext);

  const [getuserFunction, { loading, error, data }] =
    useMutation(LOGIN_GET_TOKEN);

  useEffect(() => {
    if (data) {
      console.log("data: ", data);
      const tempAccessToken = data.createToken.access;
      const tempRefreshToken = data.createToken.refresh;

      const decodedJwtToken = JSON.parse(atob(tempAccessToken.split(".")[1]));
      console.log("decoded token:", decodedJwtToken);
      const roles = decodedJwtToken.roles;

      var responseMessage = "wrong";
      if (roles.indexOf("verified") > -1) {
        responseMessage = "success";
      }

      if (responseMessage == "wrong") {
        setPasswordValidationText(
          "Benutzername und Passwort stimmen nicht überein."
        );

        emailRef.current.value = "";
        passwordRef.current.value = "";

        setDisabledButton(false);
      }

      if (responseMessage == "success") {
        setUserToken(tempAccessToken);
        setRefreshToken(tempRefreshToken);

        localStorage.setItem("jugendwerkstattAccessToken", tempAccessToken);
        localStorage.setItem("jugendwerkstattRefreshToken", tempRefreshToken);

        const localStorageAccessToken = localStorage.getItem(
          "jugendwerkstattAccessToken"
        );
        const localStorageRefreshToken = localStorage.getItem(
          "jugendwerkstattRefreshToken"
        );
        navigate("/");
      }
    } else {
      setPasswordValidationText(
        "Benutzername und Passwort stimmen nicht überein."
      );

      emailRef.current.value = "";
      passwordRef.current.value = "";

      setDisabledButton(false);
    }
  }, [data]);

  const Login = () => {
    var isValid = true;
    setEmailValidationText("");
    setPasswordValidationText("");
    var tempEmailValue = emailRef.current.value;
    var tempPasswordValue = passwordRef.current.value;

    if (tempEmailValue == "") {
      setEmailValidationText("Dies ist ein Pflichtfeld");
      isValid = false;
    } else if (
      !tempEmailValue
        .toLowerCase()
        .match(
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        )
    ) {
      setEmailValidationText("Email ist ungültig");
      isValid = false;
    }

    // if (tempPasswordValue == "") {
    //   setPasswordValidationText("Dies ist ein Pflichtfeld");
    //   isValid = false;
    // } else if (tempPasswordValue.length < 6) {
    //   setPasswordValidationText("Die Passwortlänge muss 6 oder mehr betragen");
    //   isValid = false;
    // }

    if (isValid) {
      setDisabledButton(true);
      //request to backend here
      getuserFunction({
        variables: {
          username: emailRef.current.value,
          password: passwordRef.current.value,
        },
      });
    }
  };

  return (
    <div className="px-0 flex flex-col w-screen h-screen">
      <div className="px-0 h-[30%]">
        <img className="h-full w-screen object-cover" src={logo} alt={"logo"} />
      </div>
      <div className="flex justify-center flex-grow w-screen -mt-6 rounded-3xl bg-white">
        <div className="grid grid-rows-12">
          <div className="row-span-5">
            <div className="text-3xl text-center mt-5">Anmelden</div>
            <div className="mt-4 w-screen">
              <div className="border-2 rounded-md mx-12 pl-1 pb-2">
                <label className="text-xs text-zinc-400">E-Mail-Adresse</label>
                <br />
                <input
                  ref={emailRef}
                  type="email"
                  className="text-xl mt-1 w-full focus:outline-none"
                ></input>
              </div>
              <span className="text-xs ml-14 mt-0 text-rose-500">
                {emailValidationText}
              </span>
            </div>
            <div className="w-screen">
              <div className="border-2 rounded-md mx-12 pl-1 pl-2 pb-2 grid grid-cols-9">
                <label className="col-span-8">
                  <span className="text-xs text-zinc-400">Passwort</span>
                  <br />
                  <input
                    ref={passwordRef}
                    type={passwordInputType}
                    className="w-full col-span-8 text-xl mt-1 focus:outline-none"
                  />
                </label>
                <div className="col-span-1 grid place-items-center">
                  <svg
                    width="24"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    onClick={togglePassword}
                  >
                    <path
                      d="M7.99984 4.33333C10.5265 4.33333 12.7798 5.75333 13.8798 8C12.7798 10.2467 10.5332 11.6667 7.99984 11.6667C5.4665 11.6667 3.21984 10.2467 2.11984 8C3.21984 5.75333 5.47317 4.33333 7.99984 4.33333ZM7.99984 3C4.6665 3 1.81984 5.07333 0.666504 8C1.81984 10.9267 4.6665 13 7.99984 13C11.3332 13 14.1798 10.9267 15.3332 8C14.1798 5.07333 11.3332 3 7.99984 3ZM7.99984 6.33333C8.91984 6.33333 9.6665 7.08 9.6665 8C9.6665 8.92 8.91984 9.66667 7.99984 9.66667C7.07984 9.66667 6.33317 8.92 6.33317 8C6.33317 7.08 7.07984 6.33333 7.99984 6.33333ZM7.99984 5C6.3465 5 4.99984 6.34667 4.99984 8C4.99984 9.65333 6.3465 11 7.99984 11C9.65317 11 10.9998 9.65333 10.9998 8C10.9998 6.34667 9.65317 5 7.99984 5Z"
                      fill="#676767"
                    />
                    {hiddenLine && (
                      <line
                        x1="0.5"
                        y1="3"
                        x2="14.5"
                        y2="13.5"
                        stroke="#676767"
                        strokeWidth="1.5"
                      ></line>
                    )}
                    {hiddenLine && (
                      <line
                        x1="1"
                        y1="2"
                        x2="16.5"
                        y2="13.5"
                        stroke="white"
                      ></line>
                    )}
                  </svg>
                </div>
              </div>
              <span className="text-xs ml-14 mt-0 text-rose-500">
                {passwordValidationText}
              </span>
            </div>
            <div className="mt-2 w-screen">
              <div className="mx-12 pl-1 pb-2 text-right">
                <a href="ForgotPassword" className="underline font-bold">
                  Passwort vergessen?
                </a>
              </div>
            </div>
          </div>
          <div className="row-span-3 w-screen">
            <div className="mx-12 pl-1 pb-2 text-center text-xs">
              <span>Mit Ihrer Anmeldung erklären Sie sich mit unseren </span>
              <a href="#" className="underline">
                AGB
              </a>
              <span> einverstanden und nehmen die</span>
              <a href="#" className="underline">
                {" "}
                Datenschutzbestimmungen
              </a>
              <span> zur Kenntnis.</span>
            </div>
          </div>
          <div className="row-start-8 row-end-12">
            <div className="w-screen">
              <div className="mx-12 pl-1 pb-2 text-center">
                <div
                  style={styles.mainButton}
                  className={`${
                    disabledButton == true
                      ? "pointer-events-none"
                      : "pointer-events-auto"
                  } text-center select-none row-span-1 w-full h-8 active:opacity-80 rounded-2xl bg-[#C20639] text-white`}
                  onClick={Login}
                >
                  <span className="align-middle">Anmelden</span>
                </div>
              </div>
              {/* aa */}
            </div>
            <div className="w-screen">
              <div className="mx-12 pl-1 pb-2">
                <span className="text-sm ">Noch keinen Account?</span>
                <br />
                <br />
                <a href="Register" className="underline font-bold">
                  Jetzt registrieren!
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;

const styles = {
  mainButton: {
    boxShadow: "0px 3px 3px grey",
  },
};
