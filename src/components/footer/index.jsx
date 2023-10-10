import React from "react";
import { Link } from "react-router-dom";
import { FiInstagram, FiLinkedin, FiYoutube } from "react-icons/Fi";

const Footer = () => {
  return (
    <div className="w-full max-h-full flex flex-col justify-center px-4 bg-black py-10">
      <div className="w-full lg:w-2/3 self-center grid grid-cols-1 lg:flex space-y-10 lg:space-y-0 lg:space-x-10">
        <div>
          <h2 className="text-white text-3xl lg:text-4xl">
            Vamos conversar mais? Conteúdo exclusivo no seu e-mail
          </h2>
        </div>
        <div className="w-full lg:w-1/2 max-h-full">
          <form className="w-full max-h-full flex flex-col">
            <div className="w-full max-h-full flex flex-col">
              <label className="text-white text-sm">Seu nome completo</label>
              <input
                type="text"
                className="py-2 bg-transparent mt-2 border-b mb-4 outline-none text-white text-sm font-bold placeholder:font-bold text-md"
                placeholder="Digite seu nome"
              />
            </div>
            <div className="w-full max-h-full flex flex-col">
              <label className="text-white text-sm">Seu melhor e-mail</label>
              <input
                type="text"
                className="py-2 bg-transparent mt-2 border-b mb-4 outline-none text-white text-sm font-bold placeholder:font-bold text-md"
                placeholder="Digite seu e-mail"
              />
            </div>
            <button className="bg-gold w-1/2 p-2 rounded-sm text-white hover:opacity-90 duration-200">
              Assinar newsletter
            </button>
            <span className="text-white mt-6 text-xs">
              Ao clicar em ”assinar newsletter” você aceita receber as
              comunicações por e-mail de acordo com a{" "}
              <strong className="text-amber-400">
                <Link className="hover:opacity-90">
                  política de privacidade
                </Link>
              </strong>
              .
            </span>
          </form>
        </div>
      </div>
      <div className="border w-full lg:w-2/3 border-white/10 self-center my-14"></div>
      <div className="w-full lg:w-2/3 self-center flex">
        <div className="w-full max-h-full grid grid-cols-1 lg:grid-cols-3 space-y-10 lg:space-y-0">
          <div className="w-full max-h-full flex flex-col">
            <div>
              <Link to="#">
                <img src="/ESSENZA.svg" alt="essenza logo" className="w-26" />
              </Link>
            </div>
            <div className="mt-14">
              <ul className="flex items-center space-x-6">
                <li>
                  <Link to="#">
                    <FiInstagram className="text-xl text-white hover:opacity-90 duration-200" />
                  </Link>
                </li>
                <li>
                  <Link to="#">
                    <FiLinkedin className="text-xl text-white hover:opacity-90 duration-200" />
                  </Link>
                </li>
                <li>
                  <Link to="#">
                    <FiYoutube className="text-xl text-white hover:opacity-90 duration-200" />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="w-full max-h-full flex flex-col">
            <ul className="flex flex-col space-y-2">
              <li>
                <Link
                  to="#"
                  className="text-white text-sm hover:opacity-90 duration-200"
                >
                  Fale conosco
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className="text-white text-sm hover:opacity-90 duration-200"
                >
                  Sobre a Essenza
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className="text-white text-sm hover:opacity-90 duration-200"
                >
                  Política de privacidade
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className="text-white text-sm hover:opacity-90 duration-200"
                >
                  Termos de uso
                </Link>
              </li>
            </ul>
          </div>
          <div className="w-full max-h-full flex flex-col">
            <span className="text-white text-sm">
              Todos os direitos reservados ©2023 Essenza Beauty
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
