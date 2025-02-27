import { useEffect } from 'react';
import './Partner.css'
import Navbar from '../../components/Navbar/Navbar';
import PartnerImage from '../../assets/about.png';
import Footer from '../../components/Footer/Footer';
import footballRon from '../../assets/footballron.png';

import { FaLongArrowAltRight } from "react-icons/fa";


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

            <section className="donate d-flex justify-content-between my-5">
                <div className="d-flex flex-column justify-content-center donate-section" data-aos="fade-right">
                    <h1>Join us and make a difference</h1>
                    <p>Every donation you make goes a long way in providing hope and creating opportunities for children across Africa.</p>
                    <button>Join Us</button>
                </div>
                <div className="donate-img" data-aos="fade-left">
                    <img src={footballRon} alt="Kiaora football" />
                    <button>Donate</button>
                </div>
            </section>

            <section className="form d-flex justify-content-around align-items-center container mb-5">
                <div className="form-heading d-flex flex-column justify-content-center" data-aos='zoom-in-up'>
                    <h1>Partner with us</h1>
                    <div className="underline"></div>
                    <p className='fs-5 my-3'>Join us today as we strive to make every child's dream a reality with Mayflower, a dedicated organization committed to nurturing young minds, providing quality education, and creating endless opportunities for growth. Through our unwavering support, mentorship programs, and community-driven initiatives, we empower children to reach their full potential and build a brighter future. Together, we can make a lasting impact, transforming dreams into achievements and hope into reality.</p>
                    <button>Read More <span><FaLongArrowAltRight /></span></button>
                </div>
                <form data-aos='zoom-in-up'>
                    <div>
                        <label htmlFor="name">Name:</label>
                        <input type="text" name='name' id='name' placeholder='Enter your name' required />
                    </div>
                    <div>
                        <label htmlFor="email">Email:</label>
                        <input type="email" name='email' id='email' placeholder='Enter you email' required />
                    </div>
                    <div>
                        <label htmlFor="message">Message:</label>
                        <textarea name="message" id="message" rows={4} placeholder='Enter your message here' required></textarea>
                    </div>
                    <div>
                        <button type="submit">Submit</button>
                    </div>
                </form>
            </section>

            <Footer />

        </>
    )
}