import { useEffect } from 'react';
import Navbar from '../../components/Navbar/Navbar'
import '../Homepage/Homepage.css'
import { PiHandHeartDuotone } from "react-icons/pi";
import AOS from "aos";
import "aos/dist/aos.css";

import placeHolder from '../../assets/placeholder.png';


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
            <div className="container">

                <div className="home-intro" data-aos="zoom-in-up">
                    <div className="home-content">
                        <h1 className='home-header'>Small efforts make <br />big <span style={{color: '#07c3f6'}}>change</span></h1>
                        <p className='fs-4'>Improving young children's education, health and well-being through education, nutrition and recreational programs.</p>
                        <button><a href="">Join Us</a></button>
                    </div>
                    <div className="home-image">
                        <img src={placeHolder} width={500} height={400} alt="Home Image" />
                    </div>
                </div>

                <div className="container d-flex flex-wrap justify-content-center gap-3 card-section">
                    <div className='card-item d-flex flex-column justify-content-center align-items-center text-center'data-aos="fade-up" >
                        <PiHandHeartDuotone size={100}/>
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
                </div>

                <div className="welcome-page container d-flex flex-wrap align-items-center justify-content-between my-5">

                    <div className="welcome-div welcome-img" data-aos="fade-right">
                        <img src={placeHolder} height={400} alt="Welcome Image" />
                    </div>

                    <div className="welcome-div welcome-text" data-aos="fade-left">
                        <h1>Welcome to our charity</h1>
                        <div className="underline"></div>
                        <p className='fs-5 my-3'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tempus vestib ulum mauris quis aliquam. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tempus vestibulum mauris quis aliquam. Integer accumsan sodales odio, id tempus velit ullamcorper id. Quisque at erat eu libero consequat tempus. Quisque molestie convallis tempus. Ut semper purus metus, a euismod sapien sodales ac. Duis viverra eleifend fermentum.
                        </p>
                        <button>Read More</button>
                    </div>

                </div>

            </div>
        </>
    )
}