import React from "react";

const index = () => {
  return (
    <div className="card bg-[#C20639] w-[360px] pt-6 rounded-t-[25px] text-white">
      <div className="w-[230px] mx-auto">
        <h1 className=" text-[28px] text-center">Registrierung</h1>
        <form action="" className="w-full text-center">
          <input
            className="placeholder:text-white ml-auto mr-auto bg-inherit w-full border-b py-2 focus:outline-none focus:placeholdet-text-black transition-all sm:text-sm mb-[23px]"
            placeholder="Name"
            type="text"
            name="name"
            required
          />
          <input
            className="placeholder:text-white ml-auto mr-auto bg-inherit w-full border-b py-2 focus:outline-none focus:placeholdet-text-black transition-all sm:text-sm mb-[23px]"
            placeholder="E-Mail"
            type="email"
            name="email"
            required
          />
          <input
            className="placeholder:text-white ml-auto mr-auto bg-inherit w-full border-b py-2 focus:outline-none focus:placeholdet-text-black transition-all sm:text-sm mb-[23px]"
            placeholder="Passwort"
            type="password"
            name="password"
            required
          />
          <input
            className="placeholder:text-white ml-auto mr-auto bg-inherit w-full border-b py-2 focus:outline-none focus:placeholdet-text-black transition-all sm:text-sm mb-[24px]"
            placeholder="Passwort wiederholen"
            type="password"
            name="password"
            required
          />
          <div className="errors text-center text-xs mx-auto">
            <ul className="list-disc text-left">
              <li>Mindestens 8 Zeichen</li>
              <li>Mindestens ein Groß- und Kleinbuchstaben</li>
              <li>Mindestens eine Zahl</li>
              <li>Mindestens ein Sonderzeichen</li>
            </ul>
            <p className="text-left my-4">
              Mit Ihrer Anmeldung erklären Sie sich mit unseren AGB
              einverstanden und nehmen die Datenschutzbestimmungen zur Kenntnis.
            </p>
          </div>
          <input
            className="w-full font-medium bg-white rounded-full text-[#7B1025] py-[6px]"
            type="submit"
            name="Registrieren"
          />
        </form>
        <p className="my-4">Du hast bereits einen Account?</p>
        <a className="font-medium mb-4" href="#">
          Jetzt anmelden!
        </a>
      </div>
    </div>
  );
};

export default index;
