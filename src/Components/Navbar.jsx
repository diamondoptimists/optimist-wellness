import React, { useState } from 'react'
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import Logo from "../assets/Images/Diamond.png"
import { Link, Links } from 'react-router-dom';

const Navbar = () => {
    const [menu, setMenu] = useState(false);

    const toggleMenu = () => {
        setMenu(!menu);
    };
  return (
    <div>
      <header className="bg-[#1a1d24]  w-full z-50">
        <div className="max-w-[1300px] mx-auto flex items-center justify-between py-2 px-4">
          {/* Logo */}
          <a href="/" className="w-[160px] h-[73px]">
            <img
              src={Logo}
              alt="Diamond Logo"
              className="w-full h-full"
              
            />
          </a>

          {/* Desktop Links */}
                  <nav className="hidden md:flex items-center gap-8 text-white">
                      {["Home", "Products", "Careers", "Contact", "Login"].map(
              (item) => (
                <a
                  key={item}
                  href={`${item.toLowerCase()}`}
                  className="hover:text-yellow-300 transition duration-200"
                >
                  {item}
                </a>
              )
            )}        
           
            <Link to="/register" className="px-6 py-3 rounded-md border-2 border-yellow-200 text-yellow-200 hover:bg-yellow-300 hover:text-black font-medium transition duration-200">
              Get Started
            </Link>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-yellow-300 text-2xl"
            onClick={toggleMenu}
          >
            {menu ? <AiOutlineClose /> : <AiOutlineMenu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {menu && (
          <div className="md:hidden bg-[#1a1d24] px-4 pb-4">
            <nav className="flex flex-col gap-4 text-white">
              {[
                "Home",
                "Products",
                "Careers",
                "Contact",
                "Login",
              ].map((item) => (
                <a
                  key={item}
                  href={`${item.toLowerCase()}`}
                  className="hover:text-yellow-300 transition duration-200"
                >
                  {item}
                </a>
              ))}
              <Links to="/register" className="px-6 py-2 mt-4 border-2 border-yellow-300 text-yellow-300 hover:bg-yellow-300 hover:text-black transition duration-200">
                Get Started
              </Links>
            </nav>
          </div>
        )}
      </header>
    </div>
  );
}

export default Navbar