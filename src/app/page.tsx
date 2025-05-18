import Header from "./components/Header";
import ProfileCard from "./components/ProfileCard";

const profiles = [
  { name: "Matheus Ramos", imageUrl: "/avatars/matheus.png" },
  { name: "Vitória Luz", imageUrl: "/avatars/vitoria.png" },
  { name: "Vinicius Eiji", imageUrl: "/avatars/vinicius.png" },
];

export default function ProfileSelection() {
  const now = new Date().toLocaleTimeString("pt-BR", {
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <main className=" text-white  py-8 md:py-[31.5px] flex flex-col">
      <Header showClock />


      <div className="flex flex-1 flex-col items-center justify-center">
        <div className="text-center">
          <h1 className="text-white text-[32px] sm:text-[48px] md:text-[64px] leading-[100%] font-light mb-4 sm:mb-6 md:mb-[24px]">
            Bem-vindo de volta ao Kenai
          </h1>

          <p className="text-white text-[20px] sm:text-[28px] md:text-[40px] leading-[100%] font-light mb-16 sm:mb-24 md:mb-[176px]">
            Quem está usando?
          </p>
        </div>

        <div className="flex flex-wrap gap-6 sm:gap-10 md:gap-[112px] justify-center mb-16 md:mb-[176px]">
          {profiles.map((profile) => (
            <ProfileCard key={profile.name} {...profile} />
          ))}
        </div>

        <button className="bg-[#181818] text-white text-[16px] sm:text-[18px] md:text-[20px] font-normal px-6 sm:px-8 md:px-[40px] py-3 sm:py-4 md:py-[16px] rounded hover:opacity-90 transition mb-10 md:mb-[44.5px]">
          Adicionar perfil
        </button>
      </div>
    </main>
  );
}
