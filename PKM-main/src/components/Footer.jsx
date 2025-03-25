import { Facebook, Instagram, Twitter, Linkedin, Youtube } from "lucide-react";
import pkmLogo from "../assets/Pkm.jpg";

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-800 py-10 px-6">
<hr></hr>
<br></br>
        
      <div className="max-w-7xl mx-auto flex flex-col min-h-[300px]">
        
        {/* Grid Layout for Main Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 flex-grow items-start">
          
          {/* Left Section - Logo & Contact Info */}
          <div className="text-center md:text-left">
          <br></br>
            <h2 className="text-2xl font-semibold italic">
            <img src={pkmLogo} alt="MyWebsite Logo" className="h-10" />
            </h2> 
            <br></br>
            <p className="mt-2 font-semibold">Address:</p>
            <p className="text-sm">Sector 26, Pradhikaran, Nigdi, Pune - 411044</p>
            <p className="mt-2 font-semibold">Contact:</p>
            <p className="text-sm text-blue-600 hover:underline">
              8208442402 <span className="ml-1">burghatemadhur@gmail.com</span>
            </p>
            {/* Social Media Icons */}
            <br></br>
            <div className="flex justify-center md:justify-start space-x-4 mt-4">
              <Facebook className="w-5 h-5 hover:text-blue-600 cursor-pointer" />
              <Instagram className="w-5 h-5 hover:text-pink-500 cursor-pointer" />
              <Twitter className="w-5 h-5 hover:text-blue-400 cursor-pointer" />
              <Linkedin className="w-5 h-5 hover:text-blue-700 cursor-pointer" />
              <Youtube className="w-5 h-5 hover:text-red-500 cursor-pointer" />
            </div>
          </div>

          {/* Center Section - Larger Google Map */}
          <div className="md:col-span-2 flex justify-center">
            <iframe
              title="Google Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3780.2731697210907!2d73.75906487465518!3d18.651733865155634!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2b9e76c8fa205%3A0x1b210131915734fd!2sPCCOE%20-%20Pimpri%20Chinchwad%20College%20Of%20Engineering!5e0!3m2!1sen!2sin!4v1740848349987!5m2!1sen!2sin"
              width="100%"
              height="300"
              className="rounded-lg shadow-lg md:w-[600px]"
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        <br></br>

        </div>
        
        {/* Footer Policy Section (Always at Bottom) */}
        <div className="flex flex-col md:flex-row justify-between items-center mt-auto pt-6 border-t border-gray-300">
          <p className="text-sm text-center md:text-left">© 2025 PKM. All rights reserved.</p>
          <div className="flex space-x-4 mt-2 md:mt-0">
            <a href="#" className="text-sm hover:underline">Privacy Policy</a>
            <a href="#" className="text-sm hover:underline">Terms of Service</a>
            <a href="#" className="text-sm hover:underline">Cookies Settings</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
 