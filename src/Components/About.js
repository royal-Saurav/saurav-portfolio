import React, { Component } from 'react';
import resume from '../assets/resume.pdf'

class About extends Component {
  render() {

    if(this.props.data){
      var name = this.props.data.name;
      var profilepic= "images/"+this.props.data.image;
      var street = this.props.data.address.street;
      var city = this.props.data.address.city;
      var state = this.props.data.address.state;
      var zip = this.props.data.address.zip;
      var phone= this.props.data.phone;
      var email = this.props.data.email;
    }

    return (
      <section id="about">
      <div className="row">
         <div className="three columns">
            <img className="profile-pic"  src={profilepic} alt="Saurav Kumar Profile Pic" />
         </div>
         <div className="nine columns main-col">
            <h2>About Me</h2>

            <p>I'm Saurav Kumar, a Web Developer. I'm a creative problem solving enthusiast, with a constantly growing love for languages. Passionate about ideating, conceptualizing and producing consumer-centric as well as technology-enabled products from level zero. Open for exploring exciting web development opportunities.</p>
            <div className="row">
               <div className="columns contact-details">
                  <h2>Contact Details</h2>
                  <p className="address">
                     <span>{name}</span><br />
                     <span>{street}<br />
                        {city} {state}, {zip}
                     </span><br />
                     <span>{phone}</span><br />
                     <span><a href={`mailto:${email}?subject=The%20subject%20of%20the%20mail`}>{email}</a></span>
                  </p>
               </div>
               <div className="columns download">
                  <p>
                    <a href={resume} target="_blank" rel="noopener noreferrer" className="button"><i className="fa fa-download"></i>Download Resume</a>
                  </p>
               </div>
            </div>
         </div>
      </div>
   </section>
    );
  }
}

export default About;
