import React from "react";
import logo from "./background.png";

const index = () => {
  return (
    <div className="px-0 flex flex-col w-screen h-screen">
      <div className="px-0 h-[30%]">
        <img className="h-full w-screen object-cover" src={logo} alt={"logo"} />
      </div>
      <div className="flex justify-center flex-grow w-screen -mt-6 rounded-3xl bg-white">
        <form className="w-screen">
          <div className="grid grid-rows-12">
            <div className="row-span-5">
              <div className="text-3xl text-center mt-5">Registrierung</div>
              <div className="mt-4 w-screen">
                <div className="border-2 rounded-md mx-12 pl-1 pb-2">
                  <label className="text-xs text-zinc-400">Name</label>
                  <br />
                  <input
                    type="text"
                    className="text-xl mt-1 w-full focus:outline-none"
                  />
                </div>
                <span className="text-xs ml-14 mt-0 text-rose-500">
                  Dies ist ein Pflichtfeld
                </span>
              </div>
              <div className="mt-4 w-screen">
                <div className="border-2 rounded-md mx-12 pl-1 pb-2">
                  <label className="text-xs text-zinc-400">
                    E-mail Adresse
                  </label>
                  <br />
                  <input
                    type="email"
                    className="text-xl mt-1 w-full focus:outline-none"
                  />
                </div>
                <span className="text-xs ml-14 mt-0 text-rose-500">
                  Dies ist ein Pflichtfeld
                </span>
              </div>
              <div className="w-screen">
                <div className="border-2 rounded-md mx-12 pl-1 pb-2">
                  <label className="text-xs text-zinc-400">Passwort</label>
                  <br />
                  <input
                    type="password"
                    className="text-xl mt-1 w-full focus:outline-none"
                  />
                </div>
                <span className="text-xs ml-14 mt-0 text-rose-500">
                  Dies ist ein Pflichtfeld
                </span>
              </div>
              <div className="w-screen">
                <div className="border-2 rounded-md mx-12 pl-1 pb-2">
                  <label className="text-xs text-zinc-400">
                    Passwort wiederholen
                  </label>
                  <br />
                  <input
                    type="password"
                    className="text-xl mt-1 w-full focus:outline-none"
                  />
                </div>
                <span className="text-xs ml-14 mt-0 text-rose-500">
                  Dies ist ein Pflichtfeld
                </span>
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
                  <button className="w-full h-8 rounded-xl bg-[#C20639] text-white">
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

export default index;
