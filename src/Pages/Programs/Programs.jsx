import { useEffect } from 'react';
import '../Programs/Programs.css';
import Navbar from '../../components/Navbar/Navbar';
import AOS from "aos";
import "aos/dist/aos.css";


export default function Programs() {

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

                    <div className="program-card" data-aos='flip-left'>
                        <div className="program-description ps-3">
                            <h4 className='my-3'>Schools</h4>
                            <p>Join the Mayflower Sports Program and unleash your athletic potential! Whether you're into soccer, basketball, track, or other exciting sports, our program offers top-tier coaching, competitive opportunities, and a fun, supportive environment for all skill levels. Stay active, build teamwork, and push your limits—because every champion starts somewhere!</p>
                            <button className='mb-3'>Read More</button>
                        </div>
                    </div>

                    <div className="program-card" data-aos='flip-right'>
                        <div className="program-description ps-3">
                            <h4 className='my-3'>Visits</h4>
                            <p>Join the Mayflower Sports Program and unleash your athletic potential! Whether you're into soccer, basketball, track, or other exciting sports, our program offers top-tier coaching, competitive opportunities, and a fun, supportive environment for all skill levels. Stay active, build teamwork, and push your limits—because every champion starts somewhere!</p>
                            <button className='mb-3'>Read More</button>
                        </div>
                    </div>

                    <div className="program-card" data-aos='flip-left'>
                        <div className="program-description ps-3">
                            <h4 className='my-3'>Recreation</h4>
                            <p>Join the Mayflower Sports Program and unleash your athletic potential! Whether you're into soccer, basketball, track, or other exciting sports, our program offers top-tier coaching, competitive opportunities, and a fun, supportive environment for all skill levels. Stay active, build teamwork, and push your limits—because every champion starts somewhere!</p>
                            <button className='mb-3'>Read More</button>
                        </div>
                    </div>

                    <div className="program-card" data-aos='flip-right'>
                        <div className="program-description ps-3">
                            <h4 className='my-3'>Sports</h4>
                            <p>Join the Mayflower Sports Program and unleash your athletic potential! Whether you're into soccer, basketball, track, or other exciting sports, our program offers top-tier coaching, competitive opportunities, and a fun, supportive environment for all skill levels. Stay active, build teamwork, and push your limits—because every champion starts somewhere!</p>
                            <button className='mb-3'>Read More</button>
                        </div>
                    </div>

                    <div className="program-card" data-aos='flip-left'>
                        <div className="program-description ps-3">
                            <h4 className='my-3'>Love & Sanitation</h4>
                            <p>Join the Mayflower Sports Program and unleash your athletic potential! Whether you're into soccer, basketball, track, or other exciting sports, our program offers top-tier coaching, competitive opportunities, and a fun, supportive environment for all skill levels. Stay active, build teamwork, and push your limits—because every champion starts somewhere!</p>
                            <button className='mb-3'>Read More</button>
                        </div>
                    </div>

                </div>
            </section>

        </>
    )
}