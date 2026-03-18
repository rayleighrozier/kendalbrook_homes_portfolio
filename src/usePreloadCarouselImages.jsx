import { useEffect } from "react";
import { images as cdn } from "./cdn.js";

export default function usePreloadCarouselImages() {
    useEffect(() => {
        const imagesToPreload = [
            ...Object.values(cdn.services),
            ...Object.values(cdn.kitchens),
            ...Object.values(cdn.bars),
            ...Object.values(cdn.trim),
            ...Object.values(cdn.barns),
        ];

        imagesToPreload.forEach((src) => {
            const img = new Image();
            img.src = src;
        });
    }, []);
}
