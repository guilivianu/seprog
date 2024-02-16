import React from "react";

const Footer = () => {
  return (
    <footer className="flex flex-col items-center justify-center bg-blue-dark text-white">
      <div className="flex flex-col items-center justify-between w-full max-w-6xl">
        <div className="flex items-center md:justify-normal md:gap-36 md:w-auto p-4 w-full justify-between">
          <div className="flex flex-col items-center w-52">
            <picture>
              <img src="/img/unifei.png" alt="Logo da UNIFEI" />
            </picture>
            <picture>
              <img src="/img/imc.png" alt="Logo do IMC" />
            </picture>
          </div>

          <div className="flex flex-col items-center">
            <picture>
              <img src="/img/logo_seprog.png" alt="Logo da SEPROG" />
            </picture>

            <picture>
              <img src="/img/TextLogoTitle.png" alt="Escrita SEPROG 2022" />
            </picture>

            <p className="text-xs font-thin mt-3">
              Todos os direitos reservados
            </p>
          </div>

          <div className="flex flex-col gap-6">
            <h2 className="text-3xl font-semibold">Organizadores</h2>

            <ul className="flex flex-col">
              <li>byron.solutions</li>
              <li>Black Bee Drones</li>
              <li>Dev-U</li>
              <li>Maratona de Programação</li>
            </ul>
          </div>
        </div>
      </div>
      <div
        className="flex items-center justify-center w-full"
        style={{ boxShadow: "0 -4px 8px rgba(0, 0, 0, 0.10)" }}
      >
        <a href="https://byronsolutions.com/" target="_blank">
          <picture>
            <img src="/img/devbsol.png" alt="Logo da byron.solutions" />
          </picture>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
