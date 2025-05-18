import ProfileCard from "@/app/components/ProfileCard";



const profiles = [
    { name: "Matheus Ramos", imageUrl: "/avatars/matheus.png" },
    { name: "Vitória Luz", imageUrl: "/avatars/vitoria.png" },
    { name: "Vinicius Eiji", imageUrl: "/avatars/vinicius.png" },
];



export default function ProfilePage() {
    return (
        <main className="flex flex-col sm:px-10 md:px-[64px] items-center justify-center  bg-black text-white px-4">
            <h1 className="text-2xl md:text-4xl font-semibold mb-2">
                Bem-vindo de volta ao Kenai
            </h1>
            <p className="mb-10 text-sm md:text-base text-zinc-400">
                Quem está usando?
            </p>
            <div className="flex flex-wrap gap-[112px] justify-center">
                {profiles.map((profile) => (
                    <ProfileCard key={profile.name} {...profile} />
                ))}
            </div>

            <button className="mt-10 text-sm text-zinc-300 hover:underline">
                Adicionar perfil
            </button>
        </main>
    );
}
