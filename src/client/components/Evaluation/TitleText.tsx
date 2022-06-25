import React from "react";

const TitleText = () => {
  return (
    <div className="h-1/4 p-2  flex flex-col text-xs md:text-sm justify-around mb-3 bg-white ">
      <p className="w-full">
        Jetzt ist für Euch die Zeit in der Jugendwerkstatt bald vorbei. Ziel
        war, dass Ihr mit unserer Hilfe herausfindet, was Ihr machen wollt und
        könnt.{" "}
      </p>{" "}
      <p>
        {" "}
        Damit wir wissen, wie wir unsere Arbeit verbessern können, was Ihr gut
        fandet und was Euch gestört hat oder worüber Ihr Euch geärgert habt,
        bitten wir Euch nun diesen Bogen auszufüllen.
      </p>
      <p>
        Wichtig ist, dass Ihr wirklich ehrlich antwortet, denn nur so können wir
        unsere Arbeit verändern oder verbessern. Diese Bögen sind anonym, das
        heißt, dass Ihr Euren Namen nicht darauf schreiben müsst.
      </p>
    </div>
  );
};

export default TitleText;
