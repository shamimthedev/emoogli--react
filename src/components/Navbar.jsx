import { IoIosArrowDown, IoIosSearch } from "react-icons/io";
import { FaRegUser } from "react-icons/fa6";
import { GoHeart } from "react-icons/go";
import { IoCartOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import { useState } from "react";
import Cart from "./Cart";

const Navbar = () => {
  const [open, setOpen] = useState(false)
  return (
    <div className="navbar h-20">
      <div className="wrapper py-[10px] px-[30px] flex justify-between">
        <div className="left flex items-center text-lg gap-6">
          <div className="item flex items-center">
            <img src="/img/en.png" alt="" />
            <IoIosArrowDown />
          </div>
          <div className="item flex items-center">
            <span>USD</span>
            <IoIosArrowDown />
          </div>
          <div className="item">
            <Link className="link" to='/products/1'>Women</Link>
          </div>
          <div className="item">
            <Link className="link" to='/products/2'>Men</Link>
          </div>
          <div className="item">
            <Link className="link" to='/products/3'>Children</Link>
          </div>
        </div>
        <div className="center text-[30px] tracking-[2px]">
          <Link to='/'>eMoogli</Link>
        </div>
        <div className="right flex items-center justify-between gap-6 text-lg">
          <div className="item">
            <Link className="link" to='/'>Home</Link>
          </div>
          <div className="item">
            <Link className="link" to='/'>About</Link>
          </div>
          <div className="item">
            <Link className="link" to='/'>Contact</Link>
          </div>
          <div className="item">
            <Link className="link" to='/'>Store</Link>
          </div>
          <div className="icons flex items-center gap-[15px] cursor-pointer text-[#777]">
            <IoIosSearch />
            <FaRegUser />
            <GoHeart />
            <div className="cartIcon relative" onClick={() => setOpen(!open)}>
              <IoCartOutline />
              <span className="text-[12px] text-white bg-blue w-5 h-5 rounded-[50%] flex items-center justify-center absolute -top-[10px] -right-[10px] cursor-pointer">0</span>
            </div>
          </div>
        </div>
      </div>
      {open && <Cart />}
    </div>
  )
}

export default Navbar