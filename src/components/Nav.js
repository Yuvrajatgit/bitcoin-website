import React, {useState}  from 'react';
import './Nav.css';
import {FaBars, FaTimes} from 'react-icons/fa';

function Nav() {

const [click, setClick] = useState(false);
const [mobile, setMobile] = useState(false);
const handleClick = () => setClick(!click);


  return (
    <div className='header'>
        <div className='container'>
        <h1>EK<span className='primary'>AD</span></h1>
        <ul className={!click ? "nav-links" : "nav-links mobile"}>
            <li>
                <a href='/'>Home</a>
            </li>
            <li>
                <a href='/'>Featured</a>
            </li>
            <li>
                <a href='/'>Earn</a>
            </li>
            <li>
                <a href='/'>Contact</a>
            </li>
        </ul>
        <div className='active'>
            <button className='btn'>Signup</button>
        </div>
        <button className='hamburger' onClick={handleClick}>
            {click ? (<FaTimes size={25} style={{color:'#333'}}/>) : (<FaBars size={25} style={{color:'#333'}}/>)}  
        </button>
        </div>
    </div>
  )
}

export default Nav;
