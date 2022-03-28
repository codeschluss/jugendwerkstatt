import React from "react";
import logo from "./background.png";
import Email from "./Email";
import Name from "./Name";
import Password from "./Password";
import { useForm, SubmitHandler } from "react-hook-form";

const Register = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<any>();

  const submit = (data: any) => console.log(data.name);
  return (
    <div className="px-0 flex flex-col w-screen h-screen">
      <div className="px-0 sticky top-14 h-100">
        <img className="h-full w-screen object-cover" src={logo} alt={"logo"} />
      </div>
      <div className="flex justify-center relative flex-grow w-screen -mt-6 rounded-3xl bg-white">
        <form onSubmit={handleSubmit(submit)} className="w-screen">
          <div className="grid grid-rows-12">
            <div className="row-span-5">
              <div className="text-3xl text-center mt-5">Registrierung</div>
              <div className="mt-4 w-screen">
                <div className="p-10 pb-0">
                  <Name register={register} />
                  <Email />
                  <Password />
                </div>
              </div>
            </div>
            <div className="w-screen  text-xs my-6">
              <ul className="list-disc w-60 mx-auto">
                <li>Mindestens 8 Zeichen</li>
                <li>Mindestens ein Groß- und Kleinbuchstaben</li>
                <li>Mindestens eine Zahl</li>
                <li>Mindestens ein Sonderzeichen</li>
              </ul>
            </div>
            <div className="row-start-8 row-end-12">
              <div className="w-screen">
                <div className="mx-12 pl-1 pb-2 text-center">
                  <button
                    type="submit"
                    className="w-full h-8 rounded-2xl active:opacity-80 bg-[#C20639] text-white"
                  >
                    Registrieren
                  </button>
                </div>
              </div>
              <div className="w-screen">
                <div className="mx-12 pl-1 pb-2">
                  <span className="text-sm ">
                    Du hast bereits einen Account?
                  </span>
                  <br />
                  <br />
                  <a href="#" className="underline font-bold">
                    Jetzt anmelden!
                  </a>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
