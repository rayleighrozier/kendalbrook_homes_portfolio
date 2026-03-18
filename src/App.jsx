import { useState, useRef, useEffect } from 'react';
import usePreloadCarouselImages from "./usePreloadCarouselImages.jsx";
import { images as cdn } from "./cdn.js";

function Lightbox({ image, onClose }) {
    if (!image) return null
    return (
        <div className="lightbox" onClick={onClose}>
            <img src={image.src} alt={image.alt} />
            <p>{image.caption}</p>
        </div>
    )
}

function ProjectCarousel({ images, label, fullWidth }) {
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
        <div className={`project-carousel-container${fullWidth ? ' full-width' : ''}`}>
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
        cdn.services.s6,
        cdn.services.s3,
        cdn.services.s4,
        cdn.services.s1,
        cdn.services.s2,
        cdn.services.s5,
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
            label: "New Construction",
            fullWidth: true,
            images: [
                { src: cdn.services.s1 },
                { src: cdn.services.s2 },
                { src: cdn.services.s3 },
                { src: cdn.services.s4 },
                { src: cdn.services.s5 },
                { src: cdn.services.s6 },
            ],
        },
        {
            label: "Kitchens",
            images: [
                { src: cdn.kitchens.k1 },
                { src: cdn.kitchens.k2 },
                { src: cdn.kitchens.k3 },
            ],
        },
        {
            label: "Bars",
            images: [
                { src: cdn.bars.b1 },
                { src: cdn.bars.b2 },
                { src: cdn.bars.b3 },
            ],
        },
        {
            label: "Trim",
            images: [
                { src: cdn.trim.t1 },
                { src: cdn.trim.t2 },
                { src: cdn.trim.t3 },
                { src: cdn.trim.t4 },
                { src: cdn.trim.t5 },
                { src: cdn.trim.t6 },
                { src: cdn.trim.t7 },
                { src: cdn.trim.t8 },
            ],
        },
        {
            label: "Barns",
            images: [
                { src: cdn.barns.b2 },
                { src: cdn.barns.b5 },
                { src: cdn.barns.b1 },
                { src: cdn.barns.b3 },
                { src: cdn.barns.b4 },
                { src: cdn.barns.b6 },
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
                        fullWidth={category.fullWidth}
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
                        src={cdn.logo}
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
                            <li>Custom Barndominiums – Timber Frame & Metal Building</li>
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
                    Kendalbrook Homes is a craftsman-driven custom home builder and renovation firm specializing in high-end residential projects that prioritize timeless materials, precision execution, and collaborative design.
                </p>
                <p>
                    With over 33 years of residential construction experience, founder Keith Fouts established Kendalbrook Homes Inc. in 2004. We are fully licensed and insured, based in Buckhead and serving the Atlanta metro area and throughout Georgia.
                </p>
                <p>
                    We collaborate closely with designers and architects to deliver custom homes and renovations that reflect each client's vision. Our specialties include French Oak flooring, 100+ year-old reclaimed barn and warehouse beams, and custom or pre-manufactured cabinetry. Whether supplying materials only or providing full installation, every project receives the same level of craftsmanship and attention to detail, regardless of scope or size.
                </p>
            </section>

            <ProjectsSection />

            <section id="contact" className="section contact">
                <div className="contact-inner">
                    <div className="contact-logo">
                        <img src={cdn.logo} alt="Kendalbrook Homes Inc." />
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