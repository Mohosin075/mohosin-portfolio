import { useState } from "react";
import { FaBars, FaWindowClose } from "react-icons/fa";
import { Link } from "react-router-dom";
const NavBar = () => {
  const [show, setShow] = useState(false);
  return (
    <>
      <div className="navbar">
        <div className="flex-1">
          <span className="text-3xl"><Link><img className="w-16 cursor-pointer rounded-lg" src="https://i.ibb.co/0GLTPyR/logo-pdf.jpg" alt="" /></Link></span>
        </div>
        <div className={`flex-none hidden md:block`}>
          {
            <ul className="menu menu-horizontal px-1">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About me</Link>
              </li>
              <li>
                <Link to="/projects">Projects</Link>
              </li>
              <li>
                <Link to="/contact">Contact me</Link>
              </li>
            </ul>
          }
        </div>
        <div className={`flex-none block md:hidden`}>
          {
            <ul className="menu px-1 cursor-pointer">
              {show ? (
                <FaWindowClose onClick={() => setShow(!show)} />
              ) : (
                <FaBars className="text-2xl cursor-pointer" onClick={() => setShow(!show)} />
              )}
            </ul>
          }
        </div>
      </div>
      {show && (
        <div className="absolute top-0 left-0 bg-gray-100 z-50 text-white right-0 bottom-0 transition-all duration-100 ease-in-out">
          <div className="flex justify-between items-center ml-4">
            <span className="text-3xl"><Link><img className="w-16 cursor-pointer rounded-lg" src="https://i.ibb.co/0GLTPyR/logo-pdf.jpg" alt="" /></Link></span>
            <div className="my-6 mx-6 cursor-pointer text-black">
              <FaWindowClose className="text-3xl" onClick={() => setShow(!show)} />
            </div>
          </div>
          <hr className="w-11/12 mx-auto border-gray-400"/>
          {
            <ul className="menu px-1 text-black">
              <li onClick={() => setShow(!show)}>
                <Link to="/">Home</Link>
              </li>
                <hr className="w-3/12 ml-4 border-gray-400"/>
              <li onClick={() => setShow(!show)}>
                <Link to="/about">About me</Link>
              </li>
              <hr className="w-2/12 ml-4 border-gray-400"/>
              <li onClick={() => setShow(!show)}>
              <Link to="/projects">Projects</Link>
              </li>
              <hr className="w-3/12 ml-4 border-gray-400"/>
              <li onClick={() => setShow(!show)}>
                <Link to="/contact">Contact me</Link>
              </li>
            </ul>
          }
        </div>
      )}
    </>
  );
};

export default NavBar;
