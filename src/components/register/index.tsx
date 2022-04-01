import { joiResolver } from "@hookform/resolvers/joi";
import { useForm, SubmitHandler, FormProvider } from "react-hook-form";
import { RegisterInputsProps } from "./Register.props";
import { RegisterSchema } from "../../validators/Register.validator";
import { RegisterInput } from "./RegisterInput";
import { RegisterFooter } from "./registerfooter/RegisterFooter";
import { RegisterValidations } from "./registerfooter/RegisterValidations";
import { useNavigate } from "react-router-dom";

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

  // const {register} = useRegisterMutation();

  const onSubmit = (data: RegisterInputsProps) => {
    alert("Successed");
    console.log(data);
    navigate("../registeredsuccessfully");
    // register({
    //   variables: {...data}
    // })
  };

  /**
   * file -> Authentication.mutation.graphql
   * mutation Register {
   *     register(data: {email: string!, password: string!}) {
   *        token
   *        status
   *     }
   * }
   *
   */

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
              {...register("name")}
              error={errors?.name}
            />
            <RegisterInput
              id="Email"
              {...register("email")}
              error={errors?.email}
            />
            <RegisterInput
              id="Password"
              type="password"
              {...register("password")}
              error={errors?.password}
            />
            <RegisterInput
              id="Repeat Password"
              type="password"
              {...register("repeatPassword")}
              error={errors?.repeatPassword}
            />
          </div>
          <RegisterValidations />
          <RegisterFooter />
        </form>
      </div>
    </div>
  );
};

export default Register;
