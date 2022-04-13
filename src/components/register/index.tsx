import { joiResolver } from "@hookform/resolvers/joi";
import { useForm, SubmitHandler, FormProvider } from "react-hook-form";
import { RegisterInputsProps } from "./Register.props";
import { RegisterSchema } from "../../validators/Register.validator";
import { RegisterInput } from "./RegisterInput";
import { RegisterFooter } from "./registerfooter/RegisterFooter";
import { RegisterValidations } from "./registerfooter/RegisterValidations";
import { useNavigate } from "react-router-dom";
import { useSaveUserMutation } from "../../graphql/gen/graphql";
import { useState } from "react";
const Register = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterInputsProps>({
    reValidateMode: "onChange",
    resolver: joiResolver(RegisterSchema),
  });

  const [saveUser] = useSaveUserMutation({
    onCompleted: () => navigate("../registeredsuccessfully"),
  });

  const onSubmit = (data: RegisterInputsProps) => {
    saveUser({
      variables: { ...data },
    });
  };

  const [password, setPassword] = useState<string>("");
  const [passwordBits, setPasswordBits] = useState<number | undefined>();

  function passwordStrength(event: any) {
    console.log(event);
    setPassword(event.target.value);
    const passwordLength = password.length;
    let possibleSymbols = 0;

    if (password.match(/\d/)) {
      possibleSymbols = 10;
      console.log("numrat");
    }
    if (password.match(/[a-z]/)) {
      possibleSymbols += 26;
      console.log("a-z");
    }
    if (password.match(/[A-Z]/)) {
      possibleSymbols += 26;
      console.log("A-Z");
    }
    if (password.match(/[!@#$%^&*()_+\-=\[\]{};~':"\\|,.<>\/?]/)) {
      possibleSymbols += 32;
      console.log("char");
    }
    console.log(possibleSymbols);
    console.log(passwordLength);
    const argument = Math.pow(possibleSymbols, passwordLength);
    console.log(argument);

    setPasswordBits(Math.log2(argument));

    console.log(passwordBits);
  }

  return (
    <div className="px-0 flex flex-col w-screen h-screen">
      <div className="px-0 sticky top-14 h-100">
        <img
          className="h-full w-screen object-cover"
          src="/assets/background.png"
          alt={"logo"}
        />
      </div>
      <div className="flex justify-center relative flex-grow w-screen -mt-6 rounded-3xl bg-white">
        <form onSubmit={handleSubmit(onSubmit)} className="w-screen">
          <div className="text-3xl text-center mt-5">Registrierung</div>
          <div className="p-10 pb-0">
            <RegisterInput
              id="Name"
              {...register("fullname")}
              error={errors?.fullname}
            />
            <RegisterInput
              id="Email"
              {...register("loginName")}
              error={errors?.loginName}
            />
            <RegisterInput
              onChange={passwordStrength}
              id="Password"
              type="password"
              //tani
              errori={passwordBits && passwordBits <= 20 ? true : false}
            />
            <RegisterInput
              id="Repeat-Password"
              type="password"
              {...register("repeatPassword")}
              error={errors?.repeatPassword}
            />
            <RegisterValidations />
          </div>
          <RegisterFooter />
        </form>
      </div>
    </div>
  );
};

export default Register;
