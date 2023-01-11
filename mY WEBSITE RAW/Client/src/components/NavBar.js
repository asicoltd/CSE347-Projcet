import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            T20 WORLD CUP 2023
            <i class='fab fa-typo3' />
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/matches' className='nav-links' onClick={closeMobileMenu}>
                Matches
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/Stats'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Stats
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/Teams'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Teams
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/Videos'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Videos
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/News'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                News
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/More'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                More
              </Link>
            </li>
          </ul>
          {button && <Button buttonStyle='btn--outline'>Login</Button>}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
