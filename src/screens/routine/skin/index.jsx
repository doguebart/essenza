import React, { useState, useEffect } from "react";
import { FiArrowLeft } from "react-icons/fi";
import { FaSpinner } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import Footer from "../../../components/footer";

const Skin = () => {
  const [selectedOption, setSelectedOption] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  const handleOptionChange = (option) => {
    setSelectedOption(option);
  };

  const isContinueButtonDisabled = selectedOption === "";

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

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
            <div className="w-full max-h-full lg:w-2/3 self-center py-28 px-4">
              <Link
                to="/routine/eyes"
                className="lg:w-1/6 mb-10 lg:mb-20 flex items-center space-x-2 hover:opacity-90 duration-200"
              >
                <FiArrowLeft className="mr-4 text-xl" />
                Voltar
              </Link>
              <div className="w-full max-h-full flex flex-col mb-6">
                <h2 className="text-3xl font-normal mb-2 text-black">
                  Qual seu tipo de pele?
                </h2>
                <span>Selecione uma das opções para continuar.</span>
              </div>
              <form className="w-full max-h-full grid grid-cols-2 lg:grid-cols-4 gap-4">
                <label className="relative">
                  <input
                    type="radio"
                    name="skinOption"
                    className="absolute opacity-0 h-0 w-0"
                    checked={selectedOption === "Normal"}
                    onChange={() => handleOptionChange("Normal")}
                  />
                  <div
                    className={`text-sm md:text-md p-3 cursor-pointer rounded-sm border text-black text-center font-bold ${
                      selectedOption === "Normal"
                        ? "bg-black text-white"
                        : "border-black bg-black/10"
                    }`}
                  >
                    Normal
                  </div>
                </label>
                <label className="relative">
                  <input
                    type="radio"
                    name="skinOption"
                    className="absolute opacity-0 h-0 w-0"
                    checked={selectedOption === "Oleosa"}
                    onChange={() => handleOptionChange("Oleosa")}
                  />
                  <div
                    className={`text-sm md:text-md p-3 cursor-pointer rounded-sm border text-black text-center font-bold ${
                      selectedOption === "Oleosa"
                        ? "bg-black text-white"
                        : "border-black bg-black/10"
                    }`}
                  >
                    Oleosa
                  </div>
                </label>
                <label className="relative">
                  <input
                    type="radio"
                    name="skinOption"
                    className="absolute opacity-0 h-0 w-0"
                    checked={selectedOption === "Misto"}
                    onChange={() => handleOptionChange("Misto")}
                  />
                  <div
                    className={`text-sm md:text-md p-3 cursor-pointer rounded-sm border text-black text-center font-bold ${
                      selectedOption === "Misto"
                        ? "bg-black text-white"
                        : "border-black bg-black/10"
                    }`}
                  >
                    Misto
                  </div>
                </label>
                <label className="relative">
                  <input
                    type="radio"
                    name="skinOption"
                    className="absolute opacity-0 h-0 w-0"
                    checked={selectedOption === "Seca"}
                    onChange={() => handleOptionChange("Seca")}
                  />
                  <div
                    className={`text-sm md:text-md p-3 cursor-pointer rounded-sm border text-black text-center font-bold ${
                      selectedOption === "Seca"
                        ? "bg-black text-white"
                        : "border-black bg-black/10"
                    }`}
                  >
                    Seca
                  </div>
                </label>
              </form>
              <button
                onClick={() => {
                  if (!isContinueButtonDisabled) {
                    navigate("/routine/result", {
                      state: { selectedOption },
                    });
                  }
                }}
                disabled={isContinueButtonDisabled}
                className={`text-sm lg:text-md mt-10 p-3 rounded-sm border text-white bg-black font-bold ${
                  isContinueButtonDisabled
                    ? "opacity-50 cursor-not-allowed"
                    : ""
                }`}
              >
                Continuar
              </button>
            </div>
          </div>
          <Footer />
        </div>
      )}
    </div>
  );
};

export default Skin;
