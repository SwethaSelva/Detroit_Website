import { FaInstagram, FaLinkedin } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8 px-4 mt-20">
      <div className="flex justify-between flex-wrap">
        <div>
          <h4 className="font-semibold mb-2">Stay Connected</h4>
          <div className="flex gap-4">
            <FaInstagram />
            <FaLinkedin />
          </div>
        </div>
        <div>
          <h4 className="font-semibold mb-2">CompanyName</h4>
          <ul>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}