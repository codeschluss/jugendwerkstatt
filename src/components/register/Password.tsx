import React from "react";

const Password = () => {
  return (
    <>
      <div className="relative group rounded-md px-1">
        <input
          type="password"
          id="password"
          name="password"
          required
          className="w-full px-4 text-xl peer p-3 focus:outline-none border-2 rounded-md"
        />
        <label
          htmlFor="password"
          className="transform transition-all text-zinc-400 absolute top-0 left-0 h-full flex items-center pl-4 text-sm group-focus-within:text-xs peer-valid:text-xs group-focus-within:h-1/2 peer-valid:h-1/2 group-focus-within:-translate-y-3 group-focus-within:pl-3 peer-valid:pl-3"
        >
          Passwort
        </label>
      </div>
      <span className="text-xs   mt-0 text-rose-500">
        Dies ist ein Pflichtfeld
      </span>
      <div className="relative group rounded-md px-1">
        <input
          type="password"
          id="password2"
          name="password2"
          required
          className="w-full px-4 text-xl p-3 peer focus:outline-none border-2 rounded-md"
        />
        <label
          htmlFor="password2"
          className="transform transition-all text-zinc-400 absolute top-0 left-0 h-full flex items-center pl-4 text-sm group-focus-within:text-xs peer-valid:text-xs group-focus-within:h-1/2 peer-valid:h-1/2 group-focus-within:-translate-y-3 group-focus-within:pl-3 peer-valid:pl-3"
        >
          Passwort
        </label>
      </div>
      <span className="text-xs   mt-0 text-rose-500">
        Dies ist ein Pflichtfeld
      </span>
    </>
  );
};

export default Password;
