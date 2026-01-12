import { useEffect } from "react";

export default function usePreloadCarouselImages() {
    useEffect(() => {
        const images = [
            "images/kitchen1.png",
            "images/kitchen2.png",
            "images/kitchen3.png",
            "images/bars1.png",
            "images/bars2.png",
            "images/bars3.png",
            "images/trim1.png",
            "images/trim2.png",
            "images/trim3.png",
            "images/trim4.png",
            "images/trim5.png",
            "images/trim6.png",
            "images/trim7.png",
            "images/trim8.png",
            "images/barn1.png",
            "images/barn2.png",
            "images/barn3.png",
            "images/barn4.png",
            "images/barn5.png",
            "images/barn6.png",
            "images/services_1.png",
            "images/services_2.png",
            "images/services_3.png",
            "images/services_4.png",
            "images/services_5.png",
            "images/services_6.png",
        ];

        images.forEach((src) => {
            const img = new Image();
            img.src = src;
        });
    }, []);
}