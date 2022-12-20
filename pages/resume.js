import React from 'react'
import { Data } from '../public/Data'
const Resume = () => {
  const {resumeData} = Data;
  return (
    <section id="resume" className="resume section-show">
      <div className="container">
        <div className="section-title">
          <h2>Resume</h2>
          <p>Check My Resume</p>
        </div>
        <div className="row">
          <div className="col-lg-6">
            <h3 className="resume-title">Sumary</h3>
            <div className="resume-item pb-0">
              <h4>Chhotu sow</h4>
              <p><em>Innovative and deadline-driven Graphic Designer with 3+ years of experience designing and developing user-centered digital/print marketing material from initial concept to final, polished deliverable.</em></p>
              <p>
              </p><ul>
                <li>Khizersarai gaya,bihar India,824233</li>
                <li>+917739422219</li>
                <li>chhotukumaarsow@gmail.com</li>
              </ul>
              <p />
            </div>
            <h3 className="resume-title">Education</h3>
            {resumeData && resumeData.education.map((item,index)=>{
              return(
                <div className="resume-item" key={index}>
                  <h4>{item.title}</h4>
                  <h5>{item.year}</h5>
                  <p><em>{item.college}</em></p>
                  <p>{item.description}</p>
                </div>
              )
            })}
          </div>
          <div className="col-lg-6">
            <h3 className="resume-title">Professional Experience</h3>
            {resumeData && resumeData.experience.map((item,index)=>{
              return(
                <div className="resume-item" key={index}>
                  <h4>{item.title}</h4>
                  <h5>{item.year}</h5>
                  <p><em>{item.address} </em></p>
                  <p>
                  </p><ul>
                   {item.description.map((desc,i)=>{
                    return(
                      <li key={i}>{desc}</li>
                    )
                   })}
                  </ul>
                  <p />
                </div>
                )})}
            
          </div>
        </div>
      </div>
    </section>
  )
}

export default Resume
