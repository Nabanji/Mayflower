import './Empower.css';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';

export default function Empower() {
    return (
        <div className="empower">
            <section className="sports-program-intro">
                <Navbar />
                <div className="sports-program-heading">
                    <h6 className='fs-1'>Programs | Empower Her</h6>
                </div>
            </section>

            <section className="sports-intro m-4 d-flex align-items-center justify-content-around">
                <div className="sports-description">
                    <h4 className='mt-3'>
                        Mayflower Kids FC Sports program
                    </h4>
                    <p className='fs-5'>
                        At Mayflower, our mission goes beyond basic needs—we’re restoring dignity, health, and confidence through compassionate care. Our Empower Her Program provides underprivileged women and girls with essential sanitary products and high-quality innerwear, ensuring they can live, learn, and thrive without barriers. We distribute hygiene kits, reusable pads, and undergarments to combat period poverty and promote bodily autonomy.
                    </p>
                    <p className="fs-5">
                        We believe that menstrual health is a right, not a privilege. That’s why we **organize workshops and community outreach** to educate girls and women on hygiene, reproductive health, and self-care. These initiatives foster open conversations, break stigmas, and create safe spaces where participants can access resources and support.
                    </p>
                    <p className="fs-5">
                        Through every kit donated and every story shared, Empower Her champions values like **resilience, self-worth, and solidarity**. We’re committed to **nurturing not just healthier habits, but empowered leaders** who carry forward the message of dignity for all.
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
    )
}