import { useEffect } from 'react';
import './Contact.css';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import GoogleMaps from '../../components/GoogleMaps/GoogleMaps';
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

import AOS from "aos";
import "aos/dist/aos.css";

export default function Contact() {

    useEffect(() => {
        AOS.init({
            duration: 1500, // Animation duration in milliseconds
            once: true, // Whether animation should happen only once
        });
    }, []);

    return (
        <>
            <Navbar />
            <div className="contact-header d-flex flex-column align-items-center mt-3 container">
                <h1>Contact Us</h1>
                <div className="underline"></div>
                <p className='mt-2'>Have questions or need assistance? Our team at Mayflower is here to help! Reach out to us for inquiries, support, or collaboration opportunities. We look forward to hearing from you.</p>
            </div>

            <section className="contact-form container mt-5">
                <form data-aos='fade-right'>
                    <div>
                        <label htmlFor="firstName">First name:</label>
                        <input type="text" id="firstName" name="firstName" placeholder='eg. John' required />
                    </div>
                    <div>
                        <label htmlFor="lastName">Last name:</label>
                        <input type="text" id="lastName" name="lastName" placeholder='eg. Doe' required />
                    </div>
                    <div>
                        <label htmlFor="email">Email:</label>
                        <input type="email" id="email" name="email" placeholder='example@gmail.com' required />
                    </div>
                    <div>
                        <label htmlFor="message">Message:</label>
                        <textarea id="message" name="message" rows={6} placeholder='Type your message here' required></textarea>
                    </div>
                    <button type="submit">Submit</button>
                </form>

                <div className="contact-location" data-aos='fade-left'>
                    <h1>Quick info</h1>
                    <div className="details">
                        <div className="detail">
                            <FaLocationDot className='icon' />
                            <p>Vienna Court, State House Crescent, Nairobi, KE</p>
                        </div>
                        <div className="detail">
                            <FaPhoneAlt className='icon' />
                            <p>+254 704 281 959</p>
                        </div>
                        <div className="detail">
                            <MdEmail className='icon' />
                            <p>info@mayflowerchildrens.com</p>
                        </div>
                    </div>
                </div>
            </section>

            <GoogleMaps />

            <Footer />

        </>
    )
}