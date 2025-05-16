import Link from "next/link";
import { ListVideos } from "../_components/list-videos";

export default function Videos() {
    return (
       <section className="flex flex-col items-center justify-center w-full min-h-screen gap-4">
         <ListVideos />

         <Link href="/new-video" className="flex items-center w-fit h-11 bg-black p-4 rounded cursor-pointer text-white">
            Adicionar novos videos
         </Link>
       </section>
    )
}