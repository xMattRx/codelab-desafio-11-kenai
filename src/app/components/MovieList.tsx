import MovieCard from "./MovieCard";

const movies = [
  { title: "Shang-Chi", image: "/movies/shang.png" },
  { title: "Wish Dragon", image: "/movies/wishdragon.png" },
  { title: "Loki", image: "/movies/loki.png" },
  { title: "Spider-Man", image: "/movies/spider.png" },
  { title: "The Witcher", image: "/movies/witcher.png" },
];

export default function MovieList() {
  return (
    <section className="px-6 sm:px-8 py-10 flex justify-center max-w-[1920px] mx-auto">
      <div className="flex gap-4 sm:gap-6 md:gap-4 overflow-x-auto scrollbar-hide">
        {movies.map((movie) => (
          <MovieCard key={movie.title} {...movie} />
        ))}
      </div>
    </section>

  );
}


