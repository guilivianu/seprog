"use client";
import { Dialog, Transition } from "@headlessui/react";
import React, { useState } from "react";

interface IProps {
  data: {
    img: { src: string; alt: string };
    name: string;
    content: string;
    longContent: string;
    social: {
      href: string;
      name: string;
    };
  };
}

const ByronCard = ({ data }: IProps) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div className="p-3 bg-blue-light rounded-2xl shadow hover:scale-[1.01] transition-all">
        <div className="flex items-center p-4 gap-9 bg-white rounded-2xl">
          <picture>
            <img
              className=" w-16 border-2 border-blue-light rounded-xl"
              src={data.img.src}
              alt={data.img.alt}
            />
          </picture>

          <div className="flex flex-col items-startdiv text-black">
            <span className="font-bold">{data.name}</span>
            <span>{data.content}</span>
          </div>

          <button
            onClick={() => setIsOpen(true)}
            className="hover:scale-105 focus:scale-105 focus:outline-none transition-all"
          >
            <picture className="flex items-center justify-center w-12 h-12 border-4 border-yellow rounded-full">
              <img
                className="w-6 -rotate-90"
                src="/img/setaDireita.svg"
                alt="seta amarela apontando para a direita"
              />
            </picture>
          </button>
        </div>
      </div>

      <Dialog
        open={isOpen}
        onClose={() => setIsOpen(false)}
        className="relative z-10"
      >
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur"
          aria-hidden="true"
        />
        <div className="fixed inset-0 flex items-center justify-center">
          <Dialog.Panel className="p-3 bg-blue-light rounded-2xl max-w-lg">
            <div className="flex flex-col p-4 gap-9 bg-white rounded-2xl">
              <div className="flex items-center justify-between">
                <picture>
                  <img
                    className=" w-16 border-2 border-blue-light rounded-xl"
                    src={data.img.src}
                    alt={data.img.alt}
                  />
                </picture>
                <span className="font-bold text-4xl">{data.name}</span>
                <button
                  onClick={() => setIsOpen(false)}
                  className="hover:scale-105 focus:scale-105 focus:outline-none transition-all"
                >
                  <picture className="flex items-center justify-center w-12 h-12 border-4 border-yellow rounded-full">
                    <img
                      className="w-6 rotate-90"
                      src="/img/setaDireita.svg"
                      alt="seta amarela apontando para a direita"
                    />
                  </picture>
                </button>
              </div>

              <p className="">{data.content}</p>

              <p className="text-lg">{data.longContent}</p>

              <a
                className=" self-center text-2xl font-bold hover:underline"
                href={data.social.href}
              >
                {data.social.name}
              </a>
            </div>
          </Dialog.Panel>
        </div>
      </Dialog>
    </>
  );
};

export default ByronCard;
