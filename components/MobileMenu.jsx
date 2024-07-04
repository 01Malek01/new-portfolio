import React, { useState } from 'react';
import { Menu } from '@headlessui/react';
import { FaBars, FaTimes } from 'react-icons/fa';
import Link from 'next/link';

function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="  z-[999] md:hidden">
      <button
        onClick={toggleMenu}
        className="text-black p-3 rounded focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-600"
      >
        {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
      </button>

      <Menu as="nav" className={`absolute top-0 right-0 bg-black bg-opacity-80 w-full h-screen ${isOpen ? 'block' : 'hidden'}`}>
        <div className="flex flex-col items-center justify-center h-full space-y-8">
          <Link href="#who-am-i" scroll={true} className="text-white font-bold text-2xl" onClick={toggleMenu}>
            Who am I?
          </Link>
          <Link href="#skills" scroll={true} className="text-white font-bold text-2xl" onClick={toggleMenu}>
            Skills
          </Link>
          <Link href="#projects" scroll={true} className="text-white font-bold text-2xl" onClick={toggleMenu}>
            Projects
          </Link>
          <Link href="#contact" scroll={true} className="text-white font-bold text-2xl" onClick={toggleMenu}>
            Contact me
          </Link>
        </div>
      </Menu>
    </div>
  );
}

export default MobileMenu;
