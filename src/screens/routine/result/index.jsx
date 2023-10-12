import React, { useState, useEffect } from "react";
import { FiArrowLeft } from "react-icons/fi";
import { FaSpinner, FaCheckCircle } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import Footer from "../../../components/footer";

const Result = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="w-full h-full lg:h-screen flex flex-col">
      {isLoading ? (
        <div className="w-full h-screen flex items-center justify-center">
          <FaSpinner className="animate-spin text-4xl text-amber-500" />
        </div>
      ) : (
        <div className="w-full h-full flex flex-col">
          <div className="w-full h-full flex flex-col justify-center lg:px-0 bg-white">
            <div className="w-full max-h-full lg:w-2/3 self-center py-10 lg:py-28 px-4">
              <Link
                to="/"
                className="lg:w-1/6 mb-10 lg:mb-20 flex items-center space-x-2 hover:opacity-90 duration-200"
              >
                <FiArrowLeft className="mr-4 text-xl" />
                Voltar ao início
              </Link>
              <div className="w-full max-h-full flex flex-col mb-6">
                <h2 className="text-3xl font-normal mb-2 text-black">
                  Conheça os produtos da sua rotina
                </h2>
                <div className="w-full max-h-full grid grid-cols-1 lg:grid-cols-2 gap-10">
                  <div className="w-full max-h-full mt-10 flex flex-col bg-white border px-4 py-4 rounded-sm shadow-md">
                    <span className="text-md text-black font-bold">
                      ESSENZA ESSENTIAL FOR YOU
                    </span>
                    <p className="mt-4 text-sm text-black/70">
                      Séruns + Protetor solar: Nosso kit contém os dois séruns,
                      o sérum diurno ajudara na hidratação, nutrição e proteção
                      de agentes poluidores, e o sérum noturno que ajudará no
                      tratamento específico da pele contra as inflamações,
                      manchas e cicatrizes da pele. E o protetor solar que irá
                      auxiliar na proteção contra os raios UVA/UVB com o seu FPS
                      60 e seu PPD 25.
                    </p>
                    <div className="w-full max-h-full flex items-center justify-between mt-4">
                      <button className="bg-gold text-sm text-white w-1/3 p-2 rounded-sm hover:opacity-90 duration-200">
                        Confira
                      </button>
                      <span className="text-md">R$ 89,90</span>
                    </div>
                  </div>
                  <div className="w-full max-h-full mt-10 flex flex-col">
                    <h2 className="text-bold text-xl">
                      SUA ROTINA: <strong>ESSENZA ESSENTIAL FOR YOU</strong>
                    </h2>
                    <p className="text-sm opacity-80 mt-2">
                      Séruns + Protetor solar: Nosso kit contém os dois séruns,
                      o sérum diurno ajudara na hidratação, nutrição e proteção
                      de agentes poluidores, e o sérum noturno que ajudará no
                      tratamento específico da pele contra as inflamações,
                      manchas e cicatrizes da pele.
                    </p>
                    <div className="w-full max-h-full flex items-center space-x-2 mt-6 lg:mt-14">
                      <FaCheckCircle className=" text-green-500 text-sm" />
                      <span className="text-sm text-green-500 font-bold">
                        Em estoque
                      </span>
                    </div>
                    <div className="flex flex-col w-full max-h-full">
                      <div className="mt-4 w-full max-h-full flex items-center space-x-2">
                        <span className="text-sm font-bold text-gray-500/30 line-through">
                          R$119,90
                        </span>
                        <span className="text-lg font-bold">R$89,90</span>
                      </div>
                      <div className="w-full max-h-full">
                        <span className="font-bold">até 6x R$ 14,99 sem juros</span>
                      </div>
                    </div>
                    <button className="w-full p-3 bg-black mt-10 text-white font-bold rounded-sm">Comprar</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Footer />
        </div>
      )}
    </div>
  );
};

export default Result;
