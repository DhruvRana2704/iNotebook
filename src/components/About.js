import React from 'react'

const About = () => {
  return (
    <div style={{fontSize:"1.5rem",marginTop:"8rem"}}>
      <h1 className='bungee-spice-regular'>iNoteBook</h1>
      Welcome to iNotebook, a secure and reliable platform for managing your notes effortlessly. iNotebook is designed to provide a seamless note-taking experience with cutting-edge features:
      <div className="accordion my-4" id="accordionExample" >
  <div className="accordion-item" style={{fontSize:"1.2rem"}}>
    <h2 className="accordion-header">
      <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
      Secure Storage  
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
      <div className="accordion-body">
         Your notes are stored safely with robust database encryption, ensuring your information is always protected.
      </div>
    </div>
  </div>
  <div className="accordion-item " style={{fontSize:"1.2rem"}}>
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
      Password Security
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body">
         User accounts are fortified with strong password hashing techniques, safeguarding your access credentials.
      </div>
    </div>
  </div>
  <div className="accordion-item" style={{fontSize:"1.2rem"}}>
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
      User-Specific Notes
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        Each user has a personalized space, so you can focus on your content without any mix-ups.
      </div>
    </div>
  </div>
</div>
    </div>
  )
}

export default About
