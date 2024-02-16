"use client";

import { Tab } from "@headlessui/react";
import ByronCard from "../components/ByronCard";
import CallButton from "../components/CallButton";

export default function Home() {
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
                Se atualize com a evolução da tecnologia! Será uma semana de
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
      <section className="flex items-center justify-center bg-blue-dark text-white py-12">
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

          {/* SUB-SESSÃO 2 */}
          <div className="flex flex-col items-center gap-24 py-32">
            <div className="flex flex-col items-center gap-16">
              <h2 className="text-4xl font-bold">Aprenda com os melhores</h2>

              <div className="grid grid-cols-2 grid-rows-2 gap-10">
                <ByronCard
                  imgUrl="/img/imgparticipante.jfif"
                  name="byron.solutions"
                  content="Conteúdo de CSS, HTML e JS."
                />
                <ByronCard
                  imgUrl="/img/imgparticipante.jfif"
                  name="byron.solutions"
                  content="Conteúdo de CSS, HTML e JS."
                />
                <ByronCard
                  imgUrl="/img/imgparticipante.jfif"
                  name="byron.solutions"
                  content="Conteúdo de CSS, HTML e JS."
                />
                <ByronCard
                  imgUrl="/img/imgparticipante.jfif"
                  name="byron.solutions"
                  content="Conteúdo de CSS, HTML e JS."
                />
              </div>
            </div>

            <CallButton />
          </div>
          {/* /SUB-SESSÃO 2 */}
        </div>
      </section>
      {/* /SOBRE */}

      {/*  */}
      <section className="flex items-center justify-center bg-gradient-to-b from-blue-dark to-blue-light text-white py-36">
        <div className="flex flex-col items-center max-w-6xl w-full">
          <Tab.Group>
            <div className="flex items-center rounded-3xl bg-gray shadow">
              <Tab.List className="flex flex-col items-start">
                <Tab className="">
                  <button className="flex flex-col items-start gap-2 text-xl px-6 py-3 text-left bg-blue-dark rounded-br-2xl rounded-tl-2xl last:rounded-bl-2xl last:rounded-br-none shadow">
                    <h3 className="text-2xl font-bold">Segunda-feira</h3>
                    <span>byron.solutions</span>
                    <p className=" font-bold">
                      Desenvolvimento de um portifólio pessoal
                    </p>
                  </button>
                </Tab>

                <Tab className="">
                  <button className="flex flex-col items-start gap-2 text-xl px-6 py-3 text-left bg-blue-dark rounded-r-2xl last:rounded-bl-2xl last:rounded-br-none shadow">
                    <h3 className="text-2xl font-bold">Segunda-feira</h3>
                    <span>byron.solutions</span>
                    <p className=" font-bold">
                      Desenvolvimento de um portifólio pessoal
                    </p>
                  </button>
                </Tab>

                <Tab className="">
                  <button className="flex flex-col items-start gap-2 text-xl px-6 py-3 text-left bg-blue-dark rounded-r-2xl last:rounded-bl-2xl last:rounded-br-none shadow">
                    <h3 className="text-2xl font-bold">Segunda-feira</h3>
                    <span>byron.solutions</span>
                    <p className=" font-bold">
                      Desenvolvimento de um portifólio pessoal
                    </p>
                  </button>
                </Tab>
              </Tab.List>

              <Tab.Panels>
                <Tab.Panel className=" bg-blue-light m-16 p-6 rounded-3xl">
                  Painel 2
                </Tab.Panel>

                <Tab.Panel className=" bg-blue-light m-16 p-6 rounded-3xl">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
                  et temporibus totam laborum cupiditate voluptatem saepe,
                  dolorem beatae! Eligendi, temporibus excepturi omnis molestias
                  reiciendis sequi tempora assumenda repellat, inventore aliquam
                  placeat laborum ipsam non! Adipisci eos soluta vel distinctio
                  quae cumque fuga aperiam labore. Maxime consectetur
                  consequatur corporis magni fugit temporibus saepe in facere
                  laborum aspernatur aliquam at, aliquid ducimus minima, eius
                  labore omnis rem! Saepe optio aliquam earum alias quidem neque
                  consectetur aspernatur tempora minima ipsa? Ex voluptate
                  fugiat quisquam blanditiis laboriosam quibusdam illum, officia
                  asperiores explicabo, dignissimos maxime voluptatibus culpa
                  error. Distinctio aperiam, ipsum aliquid magni quibusdam
                  minima.
                </Tab.Panel>

                <Tab.Panel className=" bg-blue-light m-16 p-6 rounded-3xl">
                  Batata
                </Tab.Panel>
              </Tab.Panels>
            </div>
          </Tab.Group>
        </div>
      </section>
      {/* / */}
    </>
  );
}
