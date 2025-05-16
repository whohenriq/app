"use client";

import { useState } from "react";

export function useVideoCard() {    
    const [isModalOpen, setIsModalOpen] = useState(false);

    console.log(isModalOpen)

    const handleClickCard = () => {
        setIsModalOpen(true)
    }


    return {
        handleClickCard,
        isModalOpen
    }
}