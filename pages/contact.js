import React from 'react'
import Image from 'next/image';
import { Data } from '../public/Data';

const Contact = () => {
  const { aboutMe, icons } = Data;

  const handleSumbit=(e)=>{
    e.preventDefault();
    alert("Form submitted successfully");
    document.getElementById("contact-form").reset();
  }

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
              <i><Image src={icons.locationIcon} alt="facebook" height={23} width={23} /></i>
              <h3>My Address</h3>
              <p>{aboutMe.address}</p>
            </div>
          </div>
          <div className="col-md-6 mt-4 mt-md-0 d-flex align-items-stretch">
            <div className="info-box">
              <i><Image src={icons.shareIcon} alt="facebook" height={25} width={25} /></i>
              <h3>Social Profiles</h3>
              <div className="social-links">
                <a className="facebook" target="_blank" href={aboutMe.facebook} rel="noopener noreferrer">
                  <Image src={icons.facebookIcon} alt="facebook" height={25} width={25} />
                </a>
                {/* <a className="twitter" target="_blank" href={aboutMe.twitter} rel="noopener noreferrer">
                  <Image src={icons.twitterIcon} alt="facebook" height={25} width={25} />
                </a> */}
                <a className="instagram" target="_blank" href={aboutMe.instagram} rel="noopener noreferrer">
                  <Image src={icons.instagramIcon} alt="facebook" height={25} width={25} />
                </a>
                <a className="linkedin" target="_blank" href={aboutMe.linkedin} rel="noopener noreferrer">
                  <Image src={icons.linkedinIcon} alt="facebook" height={23} width={23} />
                </a>

              </div>
            </div>
          </div>
          <div className="col-md-6 mt-4 d-flex align-items-stretch">
            <div className="info-box">

              <i><Image src={icons.emailIcon} alt="facebook" height={23} width={23} /></i>
              <h3>Email Me</h3>
              <p> <a href={`mailto:${aboutMe.email}`}>{aboutMe.email}</a></p>
            </div>
          </div>
          <div className="col-md-6 mt-4 d-flex align-items-stretch">
            <div className="info-box">
              <i><Image src={icons.phoneIcon} alt="facebook" height={23} width={23} /></i>
              <h3>Call Me</h3>
              <p>{aboutMe.phone}</p>
            </div>
          </div>
        </div>
        {/* <form onSubmit={handleSumbit}  id="contact-form" role="form" className="php-email-form mt-4">
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
        </form> */}
      </div>
    </section>
  )
}

export default Contact
