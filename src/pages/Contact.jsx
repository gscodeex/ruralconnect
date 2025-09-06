import React from 'react';
import NavbarContact from '../components/NavbarContact';
import FormContato from '../components/FormContato';
import RodapeContact from '../components/RodapeContact';
import './../css/Contact.css';

function Contact() {
  return (
    <div className="d-flex flex-column min-vh-100" style={{ background: 'var(--fundo-claro)' }}>
      <NavbarContact />
      <FormContato />
      <RodapeContact />
    </div>
  );
}

export default Contact;