import React from "react";
import Menu from "../../components/header";
import Footer from "../../components/footer";
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className="w-full h-full flex flex-col">
      <Menu />
      <div className="w-full max-h-full flex flex-col">
        {/* section 1 */}
        <div
          className="w-full max-h-full flex justify-center bg-black m-auto"
          id="início"
        >
          <div className="w-full lg:w-2/3 px-5 py-32 lg:py-0 lg:px-0 flex items-center justify-center">
            <div className="w-full float-left">
              <h2 className="text-white font-bold text-2xl lg:text-4xl">
                Revele a sua beleza natural com a Essenza Beauty
              </h2>
              <p className="text-white text-md mt-4 mb-6">
                Valorizamos a singularidade de cada cliente, permitindo que eles
                criem seu próprio conjunto de cuidados com a pele através de
                questionários personalizados
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
          <div className="w-full max-h-full lg:w-2/3 m-auto px-4 lg:px-0 py-4 flex flex-col">
            <h2 className="text-3xl font-bold mb-4">
              Como a Essenza pode te ajudar?
            </h2>
            <p className="text-md">
              Somos uma empresa altamente especializada na fabricação e
              comercialização de produtos cosméticos farmacêuticos manipuláveis,
              isso inclui tratamentos para condições como rosácea, diferentes
              graus de acne, pele oleosa e seca. <br /> <br /> Valorizamos a
              singularidade de cada cliente, permitindo que eles criem seu
              próprio conjunto de cuidados com a pele através de questionários
              personalizados, garantindo que cada produto seja especialmente
              formulado para atender às suas necessidades específicas.
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

        <div className="w-full lg:w-2/3 self-center my-10 lg:my-20 border border-gray-500/10"></div>

        <div className="w-full max-h-full bg-white m-auto">
          <div className="w-full lg:w-2/3 m-auto px-4 lg:px-0 py-4 flex flex-col">
            <h2 className="text-3xl font-bold mb-4">Missão, visão e valores</h2>
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
                  necessidades únicas e individuais da pele de nossos clientes.
                  Acreditamos que cada pele é única e merece atenção
                  personalizada, por isso, estamos empenhados em oferecer
                  soluções sob medida para garantir que cada cliente alcance sua
                  melhor aparência e saúde da pele.
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
                  explorando novas abordagens, ingredientes e tecnologias para
                  criar produtos que se destaquem pela eficácia, segurança e
                  resultados visíveis.
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
                  Estamos comprometidos em adotar práticas sustentáveis desde a
                  seleção de ingredientes até a embalagem de nossos produtos,
                  garantindo que nossa empresa contribua positivamente para o
                  bem-estar do planeta e das gerações futuras.
                </p>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Home;
