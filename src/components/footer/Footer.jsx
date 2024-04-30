import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-800 shadow-lg text-white px-6 py-4">
      <div className="container mx-auto max-w-4xl flex flex-wrap justify-between items-center">
        <div className="w-full md:w-1/3 mb-4 md:mb-0">
          <h3 className="text-lg mb-2">Contact Us</h3>
          <p>Email: hamro@company.com</p>
          <p>Phone:9865474624</p>
        </div>
        <div className="w-full md:w-1/3 mb-4 md:mb-0">
          <h3 className="text-lg mb-2">Address</h3>
          <p>Near BloodBank,Amarpath Street</p>
          <p>Butwal</p>
        </div>
        <div className="w-full md:w-1/3">
          <h3 className="text-lg mb-2">Quick Links</h3>
          <ul className="text-sm">
            <li><Link to={"/terms"}>Terms & Conditions</Link></li>
            <li><Link to={"/privacy"}>Privacy Policy</Link></li>
            <li><Link to={"/returns"}>Returns & Refunds</Link></li>
          </ul>
        </div>
      </div>
      <div className="mt-4 text-center">
        <p>&copy; {new Date().getFullYear()} SynthBit Tech. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;