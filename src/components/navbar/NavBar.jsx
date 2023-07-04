import { useState } from "react";
import { FaBars, FaWindowClose } from "react-icons/fa";
import { Link } from "react-router-dom";
const NavBar = () => {
  const [show, setShow] = useState(false);
  return (
    <>
      <div className="navbar bg-base-200">
        <div className="flex-1">
          <span className="text-3xl">mohosin</span>
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
            <ul className="menu px-1">
              {show ? (
                <FaWindowClose onClick={() => setShow(!show)} />
              ) : (
                <FaBars onClick={() => setShow(!show)} />
              )}
            </ul>
          }
        </div>
      </div>
      {show && (
        <div className="absolute top-0 left-0 bg-gray-700 text-white right-0 bottom-0 transition-all duration-100 ease-in-out">
          <div className="flex justify-between items-center ml-4">
            <span className="text-3xl">mohosin</span>
            <div className="my-6 mx-6">
              <FaWindowClose onClick={() => setShow(!show)} />
            </div>
          </div>
          {
            <ul className="menu px-1">
              <li onClick={() => setShow(!show)}>
                <Link to="/">Home</Link>
              </li>
              <li onClick={() => setShow(!show)}>
                <Link to="/about">About me</Link>
              </li>
              <li onClick={() => setShow(!show)}>
              <Link to="/projects">Projects</Link>
              </li>
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
