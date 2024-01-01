import React from 'react'
import { Data } from '../public/Data'
const Resume = () => {
  const { resumeData, aboutMe } = Data;
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
              <h4>{aboutMe.name}</h4>
              <p><em>{aboutMe.long_description}</em></p>
              <p>
              </p><ul>
                <li>{aboutMe.address},Bihar</li>
                <li>{aboutMe.phone}</li>
                <li>{aboutMe.email}</li>
              </ul>
              <p />
            </div>
            <h3 className="resume-title">Education</h3>
            {resumeData && resumeData.education.map((item, index) => {
              return (
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
            {resumeData && resumeData.experience.map((item, index) => {
              return (
                <div className="resume-item" key={index}>
                  <h4>{item.title}</h4>
                  <h5>{item.year}</h5>
                  <p><a rel="noopener noreferrer" target="_blank" href={item.company_website}>{item.company_name}</a> <em>{item.address} </em></p>
                  <p>
                  </p><ul>
                    {item.description.map((desc, i) => {
                      return (
                        <li key={i}>{desc}</li>
                      )
                    })}
                  </ul>
                  <p />
                  {item.projects.map((project,_index)=>{
                    return(
                      <>
                      <a target="_blank" href={project.link} rel="noopener noreferrer">{_index+1}. <em> {project.link} </em></a>
                      <p><ul>
                        <li>{project.technology}</li>
                        {/* <li>{project.description}</li> */}
                        </ul></p>
                      
                      </>
                    )
                  })}
                </div>
              )
            })}

          </div>
        </div>
      </div>
    </section>
  )
}

export default Resume
