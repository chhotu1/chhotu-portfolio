import React from 'react'
import { FaEnvelope, FaFacebook, FaInstagram, FaLinkedin, FaList, FaMap, FaPhone, FaShareAlt, FaSkype, FaTwitter } from "react-icons/fa";

const Contact = () => {
  return (
    <section id="contact" className="contact section-show">
      <div className="container">
        <div className="section-title">
          <h2>Contact</h2>
          <p>Contact Me</p>
        </div>
        <div className="row mt-2">
          <div className="col-md-6 d-flex align-items-stretch">
            <div className="info-box">
              <i><FaMap/></i>
              <h3>My Address</h3>
              <p>Khizersarai gaya,bihar India,824233</p>
            </div>
          </div>
          <div className="col-md-6 mt-4 mt-md-0 d-flex align-items-stretch">
            <div className="info-box">
              <i><FaShareAlt/></i>
              <h3>Social Profiles</h3>
              <div className="social-links">
                <a href="#" className="twitter"><FaTwitter /></a>
                <a href="#" className="facebook"><FaFacebook /></a>
                <a href="#" className="instagram"><FaInstagram /></a>
                <a href="#" className="google-plus"><FaSkype /></a>
                <a href="#" className="linkedin"><FaLinkedin /></a>
              </div>
            </div>
          </div>
          <div className="col-md-6 mt-4 d-flex align-items-stretch">
            <div className="info-box">
              
              <i><FaEnvelope/></i>
              <h3>Email Me</h3>
              <p>chhotukumarsow@gmail.com</p>
            </div>
          </div>
          <div className="col-md-6 mt-4 d-flex align-items-stretch">
            <div className="info-box">
              <i><FaPhone/></i>
              <h3>Call Me</h3>
              <p>+918210118348</p>
            </div>
          </div>
        </div>
        <form action="forms/contact.php" method="post" role="form" className="php-email-form mt-4">
          <div className="row">
            <div className="col-md-6 form-group">
              <input type="text" name="name" className="form-control" id="name" placeholder="Your Name" required />
            </div>
            <div className="col-md-6 form-group mt-3 mt-md-0">
              <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" required />
            </div>
          </div>
          <div className="form-group mt-3">
            <input type="text" className="form-control" name="subject" id="subject" placeholder="Subject" required />
          </div>
          <div className="form-group mt-3">
            <textarea className="form-control" name="message" rows={5} placeholder="Message" required defaultValue={""} />
          </div>
          <div className="my-3">
            <div className="loading">Loading</div>
            <div className="error-message" />
            <div className="sent-message">Your message has been sent. Thank you!</div>
          </div>
          <div className="text-center"><button type="submit">Send Message</button></div>
        </form>
      </div>
    </section>
  )
}

export default Contact
