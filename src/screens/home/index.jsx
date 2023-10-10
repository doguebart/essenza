import React, { useState, useEffect } from "react";
import Menu from "../../components/header";
import Footer from "../../components/footer";
import { FaSpinner } from "react-icons/fa";
import { Link } from "react-router-dom";
import Balloon from "../../components/balloon";

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="w-full h-full flex flex-col">
      {isLoading ? (
        <div className="w-full h-screen flex items-center justify-center">
          <FaSpinner className="animate-spin text-4xl text-amber-500" />
        </div>
      ) : (
        <>
          <Menu />
          <div className="w-full max-h-full flex flex-col">
            {/* section 1 */}
            <div
              className="w-full max-h-full flex justify-center bg-black m-auto"
              id="inicio"
            >
              <div className="w-full lg:w-2/3 px-5 py-32 lg:py-0 lg:px-0 flex items-center justify-center">
                <div className="w-full float-left">
                  <h2 className="text-white font-bold text-2xl lg:text-4xl">
                    Revele a sua beleza natural com a Essenza Beauty
                  </h2>
                  <p className="text-white text-md mt-4 mb-6">
                    Valorizamos a singularidade de cada cliente, permitindo que
                    eles criem seu próprio conjunto de cuidados com a pele
                    através de questionários personalizados
                  </p>
                  <Link
                    to="/routine"
                    className="p-3 text-white bg-gold rounded-sm hover:opacity-90"
                  >
                    Criar rotina
                  </Link>
                </div>
                <div className="float-right hidden lg:block">
                  <img
                    src="/skincare.png"
                    alt="skincare picture"
                    className="relative w-[1000px]"
                  />
                </div>
              </div>
            </div>
            {/* section 2 */}
            <div className="w-full max-h-full bg-white m-auto mt-20">
              <div
                className="w-full max-h-full lg:w-2/3 m-auto px-4 lg:px-0 py-4 flex flex-col"
                id="produtos"
              >
                <h2 className="text-3xl font-bold mb-4 mt-20">
                  Nossos produtos
                </h2>
                <p className="text-md">
                  Nossos produtos contêm ingredientes de alta qualidade, como
                  Pantenol, Ácido Hialurônico, Vitamina C e muito mais, para
                  melhorar a saúde e a aparência da sua pele. Cuide da sua pele
                  com confiança, escolhendo a Essenza.
                </p>
                <div className="w-full max-h-full grid grid-cols-1 lg:grid-cols-2 gap-2">
                  <div className="w-full max-h-80 mt-10 flex flex-col bg-white border px-4 py-4 rounded-sm shadow-md">
                    <span className="text-md text-black font-bold">
                      SÉRUM SPEACIAL FOR YOU
                    </span>
                    <p className="mt-4 text-sm text-black/70">
                      Nosso kit contém dois séruns, no qual o sérum diurno
                      ajudara na hidratação, nutrição e proteção de agentes
                      poluidores, e no sérum noturno que ajudará no tratamento
                      específico da pele contra as inflamações, manchas e
                      cicatrizes da pele.
                    </p>
                    <button className="bg-gold text-sm text-white w-1/3 p-2 mt-4 lg:mt-auto rounded-sm hover:opacity-90 duration-200">
                      Confira
                    </button>
                  </div>
                  <div className="w-full max-h-80 mt-10 flex flex-col bg-white border px-4 py-4 rounded-sm shadow-md">
                    <span className="text-md text-black font-bold">
                      ESSENZA SUN FPS 60
                    </span>
                    <p className="mt-4 text-sm text-black/70">
                      Nosso protetor solar oil free e incolor de rápida absorção
                      que proporciona uma pele hidratada e com sensação de pele
                      sequinha, sem aquele aspecto oleoso de protetor solar.
                      Nossa proteção de 60 FPS e PPD 25 que irá ajudar contra os
                      raios UVA/UVB. Fórmula exclusiva prova d’agua e resistente
                      ao suor. Um dos nossos diferenciais será o pump, que irá
                      liberar uma quantidade ideal para que não haja um gasto
                      indesejado.
                    </p>
                    <button className="bg-gold text-sm text-white w-1/3 p-2 mt-4 rounded-sm hover:opacity-90 duration-200">
                      Confira
                    </button>
                  </div>
                </div>
              </div>
            </div>
            {/* section 3 */}
            <div className="w-full max-h-full bg-white m-auto mt-20" id="sobre">
              <div className="w-full max-h-full lg:w-2/3 m-auto px-4 lg:px-0 py-4 flex flex-col">
                <h2 className="text-3xl font-bold mb-4 mt-20">
                  Como a Essenza pode te ajudar?
                </h2>
                <p className="text-md">
                  Somos uma empresa altamente especializada na fabricação e
                  comercialização de produtos cosméticos farmacêuticos
                  manipuláveis, isso inclui tratamentos para condições como
                  rosácea, diferentes graus de acne, pele oleosa e seca. <br />{" "}
                  <br /> Valorizamos a singularidade de cada cliente, permitindo
                  que eles criem seu próprio conjunto de cuidados com a pele
                  através de questionários personalizados, garantindo que cada
                  produto seja especialmente formulado para atender às suas
                  necessidades específicas.
                </p>
                <div className="w-full max-h-full grid grid-cols-1 lg:grid-cols-3 gap-2">
                  <div className="w-full h-80 mt-10">
                    <img
                      src="/oiled.jpg"
                      alt="oiled skin picture"
                      className="min-w-full rounded-sm max-h-full object-cover"
                    />
                  </div>
                  <div className="w-full h-80 mt-10">
                    <img
                      src="/acne.jpg"
                      alt="oiled skin picture"
                      className="min-w-full rounded-sm max-h-full object-cover"
                    />
                  </div>
                  <div className="w-full h-80 mt-10">
                    <img
                      src="/dry.jpg"
                      alt="oiled skin picture"
                      className="min-w-full rounded-sm max-h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>

            <Balloon />
            <div className="w-full max-h-full bg-white m-auto mt-20">
              <div
                className="w-full lg:w-2/3 m-auto px-4 lg:px-0 py-4 flex flex-col"
                id="missao"
              >
                <h2 className="text-3xl font-bold mb-4 mt-20">
                  Missão, visão e valores
                </h2>
                <div className="w-full max-h-full grid grid-cols-1 mb-20 lg:grid-cols-3 gap-10">
                  <div className="w-full max-h-full flex flex-col mt-10">
                    <div className="w-full max-h-full mb-2 lg:mb-10">
                      <img
                        src="/vision.svg"
                        alt="mission picture"
                        className="w-full max-h-full object-cover"
                      />
                    </div>
                    <span className="text-lg font-bold">Nossa missão</span>
                    <p className="mt-2 text-md">
                      Nossa missão é dedicar-nos inteiramente a satisfazer as
                      necessidades únicas e individuais da pele de nossos
                      clientes. Acreditamos que cada pele é única e merece
                      atenção personalizada, por isso, estamos empenhados em
                      oferecer soluções sob medida para garantir que cada
                      cliente alcance sua melhor aparência e saúde da pele.
                    </p>
                  </div>
                  <div className="w-full max-h-full flex flex-col mt-10">
                    <div className="w-full max-h-full mb-2 lg:mb-10">
                      <img
                        src="/mission.svg"
                        alt="mission picture"
                        className="w-full max-h-full object-cover"
                      />
                    </div>
                    <span className="text-lg font-bold">Visão</span>
                    <p className="mt-2 text-md">
                      Nossa visão é ser pioneiros na indústria, constantemente
                      explorando novas abordagens, ingredientes e tecnologias
                      para criar produtos que se destaquem pela eficácia,
                      segurança e resultados visíveis.
                    </p>
                  </div>
                  <div className="w-full max-h-full flex flex-col mt-10">
                    <div className="w-full max-h-full mb-2 lg:mb-10">
                      <img
                        src="/value.svg"
                        alt="mission picture"
                        className="w-full max-h-full object-cover"
                      />
                    </div>

                    <span className="text-lg font-bold">Nossos valores</span>
                    <p className="mt-2 text-md">
                      Estamos comprometidos em adotar práticas sustentáveis
                      desde a seleção de ingredientes até a embalagem de nossos
                      produtos, garantindo que nossa empresa contribua
                      positivamente para o bem-estar do planeta e das gerações
                      futuras.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <Footer />
          </div>
        </>
      )}
    </div>
  );
};

export default Home;
