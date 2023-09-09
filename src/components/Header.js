import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
    const [ isMenuDisplayed, setIsMenuDisplayed ] = useState('none');
    const [ isSearchDisplayed, setIsSearchDisplayed ] = useState('none');
    const location = useLocation();
    const [currentPath, setCurrentPath] = useState(location.pathname);

    useEffect(() => {
      const { pathname } = location;
      if(!(currentPath === pathname)){
        closeHamMenu()
      }
      setCurrentPath(pathname);
    }, [location.pathname]);
 
    const openHamMenu = () => {
        setIsMenuDisplayed('block');
    }
    const closeHamMenu = () => {
        setIsMenuDisplayed('none');
    }
    const openSearch = () => {
        setIsSearchDisplayed('block');
    }
    const closeSearch = () => {
        setIsSearchDisplayed('none');
    }

  return (
    <>
        <header id="desktop-header">
            <div className="header-container">
                <div className="header-logo">
                    <Link to="/"><img src="img/logo/rihis-final-logo.svg" alt="" /></Link>
                </div>
                <div className="header-content">
                    <nav className="header-nav">
                        <ul className="nav-list">
                            <li className="nav-item">
                                <Link to="" className="nav-link">Xidmətlər</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="" className="nav-link">E-iştirakçılıq</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="" className="nav-link">Vətəndaş qəbulu</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="" className="nav-link">Məlumatlandırma</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="" className="nav-link dropdown">Faydalı 
                                    <i className='bx bxs-chevron-down' style={{color: '#022345'}} ></i>
                                </Link>
                                <ul className="dropdown-menu">
                                    <li><Link to="/about" className="dropdown-item">Haqqımızda</Link></li>
                                    <li><Link to="/faq" className="dropdown-item">FAQ</Link></li>
                                    <li><Link to="" className="dropdown-item">Təlimatlandırma</Link></li>
                                </ul>
                            </li>
                        </ul>
                    </nav>
                    <div className="search-login">
                        <button className="search-btn" onClick={openSearch}>
                            <i className='bx bx-search' style={{color: '#022345'}} ></i>
                        </button>
                        <div className="login">
                            <Link to="">
                                <img src="img/logo/asan.svg" alt="" />
                                Daxil ol
                            </Link>
                        </div>
                        <button className="hamburger-menu" onClick={openHamMenu}>
                            <i className='bx bx-menu' style={{color: '#222222'}}  ></i>
                        </button>
                    </div>
                </div>
            </div>
            <div className="header-search" style={{display: isSearchDisplayed}}>
                <div className="search-top">
                    <p>Axtarış</p>
                    <button className="search-close" onClick={closeSearch}>
                        <i className='bx bx-x' style={{color: '#022345'}}  ></i>
                    </button>
                </div>
                <div className="search-input-container">
                    <div className="search-input">
                        <i className='bx bx-search' style={{color: '#b0b7c3'}}  ></i>
                        <input type="text" placeholder="Axtar" className="input" />
                        <span className="input-line"></span>
                        <button>E-iştirakçılıq</button>
                        <button>Məlumatlandırma</button>
                    </div>
                </div>
                <div className="search-result"></div>
            </div>
        </header>
        <header id="mobile-header" style={{display: isMenuDisplayed}}>
            <div className="mobile-header-top">
                <div className="login">
                    <Link to="">
                        <img src="img/logo/asan.svg" alt="" />
                        Daxil ol
                    </Link>
                </div>
                <button className="mobile-close" onClick={closeHamMenu}>
                    <i className='bx bx-x' style={{color: '#022345'}}  ></i>
                </button>
            </div>
            <div className="mobile-header-bottom">
                <nav className="mobile-header-nav">
                    <ul>
                        <li><Link to="/about">Haqqımızda</Link></li>
                        <li><Link to="/faq">FAQ</Link></li>
                        <li><Link to="">Təlimatlandırma</Link></li>
                        <li><Link to="">Xidmətlər</Link></li>
                        <li><Link to="">E-iştirakçılıq</Link></li>
                        <li><Link to="">Vətəndaş qəbulu</Link></li>
                        <li><Link to="">Məlumatlandırma</Link></li>
                    </ul>
                </nav>
            </div>
        </header>
        <div className="transparent-div" style={{display: isSearchDisplayed}}>
        </div>
    </>
  )
}

export default Header