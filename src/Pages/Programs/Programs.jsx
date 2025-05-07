import { useEffect } from 'react';
import '../Programs/Programs.css';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import AOS from "aos";
import "aos/dist/aos.css";


export default function Programs() {

    const ourPrograms = [
        {
            id: 'sports-program',
            program: 'Mayflower Kids FC Sports program',
            description: 'Join the Mayflower Kids FC Sports Program and unleash your athletic potential! Whether you\'re into soccer, basketball, track, or other exciting sports, our program offers top-tier coaching, competitive opportunities, and a fun, supportive environment for all skill levels. Stay active, build teamwork, and push your limits—because every champion starts somewhere!',
            button: 'Read More',
        },
        {
            id: 'education-program',
            program: 'Books and Beyond Education program',
            description: 'Unlock a world of knowledge with the Books and Beyond Education Program! We provide academic support, reading materials, mentorship, and workshops to help young minds grow and thrive. Whether it’s through tutoring, creative storytelling, or digital literacy, we’re here to empower the next generation with the tools they need to succeed in and out of the classroom.',
            button: 'Read More',
        },
        {
            id: 'empower-her-program',
            program: 'Empower Her sanitary and inner wear program', 
            description: 'The Empower Her program is dedicated to promoting dignity, health, and self-confidence in young girls and women. We provide access to essential sanitary products and innerwear, along with educational workshops on menstrual health and hygiene. Through support and awareness, we aim to break taboos and create safe, empowering spaces for every girl to thrive.',
            button: 'Read More',
        },
        {
            id: 'taste-of-hope-program',
            program: 'Taste of Hope feeding program',
            description: 'Taste of Hope is our community feeding program aimed at tackling hunger and food insecurity. We provide nutritious meals to children and families in need, ensuring that no one is left behind. By combining love, nutrition, and hope, we strive to make every plate a step toward a healthier, brighter future.',
            button: 'Read More',
        }
    ]

    useEffect(() => {
        AOS.init({
            duration: 1500, // Animation duration in milliseconds
            once: true, // Whether animation should happen only once
        });
    }, []);

    return (
        <>
            <section className="programs-intro">
                <Navbar />
                <div className="programs-heading">
                    <h1>Programs</h1>
                </div>
            </section>

            <section className="programs d-flex flex-column align-items-center my-5">
                <h1 data-aos="fade-right">Our Programs</h1>
                <div className="underline"></div>

                <div className="program gap-5 mt-3">
                    {ourPrograms.map((program, index) => (
                        <div className="program-card" data-aos={index % 2 === 0 ? 'flip-left' : 'flip-right'} key={index}>
                            <div className="program-description ps-3">
                                <h4 className='my-3'>{program.program}</h4>
                                <p>{program.description}</p>
                                <button 
                                    className='mb-3'
                                    onClick={() => window.location.href = `/programs/${program.id}`}
                                   >
                                    {program.button}
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <Footer />

        </>
    )
}