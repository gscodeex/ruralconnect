import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './../assets/logo.svg';

function NavbarContact() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-gradiente shadow-sm fixed-top">
      <div className="container">
        <Link to="/" className="navbar-brand">
          <img src={Logo} alt="Logomarca RuralConnect" height="35" width="100" className="me-2" />
          RuralConnect
        </Link>
      </div>
    </nav>
  );
}

export default NavbarContact;