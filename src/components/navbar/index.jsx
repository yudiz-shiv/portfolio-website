import React,{useState} from "react";
import { Link } from "react-router-dom";
import "./style.scss";
import { FaReact,FaBars, FaTimes } from "react-icons/fa";
import { navMenus } from "./config";
const Navbar = () => {
    const [toggle,setToggle] =useState(false);
    const handleClick=()=>{
        setToggle(!toggle)
    }
  return (
    <header>
      <nav className="navbar">
        <div className="navbar_container">
          <Link to="/" className="navbar_container_logo">
            <FaReact size={30}/>
          </Link>
          <ul className={toggle ? "navbar_menu active" : "navbar_menu"}>
            {
                navMenus.map((item,index)=>{
                    const {to,label} = item
                    return(
                        <Link key={index} to={to} className="navbar_menu_link">{label}</Link>
                    )
                })
            }
          </ul>
        </div>
        <div className="nav_icon" onClick={handleClick}>
        {
            toggle ? <FaTimes size={30}/> : <FaBars size={30}/>
        }
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
