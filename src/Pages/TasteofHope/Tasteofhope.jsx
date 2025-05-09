import './Tasteofhope.css';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';

export default function TasteofHope() {
    return (
        <div>
            <section className="sports-program-intro">
                <Navbar />
                <div className="sports-program-heading">
                    <h6 className='fs-1'>Programs | Taste of Hope feeding program</h6>
                </div>
            </section>

            <section className="sports-intro m-4 d-flex align-items-center justify-content-around">
                <div className="sports-description">
                    <h4 className='mt-3'>
                        Mayflower Kids FC Sports program
                    </h4>
                    <p className='fs-5'>
                        At Mayflower, our mission goes beyond meals—we’re serving hope, dignity, and strength one plate at a time. Our Taste of Hope Program provides nutritious meals to underprivileged families, children, and individuals facing food insecurity. We believe no one should go to bed hungry, which is why we distribute fresh, wholesome food and pantry staples to ensure everyone in our community has access to the nourishment they deserve.
                    </p>
                    <p className="fs-5">
                        Food is more than sustenance; it’s a foundation for life. That’s why we organize community kitchens and outreach drives to bring people together. These initiatives not only feed bodies but also foster connection, teach sustainable habits, and remind every participant that they are valued.
                    </p>
                    <p className="fs-5">
                        Through every meal shared and every hand served, Taste of Hope champions **compassion, resilience, and unity**. We’re committed to nourishing not just hunger, but brighter futures—because a fed community is a thriving community.
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