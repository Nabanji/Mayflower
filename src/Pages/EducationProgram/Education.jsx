import './Education.css';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';

export default function Education() {
    return (
        <div className="education-program">
            <section className="sports-program-intro">
                <Navbar />
                <div className="sports-program-heading">
                    <h6 className='fs-1'>Programs | Books and Beyond</h6>
                </div>
            </section>

            <section className="sports-intro m-4 d-flex align-items-center justify-content-around">
                <div className="sports-description">
                    <h4 className='mt-3'>
                        Books and Beyond Education Program
                    </h4>
                    <p className='fs-5'>
                        At Mayflower, our mission goes beyond just reading—we’re building brighter futures through literacy, learning, and lifelong curiosity. Our Books and Beyond Program provides underprivileged and aspiring young readers with not just books, but essential educational resources. We proudly donate high-quality books, school supplies, and learning kits to ensure every child can explore new worlds without barriers.
                    </p>
                    <p className="fs-5">
                        We believe that literacy is a gateway to opportunity, which is why we regularly organize community reading circles and storytelling events. These activities bring together children, families, and educators to foster a love for reading, encourage critical thinking, and celebrate the joy of shared knowledge.
                    </p>
                    <p className="fs-5">
                        Through every page turned, idea explored, and story shared, Mayflower Books and Beyond champions values like creativity, empathy, and resilience. We are committed to **nurturing not just readers, but imaginative thinkers** who carry the power of words into every part of their lives.
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