import Image from "next/image";
import Link from "next/link";

interface ProfileCardProps {
  name: string;
  imageUrl: string;
}

export default function ProfileCard({ name, imageUrl }: ProfileCardProps) {
  return (
    <Link href="/home">
      <div className="flex flex-col items-center gap-2 hover:scale-105 transition-transform cursor-pointer">
        <div className="relative w-[120px] h-[120px] sm:w-[176px] sm:h-[176px]">
          <Image
            src={imageUrl}
            alt={`Avatar de ${name}`}
            fill
            className="rounded-full object-cover border-2"
          />
        </div>
        <p className="text-[20px] sm:text-[32px] mt-[40px] font-normal text-center leading-none">
          {name}
        </p>
      </div>
    </Link>
  );
}
