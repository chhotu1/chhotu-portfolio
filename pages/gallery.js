import Image from 'next/image'
import React from 'react'
import { Data } from '../public/Data'

const Gallery = () => {
    const { galleries } = Data
    return (
        <section id="portfolio" className="portfolio section-show">
            <div className="container">
                <div className="section-title">
                    <h2>Gallery</h2>
                    <p>My Gallery</p>
                </div>

                <div className="row portfolio-container">
                    {galleries && galleries.map((item, index) => {
                        return (
                            <div className="col-lg-4 col-md-6 portfolio-item filter-card" key={index}>
                                <div className="portfolio-wrap">
                                    <Image src={item.image} alt="" width={350} height={300} />
                                </div>
                            </div>
                        )
                    })}

                </div>
            </div>
        </section>
    )
}

export default Gallery
