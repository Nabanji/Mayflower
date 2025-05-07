import './Tasteofhope.css';
import Navbar from '../../components/Navbar/Navbar';

export default function TasteofHope() {
    return (
        <div>
            <Navbar />
            <div className="tasteofhope-intro">
                <h1>Taste of Hope</h1>
                <p>Taste of Hope is our community feeding program aimed at tackling hunger and food insecurity. We provide nutritious meals to children and families in need, ensuring that no one is left behind. By combining love, nutrition, and hope, we strive to make every plate a step toward a healthier, brighter future.</p>
            </div>
        </div>
    );
}