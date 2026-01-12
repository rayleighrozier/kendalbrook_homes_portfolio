import { useState, useRef, useEffect } from 'react';
import usePreloadCarouselImages from "./usePreloadCarouselImages.jsx";

function Lightbox({ image, onClose }) {
    if (!image) return null
    return (
        <div className="lightbox" onClick={onClose}>
            <img src={image.src} alt={image.alt} />
            <p>{image.caption}</p>
        </div>
    )
}

function ProjectCarousel({ images, label }) {
    const [lightboxImage, setLightboxImage] = useState(null)
    const carouselRef = useRef(null)
    const [canScrollLeft, setCanScrollLeft] = useState(false)
    const [canScrollRight, setCanScrollRight] = useState(true)

    useEffect(() => {
        const carousel = carouselRef.current
        if (!carousel) return

        const checkArrows = () => {
            setCanScrollLeft(carousel.scrollLeft > 0)
            setCanScrollRight(carousel.scrollLeft + carousel.clientWidth < carousel.scrollWidth - 1)
        }

        checkArrows()
        carousel.addEventListener('scroll', checkArrows)
        window.addEventListener('resize', checkArrows)

        return () => {
            carousel.removeEventListener('scroll', checkArrows)
            window.removeEventListener('resize', checkArrows)
        }
    }, [])

    const scrollLeft = () => {
        carouselRef.current.scrollBy({ left: -280, behavior: 'smooth' })
    }

    const scrollRight = () => {
        carouselRef.current.scrollBy({ left: 280, behavior: 'smooth' })
    }

    return (
        <div className="project-carousel-container">
            {label && <span className="carousel-label">{label}</span>}
            <div className="project-carousel-wrapper">
                {canScrollLeft && (
                    <button className="desktop-arrow left" onClick={scrollLeft}>
                        &#10094;
                    </button>
                )}
                <div className="project-carousel" ref={carouselRef}>
                    {images.map((img, i) => (
                        <div key={i} className="carousel-item" onClick={() => setLightboxImage(img)}>
                            <img
                                src={img.src}
                                alt={img.alt || ''}
                                loading="lazy"
                                onLoad={(e) => e.currentTarget.parentElement.classList.add('loaded')}
                            />
                            <p>{img.caption}</p>
                        </div>
                    ))}
                </div>
                {canScrollRight && (
                    <button className="desktop-arrow right" onClick={scrollRight}>
                        &#10095;
                    </button>
                )}
            </div>
            <Lightbox image={lightboxImage} onClose={() => setLightboxImage(null)} />
        </div>
    )
}


function ServicesCarousel() {
    const images = [
        "images/services_6.png",
        "images/services_3.png",
        "images/services_4.png",
        "images/services_1.png",
        "images/services_2.png",
        "images/services_5.png",
    ];

    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % images.length);
        }, 8000);
        return () => clearInterval(interval);
    }, [images.length]);

    return (
        <div className="services-carousel">
            {images.map((src, i) => (
                <img
                    key={i}
                    src={src}
                    alt="Construction and renovation work"
                    className={i === index ? "active" : ""}
                />
            ))}
        </div>
    );
}

function ProjectsSection() {
    const projectData = [
        {
            label: "Kitchens",
            images: [
                { src: "images/kitchen1.png" },
                { src: "images/kitchen2.png" },
                { src: "images/kitchen3.png" },
            ],
        },
        {
            label: "Bars",
            images: [
                { src: "images/bars1.png" },
                { src: "images/bars2.png" },
                { src: "images/bars3.png" },
            ],
        },
        {
            label: "Trim",
            images: [
                { src: "images/trim1.png" },
                { src: "images/trim2.png" },
                { src: "images/trim3.png" },
                { src: "images/trim4.png" },
                { src: "images/trim5.png" },
                { src: "images/trim6.png" },
                { src: "images/trim7.png" },
                { src: "images/trim8.png" },
            ],
        },
        {
            label: "Barn",
            images: [
                { src: "images/barn1.png" },
                { src: "images/barn2.png" },
                { src: "images/barn3.png" },
                { src: "images/barn4.png" },
                { src: "images/barn5.png" },
                { src: "images/barn6.png" },
            ],
        },
    ];

    return (
        <section id="projects" className="section projects">
            <h2>Our Work</h2>
            <div className="projects-container">
                {projectData.map((category, idx) => (
                    <ProjectCarousel
                        key={idx}
                        images={category.images}
                        label={category.label}
                    />
                ))}
            </div>
        </section>
    );
}

export default function App() {
    usePreloadCarouselImages();
    const [menuOpen, setMenuOpen] = useState(false);
    const [heroAnimated, setHeroAnimated] = useState(false);

    useEffect(() => {
        setHeroAnimated(true);
    }, []);

    const scrollToSection = (id) => {
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
            setMenuOpen(false);
        }
    };

    return (
        <>
            <nav className="nav">
                <div className="logo-container">
                    <img
                        src="images/kendalbrook_homes_logo.png"
                        alt="Kendalbrook Homes Inc."
                        className="logo-image"
                    />
                </div>
                <button
                    className="hamburger"
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Menu"
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
                {menuOpen && (
                    <div className="menu">
                        <button onClick={() => scrollToSection("hero")}>Home</button>
                        <button onClick={() => scrollToSection("services")}>Services</button>
                        <button onClick={() => scrollToSection("about")}>About</button>
                        <button onClick={() => scrollToSection("projects")}>Our Work</button>
                        <button onClick={() => scrollToSection("contact")}>Contact</button>
                    </div>
                )}
            </nav>

            <section id="hero" className="section hero">
                <h1>Kendalbrook Homes Inc.</h1>
                <p>
                    Custom Homes • Renovations • Remodeling • Licensed & Insured • Serving
                    Buckhead & Metro Atlanta
                </p>
                <button
                    className={`hero-button ${heroAnimated ? "animate" : ""}`}
                    onClick={() => scrollToSection("contact")}
                >
                    Contact Us
                </button>
            </section>

            <section id="services" className="section services">
                <div className="services-inner">
                    <div className="services-content">
                        <h2>Services</h2>
                        <ul className="services-list">
                            <li>Custom Homes & Whole-House Renovations</li>
                            <li>Kitchens, Bathrooms, & Interior Remodeling</li>
                            <li>Additions, Decks, & Covered Porches</li>
                            <li>Garages & Basements</li>
                            <li>Pools</li>
                            <li>Hardscapes</li>
                            <li>Windows & Doors</li>
                            <li>Interior & Exterior Painting</li>
                            <li>Custom Trim & Cabinetry</li>
                            <li>Design-Build Renovations</li>
                        </ul>
                    </div>
                    <ServicesCarousel />
                </div>
            </section>

            <section id="about" className="section about">
                <h2>About Us</h2>
                <p>
                    Keith Fouts has over 33 years of experience in residential
                    construction, and has been building and remodeling homes since 2000.
                    He founded Kendalbrook Homes Inc. in 2004, providing fully licensed
                    and insured services based in Buckhead, serving the Atlanta metro area
                    and throughout Georgia.
                </p>
                <p>
                    Kendalbrook Homes collaborates closely with designers and architects
                    to deliver custom homes and renovations that reflect each client’s
                    vision.
                </p>
                <p>
                    Our specialties include French Oak flooring, 100+ year-old reclaimed barn and warehouse beams, and custom or pre-manufactured cabinetry. Whether supplying materials only or providing full installation, every project receives the same level of craftsmanship and attention to detail, regardless of scope or size.
                </p>
            </section>

            <ProjectsSection />

            <section id="contact" className="section contact">
                <div className="contact-inner">
                    <div className="contact-logo">
                        <img src="images/kendalbrook_homes_logo.png" alt="Kendalbrook Homes Inc." />
                    </div>
                    <div className="contact-info">
                        <h2>Get in Touch</h2>
                        <p>
                            Reach out to Kendalbrook Homes Inc. to discuss your next project.
                            We proudly serve Buckhead, the Atlanta metro area, and throughout Georgia.
                        </p>
                        <p>
                            Phone: <a href="tel:16789250411" className="contact-link">678-925-0411</a>
                        </p>
                        <p className="contact-email">Email: ckfouts@bellsouth.net</p>
                        <a
                            href="https://www.facebook.com/p/Kendalbrook-Homes-Inc-100063496987476/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="contact-facebook-button"
                        >
                            Visit Our Facebook Page
                        </a>
                    </div>
                </div>
            </section>
        </>
    );
}