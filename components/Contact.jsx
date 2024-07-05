import Link from 'next/link';
import React from 'react';
import { FaEnvelope, FaLinkedin, FaWhatsapp } from 'react-icons/fa';

function Contact() {
  return (
    <section  className="contact-me-wrapper bg-gradient-to-r from-red-800 via-red-900 to-blue-950 min-h-screen flex items-center justify-center p-8">
      <div className="contact-me-container bg-black bg-opacity-10 p-10 rounded-lg shadow-lg max-w-md w-full">
        <h2 className="text-4xl font-bold text-center text-slate-200 mb-8">Contact Me</h2>
        <div className="contact-details space-y-4">
          <div className="contact-item flex items-center space-x-4">
            <FaWhatsapp className="text-slate-200 text-2xl" />
            <Link href={"https://wa.me/201125485384"} className="text-slate-200 text-xl link">01125485384</Link>
          </div>
          <div className="contact-item flex items-center space-x-4">
            <FaEnvelope className="text-slate-200 text-2xl" />
            <Link href="mailto:malekmostafa0051@gmail.com" className="text-slate-200 text-xl link">Gmail</Link>
          </div>
          <div className="contact-item flex items-center space-x-4">
            <FaLinkedin className="text-slate-200 text-2xl" />
            <Link href="https://www.linkedin.com/in/malek-mostafa-salah-026362222" target="_blank" className="text-slate-200 text-xl link">LinkedIn</Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
