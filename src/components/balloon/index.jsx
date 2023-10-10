import React from "react";
import { PiWhatsappLogo } from "react-icons/Pi";

const Balloon = () => {
  return (
    <>
      <div className="w-[180px] max-h-full p-3 rounded-full bg-gold shadow-md fixed bottom-0 my-10 mx-4 hidden md:block self-end cursor-pointer hover:opacity-90 duration-200">
        <span className="text-white text-sm flex items-center justify-center">
          Fale com a gente <PiWhatsappLogo className="ml-2 text-lg" />
        </span>
      </div>
      <div className="w-10 h-10 flex justify-center items-center rounded-full bg-gold shadow-md fixed bottom-0 my-10 mx-4 md:hidden self-end cursor-pointer">
        <PiWhatsappLogo className="text-2xl text-white" />
      </div>
    </>
  );
};

export default Balloon;
