import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import './Sports.css';

export default function Sports() {
    
    return (
        <div>
            <section className="sports-program-intro">
                <Navbar />
                <div className="sports-program-heading">
                    <h6 className='fs-1'>Programs | Sports Program</h6>
                </div>
            </section>
            
            <section className="sports-intro m-4 d-flex align-items-center justify-content-around">
                <div className="sports-description">
                    <h4 className='mt-3'>
                        Mayflower Kids FC Sports program
                    </h4>
                    <p className='fs-5'>
                        At Mayflower, our mission goes beyond just sports—we’re building brighter futures through community, character, and care. Our Sports Program provides underprivileged and aspiring young athletes with not just coaching, but essential sports resources. We proudly donate high-quality jerseys, balls, shoes, and training kits to ensure that every child can participate without barriers.
                    </p>
                    <p className="fs-5">
                        We believe that sports are a powerful tool for social connection, which is why we regularly **organize community games and outreach events**. These activities bring together local kids, families, and sports enthusiasts to foster unity, encourage physical wellness, and celebrate teamwork.
                    </p>
                    <p className="fs-5">
                        Through every pass, sprint, and goal, Mayflower Kids FC champions values like discipline, confidence, and resilience. We are committed to **nurturing not just athletes, but responsible leaders** who carry the spirit of sportsmanship into every part of their lives.
                    </p>

                </div>
                <div className="sports-image d-flex justify-content-center">
                    <img src="https://picsum.photos/500" alt="Sports Program" className='img-fluid' />
                </div>
            </section>

            <section className="sports-gallery my-5 d-flex flex-column align-items-center">
                <h1 className='text-center'>Gallery</h1>
                <div className="underline"></div>
                <div className="sports-gallery-images d-flex justify-content-center flex-wrap gap-3 mt-4">
                    <img src="https://picsum.photos/200" alt="Sports Gallery" className='img-fluid' />
                    <img src="https://picsum.photos/200" alt="Sports Gallery" className='img-fluid' />
                    <img src="https://picsum.photos/200" alt="Sports Gallery" className='img-fluid' />
                    <img src="https://picsum.photos/200" alt="Sports Gallery" className='img-fluid' />
                    <img src="https://picsum.photos/200" alt="Sports Gallery" className='img-fluid' />
                    <img src="https://picsum.photos/200" alt="Sports Gallery" className='img-fluid' />
                </div>
            </section>

            <section className="footer">
                <Footer />
            </section>
            
        </div>
    );
}