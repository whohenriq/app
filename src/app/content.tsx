import { PlayerVideo } from "@/components/player";
import Link from "next/link";

export function Content() {
    return (
        <main className="flex flex-col justify-center items-center w-full h-screen gap-4 sm:px-6">
          <div className="flex flex-col gap-1 text-center">
            <h1 className="text-4xl font-black sm:text-[20px]">Bem-vindo a biblioteca de Vídeos Interativos!</h1>
            <p className="text-xl font-medium ">Prova de certificação de conhecimento de Aplicação com Interfaces Ricas</p>
          </div>

          <Link href={"/videos"} className="flex items-center w-fit h-11 bg-black p-4 rounded cursor-pointer text-white">
                Acessar vídeos
          </Link>

          <PlayerVideo path="https://www.youtube.com/embed/19g66ezsKAg"/> 
        </main>
      )
}