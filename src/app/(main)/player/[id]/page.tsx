import { PlayerVideo } from "@/components/player";
import { VIDEOS } from "@/const/videos";
import { useMemo } from "react";

export function PlayerPage({params}: {params: {id: number}}) {
    const path = params.id

    const selectVideo = useMemo(() => {
        return VIDEOS.filter((video) => video.id ===)
    }, [])
    return (
        <>
            <PlayerVideo path={path}/> 
        </>
    )
}