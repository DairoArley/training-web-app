import React from "react";
import { Link } from "react-router-dom";
import { Button } from "./Button";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer-container">
      <section className="footer-subscription">
        <p className="footer-suscription-heading">
          Suscribite, recibe las últimas noticias sobre Mountain Bike
        </p>
        <p className="footer-suscription-text">
          puedes canelar la suscripcion cuando quieras
        </p>
        <div className="input-areas">
          <form>
            <input
              type="email"
              name="email"
              placeholde="Your email"
              className="footer-input"
            />
            <Button buttonStyle="btn--outline">Suscribirse</Button>
          </form>
        </div>
      </section>
      <div className="footer-links">
        <div className="footer-link-wrapper">
          <div className="footer-link-items">
            <h2>Conocenos</h2>
            <Link to="/sign-up">How it works</Link>
            <Link to="/">Testimonials</Link>
            <Link to="/">Term of Service</Link>
          </div>
          <div className="footer-link-items">
            <h2>Contact Us</h2>
            <Link to="/">Carrers</Link>
            <Link to="/">Investors</Link>
            <Link to="/">Term of Service</Link>
          </div>
          <div className="footer-link-items">
            <h2>About Us</h2>
            <Link to="/sign-up">How it works</Link>
            <Link to="/">Investors</Link>
            <Link to="/">Term of Service</Link>
          </div>
        </div>
      </div>
      <section className="social-media">
        <div className="social-media-wrap">
          <div className="footer-logo">
            <Link className="social-logo">
              MTB <i className="fab fa-typo3"></i>
            </Link>
          </div>
          <small className="website-rights">TRVL © 2020</small>
          <div className="social-icons">
            <Link
              className="social-icon-link facebook"
              to="/"
              target="_blank"
              aria-label="Facebook"
            >
              <i className="fab fa-facebook-f"/>
            </Link>
            <Link
              className="social-icon-link instagram"
              to="/"
              target="_blank"
              aria-label="instagran"
            >
              <i className="fab fa-instagram"/>
            </Link>
            <Link
              className="social-icon-link twitter"
              to="/"
              target="_blank"
              aria-label="Twiter"
            >
              <i className="fab fa-twiter"></i>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
