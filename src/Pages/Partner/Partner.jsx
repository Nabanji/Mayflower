import { useEffect } from 'react';
import './Partner.css'
import Navbar from '../../components/Navbar/Navbar';
import PartnerImage from '../../assets/about.png';

import AOS from "aos";
import "aos/dist/aos.css";

export default function Partner() {

    useEffect(() => {
            AOS.init({
              duration: 1500, // Animation duration in milliseconds
              once: true, // Whether animation should happen only once
            });
    }, []);

    return (
        <>
            <Navbar />
            <section className='container d-flex justify-content-around mt-4 partner-intro'>
                <div className='d-flex flex-column justify-content-center partner-heading' data-aos='fade-right'>
                    <h1>Let's create hope together</h1>
                    <p>We are delighted to work with like-minded people with the sole aim of providing hope and creating opportunities for children across Africa.
                    </p>
                    <div className="partner-btns d-flex gap-3">
                        <button className='donate-btn'>Donate Now</button>
                        <button className='volunteer-btn'>Join as a Volunteer</button>
                    </div>
                </div>
                <div className='partner-image d-flex align-items-center justify-content-center' data-aos='fade-left'>
                    <img src={PartnerImage} alt="Partner Image" />
                </div>
            </section>
        </>
    )
}