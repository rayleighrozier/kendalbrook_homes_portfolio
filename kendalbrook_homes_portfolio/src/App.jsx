import { useState } from 'react'

export default function App() {
    const [menuOpen, setMenuOpen] = useState(false)

    const scrollToSection = (id) => {
        const section = document.getElementById(id)
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' })
            setMenuOpen(false)
        }
    }

    return (
        <>
            {/* NAVIGATION */}
            <nav className="nav">
                <div className="logo"><img src="/images/kendalbrook_homes_logo.png" alt="Kendalbrook Homes Inc." /></div>

                {/* HAMBURGER BUTTON */}
                <button
                    className="hamburger"
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>

                {/* DROPDOWN MENU */}
                {menuOpen && (
                    <div className="menu">
                        <button onClick={() => scrollToSection('hero')}>Home</button>
                        <button onClick={() => scrollToSection('services')}>Services</button>
                        <button onClick={() => scrollToSection('about')}>About</button>
                        <button onClick={() => scrollToSection('projects')}>Our Work</button>
                        <button onClick={() => scrollToSection('contact')}>Contact</button>
                    </div>
                )}
            </nav>

            {/* HERO SECTION */}
            <section id="hero" className="section hero">
                <h1>Kendalbrook Homes Inc.</h1>
                <p>Custom Homes • Renovations • Remodeling • Licensed & Insured</p>
                <button
                    className="hero-button"
                    onClick={() => scrollToSection('contact')}
                >
                    Contact Us
                </button>
            </section>

            {/* SERVICES SECTION */}
            <section id="services" className="section">
                <h2>Our Services</h2>
                <ul>
                    <li>Custom Homes & Whole-House Renovations</li>
                    <li>Kitchens, Bathrooms, and Interior Remodeling</li>
                    <li>Additions, Decks, Covered Porches, Garage Expansions, Basements</li>
                    <li>Pools & Hardscapes</li>
                    <li>Window & Door Replacement</li>
                    <li>Interior & Exterior Painting</li>
                    <li>Custom Trim Work</li>
                    <li>Cabinetry (Custom & Pre-Manufactured)</li>
                    <li>Design-Build Renovations</li>
                </ul>
                <p>
                    From small remodels to large custom projects, we handle every detail and can source materials worldwide.
                </p>
            </section>

            {/* ABOUT SECTION */}
            <section id="about" className="section">
                <h2>About Keith Fouts & Kendalbrook Homes Inc.</h2>
                <p>
                    Keith Fouts has over 33 years of experience in construction, starting in 2000. He founded Kendalbrook Homes Inc. in 2004, providing fully licensed and insured services across Buckhead, the Atlanta metro area, and throughout Georgia.
                </p>
                <p>
                    We work closely with designers and architects to deliver custom homes and renovations tailored to each client’s vision. For projects of any scale, we can source materials from around the country and the world, including France, China, and Canada.
                </p>
                <p>
                    Our specialties include French Oak flooring, 100+ year-old reclaimed barn and warehouse beams, and custom or pre-manufactured cabinetry. Simply put: if it can be built or remodeled, we can make it happen.
                </p>
            </section>

            {/* PROJECTS / GALLERY SECTION */}
            <section id="projects" className="section projects">
                <h2>Our Work</h2>
                <div className="gallery">
                    <div className="gallery-item">
                        <img src="/images/kitchen.jpg" alt="Kitchen Remodeling" />
                        <p>Kitchen Remodeling</p>
                    </div>
                    <div className="gallery-item">
                        <img src="/images/bathroom.jpg" alt="Bathroom Renovation" />
                        <p>Bathroom Renovation</p>
                    </div>
                    <div className="gallery-item">
                        <img src="/images/deck.jpg" alt="Deck & Patio" />
                        <p>Deck & Patio</p>
                    </div>
                    <div className="gallery-item">
                        <img src="/images/repair.jpg" alt="General Repairs" />
                        <p>General Repairs</p>
                    </div>
                </div>
            </section>

            {/* CONTACT SECTION */}
            <section id="contact" className="section">
                <h2>Get in Touch</h2>
                <p>Contact Kendalbrook Homes Inc. to discuss your next project. We proudly serve the Atlanta metro area, throughout Georgia, and beyond.</p>
                <p>📞 Phone: (555) 123-4567</p>
                <p>📧 Email: smithhomes@email.com</p>
                <p>🌐 Facebook: <a href="LINK_TO_FACEBOOK" target="_blank" rel="noopener noreferrer">Kendalbrook Homes Inc.</a></p>
                <p>We can source materials from anywhere in the world to bring your project to life.</p>
            </section>
        </>
    )
}