
import ByronCard from "../components/ByronCard";
import CallButton from "../components/CallButton";
import axiosHeader from "@/api/axiosHeader";

// INTERFACES
import { IHomepage, Attributes } from "@/interface/IHomepage";
import IOrganizers from "@/interface/IOrganizers";
import ISchedules from "@/interface/ISchedules";
import Programacao from "@/components/Programacao";

interface IProps {
  homepage: Attributes;
  organizers: IOrganizers[];
  schedules: ISchedules[];
}

const APIRequests = async () => {
  try {
    // HOMEPAGE
    const homepageRes = await axiosHeader.get<IHomepage>(
      "pagina-inicial?populate=*"
    );
    const homepage = homepageRes.data.data.attributes;

    // ORGANIZERS
    const organizersRes = await axiosHeader.get<IOrganizers>(
      "organizers?populate=*"
    );
    const organizers = organizersRes.data.data;

    // SCHEDULES
    const schedulesRes = await axiosHeader.get<ISchedules>(
      "programacaos?populate=*"
    );
    const schedules = schedulesRes.data.data;

    return { homepage, organizers, schedules }
  } catch (error) {
    throw error;
  }
};

export default async function Home() {
  const { homepage, organizers, schedules } = await APIRequests()
  return (
    <>
      {/* HERO */}
      <section className="flex items-center justify-center bg-gradient-to-b from-blue-light to-blue-dark text-white py-12">
        <div className="flex items-center max-w-6xl w-full">
          <div className="flex flex-col gap-16 max-w-lg">
            <div className="flex flex-col gap-5">
              <h1 className="text-4xl font-bold drop-shadow">
                {homepage.heroTitle}
              </h1>

              <p>{homepage.heroDescription}</p>
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
      {/* /HERO */}

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
                {homepage.aboutTitle}
              </p>

              <p>{homepage.aboutDescription}</p>
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
                {organizers.map((participant, key) => (
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
      <Programacao />
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
