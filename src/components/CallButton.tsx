import React from "react";

interface IProps {
  start?: boolean;
}

const CallButton = ({ start }: IProps) => {
  return (
    <a
      href="https://google.com"
      target="_blank"
      className=" flex items-center justify-center gap-4 bg-yellow rounded-xl text-xl shadow py-5 px-8 hover:scale-105 transition-all focus:scale-105 focus:outline-none"
      style={{ alignSelf: start ? "start" : "unset" }}
    >
      <img src="/img/clique.png" alt="" />
      Garanta já sua vaga!
    </a>
  );
};

export default CallButton;
