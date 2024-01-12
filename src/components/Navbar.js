import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import '../styles.css';

const Navbar = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    // Fetch user profile data when component mounts
    const fetchUserData = async () => {
      try {
        const response = await axios.get('/blog/api/user-profile/');
        setUserData(response.data);
        setIsAuthenticated(true);
      } catch (error) {
        // Handle the case when the user is not authenticated or profile data is not found
        setIsAuthenticated(false);
      }
    };

    fetchUserData();
  }, []); // Empty dependency array to run the effect only once on mount

  return (
    <nav className="navbar navbar-expand-lg fixed-top">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/blog/">BBstore</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/blog/aboutus">About Us</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/blog/contact">Contact</Link>
            </li>
            <li className="nav-item dropdown">
              <Link className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                More
              </Link>
              <ul className="dropdown-menu">
                <li><Link className="dropdown-item" to="/blog/books">Book Store</Link></li>
                {/* Add more dropdown items as needed */}
              </ul>
            </li>

            {/* Add user authentication dropdown */}
            {isAuthenticated ? (
              <li className="nav-item dropdown">
                <Link className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  <img src={userData.profile_pic || '/static/blog/avatar-3814049_1280.png'} alt="Profile" className="navbar-profile-pic" />
                </Link>
                <ul className="dropdown-menu">
                  <li><Link className="dropdown-item" to="/blog/user-profile">My Profile</Link></li>
                  <li><Link className="dropdown-item" to="/blog/logout">LogOut</Link></li>
                </ul>
              </li>
            ) : (
              <React.Fragment>
                <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" to="/blog/login">LogIn</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" to="/blog/signup">SignUp</Link>
                </li>
              </React.Fragment>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
