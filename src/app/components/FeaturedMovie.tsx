import { Clock, Star } from "lucide-react";

export default function FeaturedMovie() {
    return (
        <section className="relative  h-[60vh] md:h-[75vh] bg-cover bg-center py-12 px-6 sm:px-10 md:px-[64px] xl:ml-[288px]">

            <div className="max-w-2xl">
                <div className="inline-block bg-[#181818] text-[#FFA634] text-xs md:mb-1 font-semibold px-2 py-1 rounded-tr-md rounded-bl-md">
                    Ação/Aventura
                </div>



                <div className="md:text-[16px] sm:mb-[25px] sm:mt-[18px] flex mt-6 mb-12 items-center gap-4 sm:gap-6 text-[14px]">
                    {/* Estrelas */}
                    <div className="flex items-center gap-[8px] text-[#FFA634]">
                        {Array(5).fill(0).map((_, i) => (
                            <Star key={i} className="w-5 h-5 sm:w-4 sm:h-4 cursor-default" fill="#FFA634" stroke="none" />
                        ))}
                    </div>

                    {/* Duração */}
                    <div className="flex items-center gap-1 text-white">
                        <Clock className="w-4 h-4" />
                        <span className="cursor-default">1h 57m</span>
                    </div>
                </div>

                <h1 className="text-[32px] sm:text-[40px] md:text-[48px] lg:text-[56px] font-semibold leading-[100%] mb-4">
                    Batman
                </h1>

                <p className="text-[16px] sm:text-[18px] md:text-[20px] sm:mb-7 md:mb-8 w-full font-semibold max-w-[312px] lg:max-w-[592px]">
                    Gotham City enfrenta uma nova ameaça, e Bruce Wayne  assume o papel do Cavaleiro das Trevas para deter uma organização criminosa. Em meio a seus próprios demônios internos, Wayne luta para salvar a cidade da iminente escuridão eterna.
                </p>

                <button className="bg-[#FFA634] w-full max-w-[312px] lg:max-w-[216px] text-black font-semibold px-5 py-2 rounded mt-4 hover:bg-[#ffb84c] transition-colors">
                    Assistir agora
                </button>



            </div>
        </section>
    );
}
