import React, { useRef, useState } from 'react';
import './Navbar.css';
import logo from '../../assets/logo.png';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import menu_open from '../../assets/menu_open.svg';
import menu_close from '../../assets/menu_close.svg';

const Navbar = () => {
  const [menu, setMenu] = useState('home');
  const menuRef = useRef();

  const openMenu = () => {
    menuRef.current.style.right = '0';
  };

  const closeMenu = () => {
    menuRef.current.style.right = '-300px';
  };

  const handleMenuClick = (section) => {
    setMenu(section); // Set the active menu item
    closeMenu(); // Close the menu
  };

  return (
    <div className="navbar">
      <img src={logo} alt="Logo" className="logo" />
      <img src={menu_open} onClick={openMenu} alt="Open Menu" className="nav-mob-open" />

      {/* Navigation Menu */}
      <ul ref={menuRef} className="nav-menu">
        <img src={menu_close} onClick={closeMenu} alt="Close Menu" className="nav-mob-close" />
        
        {/* Home Link */}
        <li>
          <AnchorLink
            className="anchor-link"
            href="#home"
            offset={100}
            onClick={() => handleMenuClick('home')} // Call handleMenuClick
          >
            <p>Home</p>
          </AnchorLink>
        </li>

        {/* About Me Link */}
        <li>
          <AnchorLink
            className="anchor-link"
            href="#about"
            offset={50}
            onClick={() => handleMenuClick('about')} // Call handleMenuClick
          >
            <p>About Me</p>
          </AnchorLink>
        </li>

        {/* Services Link */}
        <li>
          <AnchorLink
            className="anchor-link"
            href="#services"
            offset={50}
            onClick={() => handleMenuClick('services')} // Call handleMenuClick
          >
            <p>Services</p>
          </AnchorLink>
        </li>

        {/* Portfolio Link */}
        <li>
          <AnchorLink
            className="anchor-link"
            href="#work"
            offset={50}
            onClick={() => handleMenuClick('work')} // Call handleMenuClick
          >
            <p>Portfolio</p>
          </AnchorLink>
        </li>

        {/* Contact Link */}
        <li>
          <AnchorLink
            className="anchor-link"
            href="#contact"
            offset={50}
            onClick={() => handleMenuClick('contact')} // Call handleMenuClick
          >
            <p>Contact</p>
          </AnchorLink>
        </li>
      </ul>

      {/* Connect Button */}
      <div className="nav-connect">
        <AnchorLink className="anchor-link" href="#contact" offset={50} onClick={closeMenu}>
          Connect With Me
        </AnchorLink>
      </div>
    </div>
  );
};

export default Navbar;
