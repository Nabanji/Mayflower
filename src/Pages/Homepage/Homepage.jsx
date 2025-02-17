import { useEffect } from 'react';
import Navbar from '../../components/Navbar/Navbar'
import '../Homepage/Homepage.css'
import Footer from'../../components/Footer/Footer'
import { PiHandHeartDuotone } from "react-icons/pi";
import AOS from "aos";
import "aos/dist/aos.css";

import aboutImage from '../../assets/about.png';
import placeHolder from '../../assets/placeholder.png';
import communityImage from '../../assets/community.png';


export default function Homepage() {

    useEffect(() => {
        AOS.init({
          duration: 1500, // Animation duration in milliseconds
          once: true, // Whether animation should happen only once
        });
      }, []);

    return (
        <>
            <Navbar />
            <div>

                <section className="container home-intro" data-aos="zoom-in-up">
                    <div className="home-content">
                        <h1 className='home-header'>Small efforts make <br />big <span style={{color: '#07c3f6'}}>change</span></h1>
                        <p className='fs-4'>Improving young children's education, health and well-being through education, nutrition and recreational programs.</p>
                        <button><a href="">Join Us</a></button>
                    </div>
                    <div className="home-image">
                        <img src={placeHolder} width={500} height={400} alt="Home Image" />
                    </div>
                </section>


                <section className="container d-flex flex-wrap justify-content-center gap-3 card-section">
                    <div className='card-item d-flex flex-column justify-content-center align-items-center text-center'data-aos="fade-up" >
                        <PiHandHeartDuotone size={100} />
                        <h2 className="h4">Become a Volunteer</h2>
                        <p className="fs-5">
                            Make a difference in your community by joining our team of dedicated volunteers. 
                            Your time and effort can bring hope and change to those in need.
                        </p>
                    </div>

                    <div className='card-item d-flex flex-column justify-content-center align-items-center text-center' data-aos="fade-up">
                        <PiHandHeartDuotone size={100} />
                        <h2 className="h4">Become a Donor</h2>
                        <p className="fs-5 ">
                            Your generosity can transform lives. Every donation, big or small, helps provide 
                            essential resources and opportunities for those in need.
                        </p>
                    </div>

                    <div className='card-item d-flex flex-column justify-content-center align-items-center text-center' data-aos="fade-up">
                        <PiHandHeartDuotone size={100} />
                        <h2 className="h4">Support a Cause</h2>
                        <p className="fs-5 ">
                            Stand with us in making a difference. Your support helps fund vital programs, 
                            provide resources, and create lasting change in communities.
                        </p>
                    </div>
                </section>


                <section className="welcome-page container d-flex flex-wrap align-items-center justify-content-between my-5">

                    <div className="welcome-div welcome-text d-flex flex-column justify-content-center" data-aos="fade-left">
                        <h1>Welcome to our charity</h1>
                        <div className="underline"></div>
                        <p className='fs-5 my-3'>
                        Children can achieve their dreams and we should be doing all we can to ensure they do.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tempus vestib ulum mauris quis aliquam. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tempus vestibulum mauris quis aliquam. Integer accumsan sodales odio, id tempus velit ullamcorper id. Quisque at erat eu libero consequat tempus. Quisque molestie convallis tempus. Ut semper purus metus, a euismod sapien sodales ac. Duis viverra eleifend fermentum.
                        </p>
                        <button>Read More</button>
                    </div>

                    <div className="welcome-div welcome-img d-flex justify-content-center mt-3" data-aos="fade-right">
                        <img src={placeHolder} height={500} alt="Welcome Image" />
                    </div>

                </section>

                <section className="container interest d-flex">
                    <div className="interest-div interest-desc d-flex flex-column justify-content-center" data-aos='fade-right'>
                        <h3 className='fs-5'>community first approach</h3>
                        <h1>We raise funds with the aim of helping children achieve their dreams.</h1>
                        <p className='fs-5'>Children can achieve their dreams and we should be doing all we can to ensure they do.</p>
                    </div>
                    <div className="interest-div interest-img" data-aos='fade-left'>
                        <img src={communityImage} alt="Kiaora children" />
                    </div>
                </section>


                <section className="container about d-flex justify-content-between align-items-center my-5">

                    <div className="about-div about-image d-flex justify-content-center align-items-center" data-aos="zoom-in-down"> 
                        <img src={aboutImage} alt="About Image" />
                    </div>

                    <div className="about-div about-desc d-flex flex-column justify-content-center" data-aos='zoom-in-left'>
                        <h1 className='mb-2'>How we work</h1>
                        <header className='mb-2'>We take a community first approach in our activities</header>
                        
                        <div className="mission-item ">
                            <h3>01. Acquire & Maintain Community Links</h3>
                            <p>We maintain contact with individuals of the communities in which we work to discover their needs and determine the best way to meet them.</p>
                        </div>

                        <div className="mission-item">
                            <h3>02. Facilitate Donations from Different Sources</h3>
                            <p>We reach out to donors and volunteers for help with our programs and logistics.</p>
                        </div>

                        <div className="mission-item">
                            <h3>03. Deliver Programs to the Communities in Need</h3>
                            <p>We utilize the support collected to effect changes in the involved communities.</p>
                        </div>
                    </div>

                </section>

                <Footer />

            </div>
        </>
    )
}