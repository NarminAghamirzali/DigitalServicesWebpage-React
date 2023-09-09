import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer>
            <div className="footer-top">
                <ul className="footer-nav">
                    <li><Link to="/about">Haqqımızda</Link></li>
                    <li><Link to="/faq">FAQ</Link></li>
                    <li><Link to="">Təlimatlandırma</Link></li>
                </ul>
            </div>
            <div className="footer-bottom">
                <div className="footer-bottom-left">
                    <img src="img/logo/mincom_logo_az.svg" alt="" />
                </div>
                <p>Bütün hüquqlar qorunur © 2023</p>
                <div className="footer-bottom-right">
                    <img src="img/logo/iria.png" alt="" className="footer-bottom-right-img" />
                </div>
            </div>
        </footer>
  )
}

export default Footer