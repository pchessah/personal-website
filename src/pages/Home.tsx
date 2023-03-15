import React from 'react'
import Projects from '../components/Projects'
import ContactForm from '../components/ContactForm'
import SideBar from '../components/SideBar';
import WorkExperience from '../components/WorkExperience';
import Education from '../components/Education';

function Home() {
  return (
    <div>
      <div id="homePage">
        <section>
          <span className='title'>
          Paul Chesa, <br />
          Software Engineer
          </span>
          <div className="arrow">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </section>
      </div>

      <br />

      <div className="w3-content w3-padding" style={{ maxWidth: '1564px' }}>
        
        <div className="row projects">
          <Projects />
        </div>
        <br />

        <div className="w3-container w3-padding-32" id="about">
          <h3 className="w3-border-bottom w3-border-light-grey w3-padding-16">
            About
          </h3>
          <div>
            <div
              className="w3-content w3-margin-top"
              style={{ maxWidth: '1400px' }}
            >
              <div className="w3-row-padding">
                <div className="w3-third">
                  <SideBar/>              
                  <br />
                </div>

                <div className="w3-twothird" style={{ color: 'black' }}>
                  <WorkExperience/>
                  <Education/>             
                </div>
              </div>
            </div>
          </div>
        </div>

        <br />
        <div className="w3-container w3-padding-32" id="contact">
          <ContactForm />
        </div>
      </div>
    </div>
  )
}

export default Home
