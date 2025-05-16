"use client";

import { Video } from "@/types/video";
import { useForm } from "react-hook-form";

interface UseNewVideoFormSchema extends Video {}

export function useNewVideoForm() {
    
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm<UseNewVideoFormSchema>()

      const onSubmit = handleSubmit((data) => console.log(data))

      return {
        register,
        handleSubmit,
        errors,
        onSubmit
      }
}
