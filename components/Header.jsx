'use client';
import React, { useEffect } from "react";
import "../styles/Header.css";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi";
import Link from "next/link";
import MobileMenu from "./MobileMenu";

function Header() {
  useEffect(() => {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
        });
      });
    }, []);
  })
  return (
    <div className="header-wrapper ">

      <div className="header-container flex flex-row items-center  bg-slate-300 h-[60px] justify-between w-full">

          <MobileMenu  />
        <div className="logo flex items-center justify-center ">
          <span className="custom-font ml-5 md:text-[1.6rem] text-black">Malek Mostafa</span>
        </div>
        <div className="nav flex flex-row gap-[3rem] justify-center items-center ">
          <Link href={'#who-am-i'} scroll={true} className="text-black  font-bold nav-link">Who am I ?</Link>
          <Link href={'#skills'} scroll={true} className=" text-black font-bold nav-link">Skills</Link>
          <Link href={'#projects'} scroll={true} className=" text-black font-bold nav-link">Projects</Link>
          <Link href={'#contact'} scroll={true} className=" text-black font-bold nav-link">Contact me</Link>
        </div>
        <div className="accounts flex flex-row gap-7 justify-center items-center mr-5">
          <span>
            <Link href="https://github.com/01Malek01">
              <BsGithub className="text-[25px] text-black" />
            </Link>
          </span>
          <span>
            <Link href="https://www.linkedin.com/in/malek-mostafa-salah-026362222/">
              <BsLinkedin className="text-[25px] text-black" />
            </Link>
          </span>
          <span>
            <a href="mailto:malekmostafa0051@gmail.com">
              <HiOutlineMail className="text-[25px] text-black" />{" "}
            </a>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Header;
