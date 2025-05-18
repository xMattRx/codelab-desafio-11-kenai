import FeaturedMovie from "@/app/components/FeaturedMovie";
import Header from "@/app/components/Header";
import MovieList from "@/app/components/MovieList";

export default function HomePage() {
  return (
    <div
      className="relative  bg-cover bg-center bg-no-repeat text-white"
      style={{ backgroundImage: "url('/movies/batman-bg.png')" }}
    >
      {/* Gradiente por cima do fundo — visível até lg (mobile e tablet) */}
      <div className="absolute inset-0 z-10 pointer-events-none block lg:hidden bg-gradient-to-b from-black via-black/80 to-black/40" />



      {/* Conteúdo principal */}
      <main className="relative z-20 px-6 sm:px-10 md:px-[64px] max-w-[1920px] mx-auto">
        <Header showNav />
        <FeaturedMovie />
        <MovieList />
      </main>
    </div>
  );
}

