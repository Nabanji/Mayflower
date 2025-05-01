import { useEffect } from 'react';
import '../Programs/Programs.css';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import AOS from "aos";
import "aos/dist/aos.css";


export default function Programs() {

    const ourPrograms = [
        {
            program: 'Mayflower Kids FC Sports program',
            description: 'Join the Mayflower Sports Program and unleash your athletic potential! Whether you\'re into soccer, basketball, track, or other exciting sports, our program offers top-tier coaching, competitive opportunities, and a fun, supportive environment for all skill levels. Stay active, build teamwork, and push your limits—because every champion starts somewhere!',
            button: 'Read More',
        },
        {
            program: 'Books and Beyond Education program',
            description: 'Join the Mayflower Sports Program and unleash your athletic potential! Whether you\'re into soccer, basketball, track, or other exciting sports, our program offers top-tier coaching, competitive opportunities, and a fun, supportive environment for all skill levels. Stay active, build teamwork, and push your limits—because every champion starts somewhere!',
            button: 'Read More',
        },
        {
            program: 'Empower Her sanitary and inner wear program', 
            description: 'Join the Mayflower Sports Program and unleash your athletic potential! Whether you\'re into soccer, basketball, track, or other exciting sports, our program offers top-tier coaching, competitive opportunities, and a fun, supportive environment for all skill levels. Stay active, build teamwork, and push your limits—because every champion starts somewhere!',
            button: 'Read More',
        },
        {
            program: 'Taste of Hope feeding program',
            description: 'Join the Mayflower Sports Program and unleash your athletic potential! Whether you\'re into soccer, basketball, track, or other exciting sports, our program offers top-tier coaching, competitive opportunities, and a fun, supportive environment for all skill levels. Stay active, build teamwork, and push your limits—because every champion starts somewhere!',
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
                                <button className='mb-3'>{program.button}</button>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <Footer />

        </>
    )
}