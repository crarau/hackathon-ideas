import React from 'react';
import Navbar from '@theme-original/Navbar';

export default function NavbarWrapper(props) {
  // Force gradient background on navbar mount
  React.useEffect(() => {
    const navbar = document.querySelector('.navbar');
    if (navbar) {
      navbar.style.background = 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)';
      navbar.style.backgroundColor = '#667eea';
    }
  }, []);

  return <Navbar {...props} />;
}