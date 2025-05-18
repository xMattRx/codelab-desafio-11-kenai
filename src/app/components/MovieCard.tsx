interface MovieCardProps {
    title: string;
    image: string;
    genre?: string;
    rating?: number;
}

export default function MovieCard({
    title,
    image,
    genre = "Ação/Suspense",
    rating = 5,
}: MovieCardProps) {
    return (
        <div className="group w-[200px] h-[330px] relative cursor-pointer flex-shrink-0 text-white rounded-md overflow-hidden transition-transform duration-300 hover:scale-105">
            <img
                src={image}
                alt={title}
                className="w-full h-full object-cover group-hover:brightness-75 transition-all duration-300"
            />

            {/* Gradiente + informações */}
            <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/90 via-black/50 to-transparent pointer-events-none">
                <div className="inline-block bg-[#181818] text-[#FFA634] text-[10px] font-semibold px-2 py-[2px] rounded-tr-md rounded-bl-md mb-[6px]">
                    {genre}
                </div>

                <div className="flex items-center gap-[2px] mb-[6px] text-[12px] text-[#FFA634]">
                    {Array(5).fill(0).map((_, i) => (
                        <span key={i}>★</span>
                    ))}
                </div>

                <p className="text-[14px] font-medium text-white leading-tight">{title}</p>
            </div>
        </div>
    );
}
