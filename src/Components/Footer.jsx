import React, { Component } from 'react';
import { Link} from 'react-router-dom';
import './Footer.css';

export default class Footer extends Component {
  render() {
    return (
     
      
        <footer className="footer bg-dark text-white py-4">
          <div className="container">
            <div className="row">
              
              {/* Logo and Description Column */}
              <div className="col-md-3 text-center text-md-start mb-3">
                <div className="footer-logo">
                  {/* Replace with your logo if available */}
                  {/* <img src={logoPath} alt="Company Logo" className="footer-logo-img" /> */}
                  <h5>LandConnect</h5>
                  <p>
                    LandConnect is committed to providing top-notch services, connecting landlords, tenants, and advertisers seamlessly.
                  </p>
                </div>
              </div>

              {/* Quick Links Column */}
              <div className="col-md-3 text-center text-md-start mb-3">
                <h5>Quick Links</h5>
                <ul className="list-unstyled">
                  <li><Link to="/home" className="text-white">Home</Link></li>
                  <li><Link to="/about" className="text-white">About</Link></li>
                  <li><Link to="/ads" className="text-white">Advertise</Link></li>
                  <li><Link to="/landlord" className="text-white">Landlord</Link></li>
                  <li><Link to="/user" className="text-white">User</Link></li>
                </ul>
              </div>

              {/* Contact Column */}
              <div className="col-md-3 text-center text-md-start mb-3">
                <h5>Contact Us</h5>
                <p>
                  <i className="fas fa-map-marker-alt"></i> 123 Main Street, CityTown, 12345
                </p>
                <p>
                  <i className="fas fa-envelope"></i> support@landconnect.com
                </p>
                <p>
                  <i className="fas fa-phone-alt"></i> +1 234 567 890
                </p>
              </div>

              {/* Social Media Column */}
              <div className="col-md-3 text-center text-md-start mb-3">
                <h5>Follow Us</h5>
                <div className="social-icons">
                  <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white mx-2">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-white mx-2">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white mx-2">
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                  <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white mx-2">
                    <i className="fab fa-instagram"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="text-center mt-3">
              <p> &copy; 2025 LandConnect. All rights reserved. </p>
            </div>
          </div>
        </footer>
     
    );
  }
}
