import React from "react";
import logo from './jugendwerkstatt-logo.png'

const index = () => {
  return (
    <div className="px-0 flex flex-col w-screen h-screen">
        <div className="px-0 h-[30%]">
            <img className="h-full w-screen object-cover" src={logo} alt={"logo"}/> 
        </div>
        <div className="flex justify-center flex-grow w-screen -mt-6 rounded-3xl bg-white">
            <div className="grid grid-rows-12">
                <div className="row-span-5">
                    <div className="text-3xl text-center mt-5">
                        Anmelden
                    </div>
                    <div className="mt-4 w-screen">
                        <div className="border-2 rounded-md mx-12 pl-1 pb-2">
                            <label className="text-xs text-zinc-400">
                                E-Mail-Adresse
                            </label><br/>
                            <input type="email" className="text-xl mt-1 w-full focus:outline-none" ></input>
                        </div>
                        <span className="text-xs ml-14 mt-0 text-rose-500">
                            Dies ist ein Pflichtfeld
                        </span>
                        
                    </div>
                    <div className="w-screen">
                        <div className="border-2 rounded-md mx-12 pl-1 pb-2">
                            <label className="text-xs text-zinc-400">
                                Passwort
                            </label><br/>
                            <input type="password" className="text-xl mt-1 w-full focus:outline-none" ></input>
                        </div>
                        <span className="text-xs ml-14 mt-0 text-rose-500">
                            Dies ist ein Pflichtfeld
                        </span>
                    </div>
                    <div className="mt-2 w-screen">
                        <div className="mx-12 pl-1 pb-2 text-right">
                            <a href="#" className="underline font-bold">Passwort vergessen?</a>
                        </div>
                    </div>
                </div>
                <div className="row-span-3 w-screen">
                    <div className="mx-12 pl-1 pb-2 text-center text-xs">
                        <span>Mit Ihrer Anmeldung erklären Sie sich mit unseren </span>
                        <a href="#" className="underline">AGB</a>
                        <span> einverstanden und nehmen die</span>
                        <a href="#" className="underline"> Datenschutzbestimmungen</a>
                        <span> zur Kenntnis.</span>
                    </div>
                </div>
                <div className="row-start-8 row-end-12">
                    <div className="w-screen">
                        <div className="mx-12 pl-1 pb-2 text-center">
                            <button className="w-full h-8 rounded-xl bg-[#C20639] text-white">Anmelden</button>
                        </div>
                    </div>
                    <div className="w-screen">
                        <div className="mx-12 pl-1 pb-2">
                            <span className="text-sm ">
                                Noch keinen Account?
                            </span>
                            <br />
                            <br />
                            <a href="#" className="underline font-bold">
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

export default index;