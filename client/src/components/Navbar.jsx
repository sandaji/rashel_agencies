import { useState } from "react";
import {Link } from 'react-router-dom';
import { close, menu } from "../assets";
const Navbar = () => {
  const [active, setActive] = useState("Home");
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="w-full flex py-6 justify-between items-center navbar">
      <h3 className="text-gradient font-bold text-[2rem]">RaChaeL AgenCies</h3>

      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        {/* {navLinks.map((nav, index) => ( */}
          {/* // <li
          //   key={nav.id}
          //   className={`font-poppins font-normal cursor-pointer text-[16px] ${
          //     active === nav.title ? "text-white" : "text-dimWhite"
          //   } ${index === navLinks.length - 1 ? "mr-0" : "mr-10"}`}
          //   onClick={() => setActive(nav.title)}
          // >
          //   <a href={`#${nav.id}`}>{nav.title}</a>
          // </li> */}
  
          <li
        
            className="font-poppins font-normal text-white mr-10 cursor-pointer text-[16px]" 
            
          >
            <Link to="/dashboard">Home</Link>
          </li>
          <li className="font-poppins font-normal text-dimWhite mr-10 cursor-pointer text-[16px]"
          >
            <Link to="/dashboard">Dashboard</Link>
          </li>
          <li
             className="font-poppins font-normal text-dimWhite mr-10 cursor-pointer text-[16px]"

          >
            <Link to="/dashboard">Contact us</Link>
          </li>
        
          <li className="font-poppins font-normal text-white mr-10 cursor-pointer text-[16px]"

          ><button className="rounded p-3 bg-[#9926f0]"><Link to="/login"> Login/Register</Link></button>
            
          </li>
        {/* ))} */}
      </ul>

      <div className="sm:hidden flex flex-1 justify-end items-center">
        <img
          src={toggle ? close : menu}
          alt="menu"
          className="w-[28px] h-[28px] object-contain"
          onClick={() => setToggle(!toggle)}
        />

        <div
          className={`${
            !toggle ? "hidden" : "flex"
          } p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
        >
          <ul className="list-none flex justify-end items-start flex-1 flex-col">
            {/* {navLinks.map((nav, index) => ( */}
              <li
                className={`font-poppins font-medium cursor-pointer text-[16px] ${
                  active ? "text-white" : "text-dimWhite"
                } `}
                onClick={() => setActive()}
              >
                <Link to='/'>Home</Link>
              </li>
              <li
                className={`font-poppins font-medium cursor-pointer text-[16px] ${
                  active ? "text-white" : "text-dimWhite"
                } `}
                onClick={() => setActive()}
              >
                <Link to='/'>Dashboard</Link>
              </li>
              <li
                className={`font-poppins font-medium cursor-pointer text-[16px] ${
                  active ? "text-white" : "text-dimWhite"
                } `}
                onClick={() => setActive()}
              >
                <Link to='/'>Contact Us</Link>
              </li>
              <li
                className={`font-poppins font-medium cursor-pointer text-[16px] ${
                  active ? "text-white" : "text-dimWhite"
                } `}
                onClick={() => setActive()}
              >
               <button className="rounded bg-[#9926f0]">
                <Link to="/login"> 
                Login/Register
                </Link>
                </button>
              </li>
              {/* {/* // <li
              //   key={nav.id}
              //   className={`font-poppins font-medium cursor-pointer text-[16px] ${
              //     active === nav.title ? "text-white" : "text-dimWhite"
              //   } ${index === navLinks.length - 1 ? "mb-0" : "mb-4"}`}
              //   onClick={() => setActive(nav.title)}
              // >
              //   <a href={`#${nav.id}`}>{nav.title}</a>
              // </li> 
            ))} */}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
