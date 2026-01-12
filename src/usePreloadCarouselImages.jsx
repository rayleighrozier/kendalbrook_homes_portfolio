import { useEffect } from "react";

export default function usePreloadCarouselImages() {
    useEffect(() => {
        const images = document.querySelectorAll(".project-carousel img");
        if (!images.length) return;

        const preloadImage = (img) => {
            const src = img.dataset.src || img.src;
            if (!src) return;

            const preloader = new Image();
            preloader.src = src;
            preloader.onload = () => {
                img.src = src;
                img.parentElement.classList.add("loaded");
            };
            preloader.onerror = () => {
                img.parentElement.classList.add("loaded");
            };
        };

        const observer = new IntersectionObserver(
            (entries, obs) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        preloadImage(entry.target);
                        obs.unobserve(entry.target);
                    }
                });
            },
            { rootMargin: "200px" } // preload slightly before scrolling
        );

        images.forEach((img) => observer.observe(img));

        return () => observer.disconnect();
    }, []);
}