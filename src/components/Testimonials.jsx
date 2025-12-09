import React from 'react';
import './Testimonials.css';
import drRajesh from '../assets/dr_rajesh.png';
// Using placeholders/same image if others aren't provided, or generic avatars if available.
// Since user only gave one, I'll reuse it or a placeholder. 
// Ideally I'd use unique ones, but I'll use a generic placeholder url or similar if local not avail.
// Using drRajesh for now or a placeholder for others to keep layout structure.
// Actually, I'll use a placeholder service for the others if I don't have images, or just the same one for demo if allowed, but better to use a placeholder.
// Let's assume standard placeholder for others.

const Testimonials = () => {
    const testimonials = [
        {
            id: 1,
            name: "Dr. Pooja Deshmukh",
            title: "BAMS",
            quote: "Amrutam's formulations stay true to the ancient wisdom of Ayurveda. Their authentic, chemical-free products help restore balance and promote holistic well-being. I often recommend them to my patients seeking natural healing.",
            rating: 4,
            image: "https://ui-avatars.com/api/?name=Pooja+Deshmukh&background=random" // Placeholder
        },
        {
            id: 2,
            name: "Dr. Rajesh Iyer",
            title: "Ayurvedic Practitioner",
            quote: "beautifully bridges the gap between traditional Ayurveda and modern wellness. Their high-quality ingredients and ethical practices make them a trustworthy choice for those looking to embrace a healthier lifestyle.",
            rating: 5,
            image: drRajesh
        },
        {
            id: 3,
            name: "Dr. Ananya Sharma",
            title: "BAMS",
            quote: "As an Ayurvedic doctor, I appreciate Amrutam's commitment to purity and efficacy. Their herbal blends are scientifically crafted, ensuring maximum benefits for the body and mind. I've personally seen positive results in my patients using their products.",
            rating: 5,
            image: "https://ui-avatars.com/api/?name=Ananya+Sharma&background=random" // Placeholder
        }
    ];

    return (
        <section className="testimonials-section">
            <div className="testimonials-header">
                <h2 className="section-title">What other Ayurvedic Doctors are Saying</h2>
                <p className="section-subtitle">Trusted by experts – Hear what Ayurvedic doctors say about Amrutam!</p>
            </div>

            <div className="testimonials-grid">
                {testimonials.map((testimonial) => (
                    <div key={testimonial.id} className="testimonial-card">
                        <div className="testimonial-header">
                            <div className="testimonial-avatar">
                                <img src={testimonial.image} alt={testimonial.name} />
                            </div>
                            <div className="testimonial-info">
                                <h3 className="testimonial-name">{testimonial.name}</h3>
                                <span className="testimonial-specialty">{testimonial.title}</span>
                                <div className="stars">
                                    {/* Rendering stars based on rating */}
                                    {[...Array(5)].map((_, i) => (
                                        <span key={i} className={`star ${i < testimonial.rating ? 'filled' : ''}`}>★</span>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <p className="testimonial-quote">"{testimonial.quote}"</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Testimonials;
