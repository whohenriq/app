"use client";

import { useNewVideoForm } from "./useNewVideoForm"

export function NewVideoForm() {
    const {register, errors, onSubmit} = useNewVideoForm()

    return (
        <form 
            onSubmit={onSubmit}
            className="flex flex-col max-w-[900px] h-fit items-center p-6 gap-4 bg-gray-400"
        >
        <h1 className="text-white">Crie um novo video</h1>

        <div className="flex flex-col w-full">
            <label className="text-white">Nome</label>
            <input type="text" id="title" placeholder="Nome do video" {...register("title")} className="w-full h-11 rounded p-2 border border-white placeholder:text-white"/>
            {errors.title && <span>This field is required</span>}
        </div>
        
        <div className="flex flex-col w-full">
            <label className="text-white">Duração</label>
            <input type="number" id="duration" placeholder="Duração" {...register("duration")} className="w-full h-11 rounded p-2 border border-white placeholder:text-white"/>
            {errors.duration && <span>This field is required</span>}
        </div>
        <div className="flex flex-col w-full">
            <label className="text-white">URL</label>
            <input type="url" id="url" placeholder="URL" {...register("url")} className="w-full h-11 rounded p-2 border border-white placeholder:text-white"/>
            {errors.url && <span>This field is required</span>}
        </div>

        <button type="submit" className="bg-white p-4 cursor-pointer">
            Adicionar novo video
        </button>
      </form>
    )
}