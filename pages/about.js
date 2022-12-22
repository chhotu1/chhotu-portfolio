import React from 'react'
import { ProgressBar } from 'react-bootstrap';
import Slider from "react-slick";
import { FaChevronRight, FaHeadphonesAlt, FaQuoteLeft, FaQuoteRight, FaRegAddressCard, FaRegFile, FaRegSmile } from 'react-icons/fa';
import { Data } from '../public/Data';
const About = () => {
    const { aboutData,aboutMe } = Data;
    const settings = {
        dots: true,
        infinite: true,
        arrows: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 2,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    autoplay: true,
                    dots: false,
                },
            },
        ],
    };
    return (
        <section id="about" className="about section-show">
            {/* ======= About Me ======= */}
            <div className="about-me container">
                <div className="section-title">
                    <h2>About</h2>
                    <p>Learn more about me</p>
                </div>
                <div className="row">
                    <div className="col-lg-4" data-aos="fade-right">
                        <img src="assets/img/me.jpg" className="img-fluid" alt="" style={{ height: 360, width: '100%' }} />
                    </div>
                    <div className="col-lg-8 pt-4 pt-lg-0 content" data-aos="fade-left">
                        <h3>{aboutMe.designation}</h3>
                        <p className="fst-italic">
                            {aboutMe.short_description}
                        </p>
                        <div className="row">
                            <div className="col-lg-6">
                                <ul>
                                    <li><i><FaChevronRight /></i> <strong>Birthday:</strong> <span>{aboutMe.dob}</span></li>
                                    <li><i><FaChevronRight /></i> <strong>Website:</strong> <span>{aboutMe.website}</span></li>
                                    <li><i><FaChevronRight /></i> <strong>Phone:</strong> <span>{aboutMe.phone}</span></li>
                                    <li><i><FaChevronRight /></i> <strong>City:</strong> <span>{aboutMe.address}</span></li>
                                </ul>
                            </div>
                            <div className="col-lg-6">
                                <ul>
                                    <li><i><FaChevronRight /></i> <strong>Age:</strong> <span>{aboutMe.age}</span></li>
                                    <li><i><FaChevronRight /></i> <strong>Degree:</strong> <span>{aboutMe.degree}</span></li>
                                    <li><i><FaChevronRight /></i> <strong>PhEmailone:</strong> <span>{aboutMe.email}</span></li>
                                    <li><i><FaChevronRight /></i> <strong>Freelance:</strong> <span>{aboutMe.freelance}</span></li>
                                </ul>
                            </div>
                        </div>
                        <p>{aboutMe.long_description}</p>
                    </div>
                </div>
            </div>{/* End About Me */}
            {/* ======= Counts ======= */}
            <div className="counts container">
                <div className="row">
                    <div className="col-lg-3 col-md-6">
                        <div className="count-box">
                            <i><FaRegSmile /></i>
                            <span className="purecounter">788</span>
                            <p>Happy Clients</p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 mt-5 mt-md-0">
                        <div className="count-box">
                            <i><FaRegFile /></i>
                            <span className="purecounter">788</span>
                            <p>Projects</p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 mt-5 mt-lg-0">
                        <div className="count-box">
                            <i><FaHeadphonesAlt /></i>
                            <span className="purecounter">788</span>
                            <p>Hours Of Support</p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 mt-5 mt-lg-0">
                        <div className="count-box">
                            <i><FaRegAddressCard /></i>
                            <span className="purecounter">88</span>
                            <p>Awards</p>
                        </div>
                    </div>
                </div>
            </div>{/* End Counts */}
            {/* ======= Skills  ======= */}
            <div className="skills container">
                <div className="section-title">
                    <h2>Skills</h2>
                </div>
                <div className="row skills-content">
                    {aboutData && aboutData.skill.map((item, index) => {
                        return (
                            <div className="col-lg-6" key={index}>
                                <div className="progress" >
                                    <span className="skill">{item.title} <i className="val">{item.rank}%</i></span>
                                    <div className="progress-bar-wrap">
                                        <ProgressBar now={item.rank} />
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>{/* End Skills */}
            {/* ======= Interests ======= */}
            <div className="interests container">
                <div className="section-title">
                    <h2>Interests</h2>
                </div>
                <div className="row">
                    {aboutData.interests.map((item, index) => {
                        return (
                            <div className="col-lg-3 col-md-4 mt-2" key={index}>
                                <div className="icon-box">
                                    <i className="ri-store-line" />
                                    <h3>{item}</h3>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
            {/* ======= Testimonials ======= */}
            <div className="testimonials container">
                <div className="section-title">
                    <h2>Testimonials</h2>
                </div>
                <div className="testimonials-slider swiper" data-aos="fade-up" data-aos-delay={100}>
                    <div className="swiper-wrapper">

                        <Slider {...settings} >
                            {aboutData.testimonials.map((item, index) => {
                                return (
                                    <div className="swiper-slide" key={index}>
                                        <div className="testimonial-item">
                                            <p>
                                                <i className="quote-icon-left"><FaQuoteLeft /></i>
                                                {item.description}
                                                <i className="quote-icon-right"><FaQuoteRight /></i>
                                            </p>
                                            <img src={item.image} className="testimonial-img" alt="" />
                                            <h3>{item.name}</h3>
                                            <h4>{item.designation}</h4>
                                        </div>
                                    </div>
                                )
                            })}
                        </Slider>
                    </div>
                    <div className="swiper-pagination" />
                </div>
                <div className="owl-carousel testimonials-carousel">
                </div>
            </div>{/* End Testimonials  */}
        </section>
    )
}

export default About
