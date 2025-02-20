import { useEffect } from 'react';
import './Team.css';
import Navbar from "../../components/Navbar/Navbar";
import Footer from '../../components/Footer/Footer';
import jasonPhoto from '../../assets/jason.png';
import jackiePhoto from '../../assets/jackie.png';
import bettyPhoto from '../../assets/betty.png';
import shikoPhoto from '../../assets/Shiko.png';
import faithPhoto from '../../assets/faith.png'
import katePhoto from '../../assets/kate.png';
import lucyPhoto from '../../assets/lucy.png';
import johnPhoto from '../../assets/john.png';
import christinePhoto from '../../assets/christine.png';

import AOS from "aos";
import "aos/dist/aos.css";


export default function Team() {

    const teamMembers = [
        {
            name: 'Jackline Muchai',
            role: 'Director',
            photo: jackiePhoto
        },
        {
            name: 'Jason Brewer',
            role: 'Director',
            photo: jasonPhoto
        },
        {
            name: 'Kate Kangcohi',
            role: 'Director',
            photo: katePhoto
        },
        {
            name: 'Lucy Syombua',
            role: 'Project Coordinator',
            photo: lucyPhoto
        },
        {
            name: 'Shiko Muchai',
            role: 'Consultant',
            photo: shikoPhoto
        },
        {
            name: 'Faith Kinyanjui',
            role: 'Communications Consultant',
            photo: faithPhoto
        },
        {
            name: 'Betty Gathoni',
            role: 'Volunteer',
            photo: bettyPhoto
        },
        {
            name: 'John Nzomo',
            role: 'Volunteer',
            photo: johnPhoto
        },
        {
            name: 'Christine',
            role: 'Volunteer',
            photo: christinePhoto
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
            <Navbar />
            <div className="team d-flex flex-column align-items-center mt-5">
                <h1>Meet the Team</h1>
                <div className="underline"></div>
                <div className="team-members my-3" data-aos='fade-up'>
                    {teamMembers.map((member, index) => (
                        <div key={index} className="team-member">
                            <img src={member.photo} alt={member.name} loading='lazy' />
                            <h4 className='mt-1'>{member.name}</h4>
                            <p>{member.role}</p>
                        </div>
                    ))}
                </div>
            </div>
            <Footer />
        </>
    )
}