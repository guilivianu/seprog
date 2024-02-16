"use client";

import { Tab } from "@headlessui/react";
import ByronCard from "../components/ByronCard";
import CallButton from "../components/CallButton";

function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}

export default function Home() {
  let participantData = [
    {
      img: {
        src: "/img/imgparticipante.jfif",
        alt: "Logo da byron",
      },
      name: "byron.solutions",
      content: "Conteúdo de CSS, HTML e JS.",
      longContent:
        "A byron.solutions é uma empresa júnior que atua no ramo de consultoria em TI, com soluções em desenvolvimento de sistemas, de sites e inclusão digital de pequenas empresas. É composta por alunos dos cursos de Sistemas da Informação, Ciência da Computação e Engenharia da Computação.",
      social: {
        href: "https://instagram.com/byron.solutions",
        name: "@byron.solutions",
      },
    },
    {
      img: {
        src: "/img/imgparticipante.jfif",
        alt: "Logo da byron",
      },
      name: "byron.solutions",
      content: "Conteúdo de CSS, HTML e JS.",
      longContent:
        "A byron.solutions é uma empresa júnior que atua no ramo de consultoria em TI, com soluções em desenvolvimento de sistemas, de sites e inclusão digital de pequenas empresas. É composta por alunos dos cursos de Sistemas da Informação, Ciência da Computação e Engenharia da Computação.",
      social: {
        href: "https://instagram.com/byron.solutions",
        name: "@byron.solutions",
      },
    },
    {
      img: {
        src: "/img/imgparticipante.jfif",
        alt: "Logo da byron",
      },
      name: "byron.solutions",
      content: "Conteúdo de CSS, HTML e JS.",
      longContent:
        "A byron.solutions é uma empresa júnior que atua no ramo de consultoria em TI, com soluções em desenvolvimento de sistemas, de sites e inclusão digital de pequenas empresas. É composta por alunos dos cursos de Sistemas da Informação, Ciência da Computação e Engenharia da Computação.",
      social: {
        href: "https://instagram.com/byron.solutions",
        name: "@byron.solutions",
      },
    },
    {
      img: {
        src: "/img/imgparticipante.jfif",
        alt: "Logo da byron",
      },
      name: "byron.solutions",
      content: "Conteúdo de CSS, HTML e JS.",
      longContent:
        "A byron.solutions é uma empresa júnior que atua no ramo de consultoria em TI, com soluções em desenvolvimento de sistemas, de sites e inclusão digital de pequenas empresas. É composta por alunos dos cursos de Sistemas da Informação, Ciência da Computação e Engenharia da Computação.",
      social: {
        href: "https://instagram.com/byron.solutions",
        name: "@byron.solutions",
      },
    },
  ];

  let tabsData = [
    {
      id: 1,
      tab: {
        day: "Segunda-feira (19/09)",
        person: "byron.solutions",
        description: "Desenvolvimento de um portifólio pessoal 1",
      },
      content: {
        title: "Desenvolvimento de um portifólio pessoal 1",
        text: "Teoria: O mini-curso terá como objetivo o ensinamento do ciclo básico do desenvolvimento web, contemplando HTML, CSS e JS.",
      },
    },
    {
      id: 2,
      tab: {
        day: "Quarta-feira (21/09)",
        person: "byron.solutions",
        description: "Desenvolvimento de um portifólio pessoal 2 ",
      },
      content: {
        title: "Desenvolvimento de um portifólio pessoal 2",
        text: "Teoria: O mini-curso terá como objetivo o ensinamento do ciclo básico do desenvolvimento web, contemplando HTML, CSS e JS.",
      },
    },
    {
      id: 3,
      tab: {
        day: "Quinta-feira (22/09)",
        person: "byron.solutions",
        description: "Desenvolvimento de um portifólio pessoal 3",
      },
      content: {
        title: "Desenvolvimento de um portifólio pessoal 3",
        text: "Teoria: O mini-curso terá como objetivo o ensinamento do ciclo básico do desenvolvimento web, contemplando HTML, CSS e JS.",
      },
    },
    {
      id: 4,
      tab: {
        day: "Sexta-feira (23/09)",
        person: "byron.solutions",
        description: "Desenvolvimento de um portifólio pessoal 4",
      },
      content: {
        title: "Desenvolvimento de um portifólio pessoal 4",
        text: "Teoria: O mini-curso terá como objetivo o ensinamento do ciclo básico do desenvolvimento web, contemplando HTML, CSS e JS.",
      },
    },
  ];

  return (
    <>
      {/* HEADER */}
      <section className="flex items-center justify-center bg-gradient-to-b from-blue-light to-blue-dark text-white py-12">
        <div className="flex items-center max-w-6xl w-full">
          <div className="flex flex-col gap-16 max-w-lg">
            <div className="flex flex-col gap-5">
              <h1 className="text-4xl font-bold drop-shadow">
                II Semana de Programação
              </h1>

              <p>
                Atualize-se com a evolução da tecnologia! Será uma semana de
                aprendizados em desenvolvimento web, visão computacional,
                programação em jogos e maratona de programação!
              </p>
            </div>

            <CallButton start />
          </div>

          <picture>
            <img
              className="w-[72rem]"
              src="/img/BlockGroups.png"
              alt="Blocos empilhados com o escrito 'De 19 a 23 de setembro!' por cima"
            />
          </picture>
        </div>
      </section>
      {/* /HEADER */}

      {/* SOBRE */}
      <section
        id="sobre"
        className="flex items-center justify-center bg-blue-dark text-white py-12"
      >
        <div className="flex flex-col items-center max-w-6xl w-full py-8">
          {/* SUB-SESSÃO 1 */}
          <div className="flex items-center gap-24">
            <picture>
              <img
                className="w-[120rem]"
                src="/img/apresentacao.png"
                alt="Imagem de várias pessoas em uma sala de aula, tomando notas, com o professor a frente"
              />
            </picture>

            <div className="flex flex-col gap-5">
              <span className="bg-white rounded-full w-20 h-0.5"></span>

              <h2 className="text-xl font-bold">Sobre a SEPROG</h2>

              <p className=" text-4xl font-bold drop-shadow">
                Faça parte dessa evolução
              </p>

              <p>
                Com sua primeira edição em 2021 no formato EAD, a Semana de
                Programação vem se tornando um grande evento realizado pelo
                Instituto de Matemática e Computação da UNIFEI, com o objetivo
                de mostrar e ensinar conteúdos incríveis, muito fortes no ramo
                profissional, de uma forma prática, para todos os alunos na
                universidade.
              </p>
            </div>
          </div>
          {/* /SUB-SESSÃO 1 */}

          {/* SUB-SESSÃO 2 - Organizadores */}
          <div
            id="organizadores"
            className="flex flex-col items-center gap-24 py-32"
          >
            <div className="flex flex-col items-center gap-16">
              <h2 className="text-4xl font-bold">Aprenda com os melhores</h2>

              <div className="grid grid-cols-2 grid-rows-2 gap-10">
                {participantData.map((participant, key) => (
                  <ByronCard key={key} data={participant} />
                ))}
              </div>
            </div>

            <CallButton />
          </div>
          {/* /SUB-SESSÃO 2 */}
        </div>
      </section>
      {/* /SOBRE */}

      {/* PROGRAMAÇÃO */}
      <section
        id="programacao"
        className="flex items-center justify-center bg-gradient-to-b from-blue-dark to-blue-light text-white py-12 pb-36"
      >
        <div className="flex flex-col items-center max-w-6xl w-full">
          <Tab.Group>
            <div className="flex items-center rounded-3xl bg-gray shadow">
              <Tab.List as="ul" className="flex flex-col items-start">
                {tabsData.map((tab, index) => (
                  <Tab
                    as="li"
                    key={index}
                    className={({ selected }) =>
                      classNames(
                        "bg-blue-dark rounded-r-2xl first:rounded-tl-2xl first:rounded-tr-none last:rounded-bl-2xl last:rounded-br-none shadow-lg w-80",
                        selected
                          ? "bg-blue-light w-[360px] z-10 first:mt-0 my-2 last:mb-0"
                          : ""
                      )
                    }
                    // className="bg-blue-dark rounded-r-2xl first:rounded-tl-2xl first:rounded-tr-none last:rounded-bl-2xl last:rounded-br-none shadow"
                  >
                    <button className="flex flex-col items-start gap-2 text-xl px-6 py-3 text-left">
                      <h3 className="text-2xl font-bold">{tab.tab.day}</h3>
                      <span>{tab.tab.person}</span>
                      <p className=" font-bold">{tab.tab.description}</p>
                    </button>
                  </Tab>
                ))}
              </Tab.List>

              <Tab.Panels>
                {tabsData.map((tab, index) => (
                  <Tab.Panel
                    key={index}
                    className=" bg-blue-light m-16 p-6 rounded-3xl"
                  >
                    <h2>{tab.content.title}</h2>

                    <p>{tab.content.text}</p>
                  </Tab.Panel>
                ))}
              </Tab.Panels>
            </div>
          </Tab.Group>
        </div>
      </section>
      {/* /PROGRAMAÇÃO */}

      {/* MAPS */}
      <section className="flex items-center justify-center bg-gradient-to-b from-blue-light to-blue-dark text-white py-16">
        <div className="flex flex-col items-center max-w-6xl w-full gap-8">
          <h2 className="text-4xl font-bold drop-shadow">
            Localização do evento
          </h2>

          <div className="w-full">
            <iframe
              className="w-full rounded-[48px] border-4 border-yellow shadow"
              width="100%"
              height="600"
              src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=-22.4129731,%20-45.44891969710001+(UNIFEI)&amp;t=&amp;z=16&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
            ></iframe>
          </div>

          <img className="w-20" src="/img/mapa.png" alt="Ícone de um mapa" />

          <span className="text-4xl font-bold">SEPROG</span>

          <div className="flex flex-col items-center text-xl">
            <span className="text-2xl font-bold">
              Instituto de Matemática e Computação - UNIFEI
            </span>
            <span>Avenida BPS, 1303 - Pinheirinho</span>
            <span>Itajubá - MG</span>
          </div>
        </div>
      </section>
      {/* /MAPS */}
    </>
  );
}
