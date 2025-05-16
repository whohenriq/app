import { Video } from "@/types/video"
import Image from "next/image"
import Link from "next/link";

interface VideoCardProps {
    video: Video
    onClick?: () => void;
}

export function VideoCard({ video, onClick }: VideoCardProps) {
    return (
        <Link href={`/player/${video.url}`}>
            <div 
                className="flex flex-col  items-start max-w-[300px] h-fit rounded-xl hover:cursor-pointer bg-black p-4 gap-4 hove:bg-white"
                onClick={onClick}
            >
                <Image src={video.img!} 
                    width={300}
                    height={300}
                    alt={`Imagem do video: ${video.title}`}
                /> 
                <div className="flex flex-col items-start gap-1">
                    <h1 className="font-bold text-white">Nome: <span className="text-white font-medium">{video.title}</span></h1>
                    <p className="font-bold text-white">Duração: <span className="text-white/50">{video.duration}min</span></p>
                </div>
            </div>
        </Link>
    )
}