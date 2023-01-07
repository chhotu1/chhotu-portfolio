import Image from 'next/image'
import React from 'react'
import { Data } from '../public/Data'

const Achievement = () => {
    const { achievement } = Data
    return (
        <section id="portfolio" className="portfolio section-show">
            <div className="container">
                <div className="section-title">
                    <h2>Achievement</h2>
                    <p>My Achievement</p>
                </div>

                <div className="row portfolio-container">
                    {achievement && achievement.map((item, index) => {
                        return (
                            <div className="col-lg-4 col-md-6 portfolio-item filter-card" key={index}>
                                <div className="portfolio-wrap">
                                    <Image src={item.image} alt="" width={350} height={250} />
                                    <div className="portfolio-info">
                                        <h4>{item.title}</h4>
                                        <p>{item.date}</p>
                                        <div className="portfolio-links">
                                            <a href="assets/img/portfolio/portfolio-7.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox" title="Card 1"><i className="bx bx-plus" /></a>
                                            <a href="portfolio-details.html" data-gallery="portfolioDetailsGallery" data-glightbox="type: external" className="portfolio-details-lightbox" title="Portfolio Details"><i className="bx bx-link" /></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })}

                </div>
            </div>
        </section>
    )
}

export default Achievement
