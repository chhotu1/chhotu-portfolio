import React from 'react';
import Image from 'next/image';
import { Data } from '../public/Data'
const Services = () => {
  const { icons } = Data;
  return (
    <section id="services" className="services section-show">
      <div className="container">
        <div className="section-title">
          <h2>Services</h2>
          <p>My Services</p>
        </div>
        <div className="row">
          <div className="col-lg-4 col-md-6 d-flex align-items-stretch">
            <div className="icon-box">
              <div className="icon"><i><Image src={icons.whiteFileIcon} alt="" width={30} height={30} /></i></div>
              <h4><a href>Lorem Ipsum</a></h4>
              <p>Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi</p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-md-0">
            <div className="icon-box">
              <div className="icon"><i><Image src={icons.whiteFileIcon} alt="" width={30} height={30} /></i></div>
              <h4><a href>Sed ut perspiciatis</a></h4>
              <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore</p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-lg-0">
            <div className="icon-box">
              <div className="icon"><i><Image src={icons.whiteFileIcon} alt="" width={30} height={30} /></i></div>
              <h4><a href>Magni Dolores</a></h4>
              <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services
