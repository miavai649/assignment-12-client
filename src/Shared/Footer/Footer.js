import React from 'react';
import { FaFacebook, FaWhatsapp, FaYoutube } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="p-10 bg-secondary text-neutral">
        <div className="footer">
          <div>
            <span className="footer-title">Services</span>
            <Link className="link link-hover">Branding</Link>
            <Link className="link link-hover">Design</Link>
            <Link className="link link-hover">Marketing</Link>
            <Link className="link link-hover">Advertisement</Link>
          </div>
          <div>
            <span className="footer-title">Company</span>
            <Link className="link link-hover">About us</Link>
            <Link className="link link-hover">Contact</Link>
            <Link className="link link-hover">Jobs</Link>
            <Link className="link link-hover">Press kit</Link>
          </div>
          <div>
            <span className="footer-title">Legal</span>
            <Link className="link link-hover">Terms of use</Link>
            <Link className="link link-hover">Privacy policy</Link>
            <Link className="link link-hover">Cookie policy</Link>
            <div className='flex gap-4 mt-3 text-3xl'>
            <FaFacebook></FaFacebook>
            <FaWhatsapp></FaWhatsapp>
            <FaYoutube></FaYoutube>
          </div>
          </div>
          
        </div>
        <div className="text-center mt-32">
          <p>Copyright © 2022 - All right reserved by Fantastic Furniture Ltd.</p>
        </div>
      </footer>
    );
};

export default Footer;