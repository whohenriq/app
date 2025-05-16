"use client";

import { VideoCard } from "@/components/video-card"
import { VIDEOS } from "@/const/videos"
import Link from "next/link"

export function ListVideos() {

    return (
        <div className="flex flex-col items-center w-fit px-8 gap-4">
            <h1 className="text-4xl font-black">Nossos Vídeos Interativos!</h1>
            <Link href="/" className="flex items-center w-fit h-11 bg-black p-4 rounded cursor-pointer">
                <button className="text-white font-bold">
                   Voltar
                </button>
            </Link>
            <div className="grid grid-cols-3 w-full h-fit gap-4">
                {VIDEOS.map((video) => (
                    <VideoCard key={video.id} video={video}  />
                ))}
            </div>
        </div>
    )
}