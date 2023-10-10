import React, { useState, useEffect } from "react";
import { FiArrowLeft } from "react-icons/fi";
import { FaSpinner } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import Footer from "../../../components/footer";

const Result = () => {
  const [isLoading, setIsLoading] = useState(true);

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
