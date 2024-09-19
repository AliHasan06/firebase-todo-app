import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav style={styles.navbar}>
      <div style={styles.logo}>
        <h1>MyApp</h1>
      </div>
      <ul style={styles.navLinks}>
        <li>
          <Link to="/register" style={styles.link}>Register</Link>
        </li>
        <li>
          <Link to="/login" style={styles.link}>Login</Link>
        </li>
        <li>
          <Link to="/todo" style={styles.link}>Todo</Link>
        </li>
      </ul>
    </nav>
  );
};

const styles = {
  navbar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '15px 30px',
    backgroundColor: '#f0f0f0',
    boxShadow: '0px 2px 10px rgba(0, 0, 0, 0.1)',
  },
  logo: {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    color: '#333',
  },
  navLinks: {
    display: 'flex',
    listStyle: 'none',
    gap: '30px',
    margin: 0,
  },
  link: {
    color: '#333',
    textDecoration: 'none',
    fontSize: '1.2rem',
    fontWeight: '500',
    padding: '10px 15px',
    borderRadius: '8px',
    transition: 'background-color 0.3s ease',
  },
  linkHover: {
    backgroundColor: '#ddd',
  },
};

export default Navbar;
