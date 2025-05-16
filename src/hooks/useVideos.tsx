"use client";

import { createContext, useContext, useState, ReactNode } from "react";

interface VideoContextType {
    title: string
    duration: number
    url: string
}

const VideoContext = createContext<VideoContextType | undefined>(undefined);

export const useVideoProvider = ({children } :{children: ReactNode}) => {
    const [title, setTitle] = useState("")
    const [duration, setDuration] = useState(0)
    const [url, setUrl] = useState("")
    
    return (
        <VideoContext.Provider value={{
            title, duration, url, 
        }}>
            {children}
        </VideoContext.Provider>
    )
}
export function useVideo() {
    return useContext(VideoContext);
  }