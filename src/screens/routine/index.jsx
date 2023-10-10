import React, { useState } from "react";
import Menu from "../../components/header";
import Footer from "../../components/footer";

const Routine = () => {
  const handleClick = (e) => {
    e.preventDefault();
  };

  return (
    <div className="w-full h-full lg:h-screen flex flex-col">
      <Menu />
      <div className="w-full h-full flex flex-col">
        <div className="w-full h-full flex flex-col justify-center lg:px-0 bg-white">
          <div className="w-full max-h-full lg:w-2/3 self-center py-28 px-4">
            <div className="w-full max-h-full flex flex-col mb-6">
              <h2 className="text-3xl font-normal mb-2 text-black">
                O que mais te incomoda?
              </h2>
              <span>Selecione pelo menos uma das opções para continuar.</span>
            </div>
            <form className="w-full max-h-full grid grid-cols-2 lg:grid-cols-4 gap-4">
              <button
                onClick={handleClick}
                className="p-3 rounded-sm border text-black font-bold border-black bg-black/10"
              >
                Cravos | Espinhas
              </button>
              <button
                onClick={handleClick}
                className="p-3 rounded-sm border text-black font-bold border-black bg-black/10"
              >
                Manchas | Melasma
              </button>
              <button
                onClick={handleClick}
                className="p-3 rounded-sm border text-black font-bold border-black bg-black/10"
              >
                Rugas | Linhas finas
              </button>
              <button
                onClick={handleClick}
                className="p-3 rounded-sm border text-black font-bold border-black bg-black/10"
              >
                Flacidez
              </button>
              <button
                onClick={handleClick}
                className="p-3 rounded-sm border text-black font-bold border-black bg-black/10"
              >
                Textura irregular
              </button>
              <button
                onClick={handleClick}
                className="p-3 rounded-sm border text-black font-bold border-black bg-black/10"
              >
                Poros dilatados
              </button>
              <button
                onClick={handleClick}
                className="p-3 rounded-sm border text-black font-bold border-black bg-black/10"
              >
                Falta de viço
              </button>
            </form>
            <button
              onClick={handleClick}
              className="w-full lg:w-1/6 mt-10 p-3 rounded-sm border border-black text-white font-bold bg-black"
            >
              Continuar
            </button>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Routine;
