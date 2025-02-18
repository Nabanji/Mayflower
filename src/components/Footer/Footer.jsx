import './Footer.css';
import { FaInstagram } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";

// import AOS from "aos";
// import "aos/dist/aos.css";


export default function Footer() {

    return (
        <section className="footer d-flex flex-column pt-3" data-aos='fade-up'>
            <div className='d-flex justify-content-around major'>
                <div className="intro">
                    <h1 className='fs-6'>mayflower children's foundation</h1>
                    <p className='h2'>Change a child's future now</p>
                    <button>Donate</button>
                </div>
                <div className="links">
                    <h1 className='fs-4'>Links</h1>
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/programs">Programs</a></li>
                        <li><a href="/partner-opportunities">Partner program</a></li>
                        <li><a href="#">Teams & Volunteers</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                </div>
                <div className="location">
                    <h1 className='fs-4'>Contact Us</h1>
                    <div className="contact">
                        <p>Vienna Court, Nairobi, KE</p>
                        <p>info@mayflowerchildrens.com</p>
                        <p>+ 254 704 281 959</p>
                    </div>
                </div>
            </div>
            <div className='socials d-flex justify-content-between align-items-center px-4'>
                <h1 className='fs-4'>Get connected with us on social networks</h1>
                <div className="social-links d-flex gap-3">
                    <FaInstagram className='social-icon' size={24} />
                    <FaTwitter className='social-icon' size={24}/>
                    <FaFacebookF className='social-icon' size={24} />
                </div>
            </div>

            <div className="copyright mt-3">
                <p className='fs-6'>&copy;{new Date().getFullYear()} Copyright: Mayflower Children's Foundation</p>
            </div>

        </section>
    )
}