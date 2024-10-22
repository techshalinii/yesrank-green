'use client';
import ArrowRight from "@/assets/arrow-right.svg";
import MenuIcon from "@/assets/menu.svg";
import { useState } from "react";

export const Header = () => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

  const toggleNavbar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };

  const closeDrawer = () => {
    setMobileDrawerOpen(false);
  };

  return (
    <div className="sticky top-0 backdrop-blur-sm z-20">
      <div className="flex justify-center items-center py-3 bg-black text-white text-sm gap-3">
        <p className="text-white/60 hidden md:block">Boost your productivity</p>
        <div className="inline-flex gap-1 items-center">
          <p>Get started for free</p>
          <ArrowRight className="h-4 w-4 inline-flex justify-center items-center" />
        </div>
      </div>

      <div className="py-5">
        <div className="container">
          <div className="flex items-center justify-between">
            <span className="font-bold">YesRank</span>
            <MenuIcon className="h-5 w-5 md:hidden" onClick={toggleNavbar} />
            <nav className="hidden md:flex gap-6 text-black/60 items-center">
              <a href="#home" onClick={closeDrawer}>Home</a>
              <a href="#service">Services</a>
              <a href="#">Case Studies</a>
              <a href="#">About Us</a>
              <a href="/contact">Contact Us</a>
              <button className="bg-black text-white px-4 py-2 rounded-lg font-medium inline-flex align-items justify-center tracking-tight">
                Get a Free Consultation
              </button>
            </nav>
          </div>
        </div>

        {mobileDrawerOpen && (
          <div className="fixed right-0 z-20 bg-[#EAEEFE] w-full p-8 flex flex-col justify-center items-center lg:hidden">
            <nav className="flex flex-col gap-6 text-black items-center">
              <a href="#home" onClick={closeDrawer}>Home</a>
              <a href="#service" onClick={closeDrawer}>Services</a>
              <a href="#" onClick={closeDrawer}>Case Studies</a>
              <a href="#" onClick={closeDrawer}>About Us</a>
              <a href="/contact" onClick={closeDrawer}>Contact Us</a>
              <button className="bg-black text-white px-4 py-2 rounded-lg font-medium inline-flex align-items justify-center tracking-tight">
                Get a Free Consultation
              </button>
            </nav>
          </div>
        )}
      </div>
    </div>
  );
};
