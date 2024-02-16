import React from "react";

interface IProps {
  imgUrl: string;
  name: string;
  content: string;
}

const ByronCard = ({ imgUrl, name, content }: IProps) => {
  return (
    <div className="p-3 bg-blue-light rounded-2xl shadow hover:scale-[1.01] transition-all">
      <div className="flex items-center p-4 gap-9 bg-white rounded-2xl">
        <picture>
          <img
            className=" w-16 border-2 border-blue-light rounded-xl"
            src={imgUrl}
            alt="Logo da byron.solutions"
          />
        </picture>

        <div className="flex flex-col items-startdiv text-black">
          <span className="font-bold">{name}</span>
          <span>{content}</span>
        </div>

        <button className="flex items-center justify-center w-12 h-12 border-4 border-yellow rounded-full hover:scale-105 transition-all">
          <img
            className="w-6"
            src="/img/arrow.svg"
            alt="seta amarela apontando para a direita"
          />
        </button>
      </div>
    </div>
  );
};

export default ByronCard;
