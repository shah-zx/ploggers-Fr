// Code written by pratiksha patil ->


// components/About.js
import React, { useState } from 'react';
import Footer from './Footer';

const About = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqData = [
    { question: "What is Plogging?", answer: "Plogging is a combination of jogging and picking up litter." },
    { question: "When was Jalgaon Ploggers founded?", answer: "Jalgaon Ploggers was founded on 20th February 2022." },
    { question: "Who is founder of Jalgaon Ploggers?", answer: "The founder of Jalgaon Ploggers is Chetna Jain." },
    { question: "What is Chalk Of Shame?", answer: "Chalk Of Shame is an initiative to highlight littering in the community." },
    { question: "How can I join Jalgaon Ploggers?", answer: "You can join by attending our events or contacting us through our website." },
    { question: "How often do Jalgaon Ploggers organize events?", answer: "Events are organized every Sunday, including cleaning drives and personality development workshops." }
  ];

  const toggleFAQ = index => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const styles = {
    footerContainer: {
      marginTop: '40px',
      padding: '20px',
      borderRadius: '50px',
      boxShadow: '0 0 10px gray',
      backgroundColor: '#FFC080',
      maxWidth: '90%',
      margin: '0 auto',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      textAlign: 'center',
    },
    footerSection: {
      flex: 1,
      padding: '10px',
    },
    footerLeft: {
      textAlign: 'left',
    },
    footerCenter: {
      textAlign: 'center',
      marginTop: '10px',
    },
    footerRight: {
      textAlign: 'right',
      marginTop: '5px',
    },
    footerHeader: {
      fontWeight: 'bold',
      marginBottom: '10px',
    },
    footerLink: {
      display: 'block',
      margin: '5px 0',
      textDecoration: 'none',
      color: 'inherit',
    },
    footerParagraph: {
      margin: '5px 0',
    },
  };

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center', marginTop: '40px' }}>
        <div style={{ flex: 1, margin: '20px', padding: '20px', borderRadius: '50px', boxShadow: '0 0 10px lightblue', backgroundColor: '#fff' }}>
          <img src="./images/Group.jpeg" alt="Jalgaon Ploggers" style={{ borderRadius: '50px', width: '100%', height: 'auto' }} />
        </div>
        <div style={{ flex: 1, margin: '20px', padding: '20px', borderRadius: '50px', boxShadow: '0 0 10px lightblue', backgroundColor: '#fff', textAlign: 'center' }}>
          <h2>About Jalgaon Ploggers</h2>
          <p>
            Founded by only 3 persons & now its a family of 500+ ploggers ,
            Jalgaon Ploggers is a non-profit organization based in Jalgaon City of Maharashtra. We are the community that aims to mobilize the individuals of the city and sensitize our communities towards environmental conservation and waste problems. We work to bring a behavioral change in people towards littering and waste generation. We also focus on the overall development of the members of Jalgaon Ploggers with initiatives like self-defense workshops, personality development weekends, and leadership programs.</p>
        </div>
      </div>
      <div style={{ marginTop: '40px', textAlign: 'center' }}>
        <h2>Our Founders</h2>

        <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center', marginTop: '20px' }}>
          <div style={{ flex: 1, margin: '20px', padding: '20px', borderRadius: '50px', boxShadow: '0 0 10px lightblue', backgroundColor: '#fff', width: '450px', height: 'auto' }}>
            <img src="./images/Nikhil-P.jpeg" alt="Founder 1" style={{ borderRadius: '50px', width: '100%', height: 'auto' }} />
          </div>
          <div style={{ flex: 1, margin: '20px', padding: '20px', borderRadius: '50px', boxShadow: '0 0 10px lightblue', backgroundColor: '#fff', width: '450px', height: 'auto' }}>
            <p>"Jalgaon Ploggers has been a dream come true. Seeing our community come together to tackle environmental issues has been incredibly rewarding. Our efforts in waste management and community engagement have made a significant impact, and I am proud to be a part of this journey." - <strong>Nikhil Pendharkar</strong></p>
          </div>
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center', marginTop: '20px' }}>
          <div style={{ flex: 1, margin: '20px', padding: '20px', borderRadius: '50px', boxShadow: '0 0 10px lightblue', backgroundColor: '#fff', width: '450px', height: 'auto' }}>
            <p>"Jalgaon Ploggers is more than just an organization; it's a movement. Our focus on environmental conservation and personal development has brought about a positive change in our community. I am grateful for the opportunity to lead such a dedicated team and look forward to continuing our mission." - <strong>Chetna Jain</strong></p>
          </div>
          <div style={{ flex: 1, margin: '20px', padding: '20px', borderRadius: '50px', boxShadow: '0 0 10px lightblue', backgroundColor: '#fff', width: '450px', height: 'auto' }}>
            <img src="./images/Chetna J.jpeg" alt="Founder 2" style={{ borderRadius: '50px', width: '100%', height: 'auto' }} />
          </div>
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center', marginTop: '20px' }}>
          <div style={{ flex: 1, margin: '20px', padding: '20px', borderRadius: '50px', boxShadow: '0 0 10px lightblue', backgroundColor: '#fff', width: '450px', height: 'auto' }}>
            <img src="./images/Shubham J.jpeg" alt="Founder 3" style={{ borderRadius: '50px', width: '100%', height: 'auto' }} />
          </div>
          <div style={{ flex: 1, margin: '20px', padding: '20px', borderRadius: '50px', boxShadow: '0 0 10px lightblue', backgroundColor: '#fff', width: '450px', height: 'auto' }}>
            <p>"Mera kachra , meri zimmedari !! , Being a part of Jalgaon Ploggers has been an incredible experience. Our initiatives have not only helped in cleaning our city but also in educating and empowering our members. The support and enthusiasm from the community have been overwhelming, and I am excited for what the future holds." - <strong>Shubham Wani</strong></p>
          </div>
        </div>
      </div>


      <div style={{ marginTop: '40px', textAlign: 'center' }}>
        <h2>Frequently Asked Questions</h2>
        <div style={{
          margin: '0 auto',
          padding: '20px',
          borderRadius: '50px',
          boxShadow: '0 0 10px lightpurple',
          backgroundColor: '#fff',
          maxWidth: '900px'
        }}>
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around' }}>
            {faqData.map((item, index) => (
              <div key={index} style={{
                flex: '1 0 30%',
                margin: '10px',
                padding: '15px',
                borderRadius: '50px',
                boxShadow: '0 0 5px lightgray',
                backgroundColor: '#f9f9f9',
                cursor: 'pointer'
              }} onClick={() => toggleFAQ(index)}>
                <h3 style={{ color: 'green', margin: 0, fontSize: 24 }}>{item.question}</h3>
                {openIndex === index && <p style={{ marginTop: '10px' }}>{item.answer}</p>}
              </div>
            ))}
          </div>
        </div>
      </div>

      <br></br>
      <br></br>
      <div className="footer-container" style={{ textAlign: 'center', backgroundColor: '#FFC080', padding: '20px', borderRadius: '50px', boxShadow: '0 0 10px gray', maxWidth: '80%', margin: '0 auto' }}>
        <div className="footer-section left" style={{ flex: 1, padding: '0 15px', textAlign: 'left', fontFamily: 'Poppins, sans-serif', fontWeight: 600 }}>
          <h2 style={{ marginBottom: '15px' }}>JALGAON PLOGGERS</h2>
          <a href="about" style={{ textDecoration: 'none', color: 'inherit', display: 'block', margin: '5px 0' }}>ABOUT US</a>
          <a href="contact" style={{ textDecoration: 'none', color: 'inherit', display: 'block', margin: '5px 0' }}>CONTACT US</a>
        </div>
        <div className="footer-section center" style={{ flex: 1, padding: '0 15px', textAlign: 'center', fontFamily: 'Poppins, sans-serif', fontWeight: 600 }}>
          <a href="events" style={{ textDecoration: 'none', color: 'inherit', display: 'block', margin: '5px 0' }}>EVENTS</a>
          <a href="media" style={{ textDecoration: 'none', color: 'inherit', display: 'block', margin: '5px 0' }}>MEDIA</a>
          <a href="media" style={{ textDecoration: 'none', color: 'inherit', display: 'block', margin: '5px 0' }}>DONATE</a>

        </div>
        <div className="footer-section right" style={{ flex: 1, padding: '0 15px', textAlign: 'right', fontFamily: 'Poppins, sans-serif', fontWeight: 600 }}>
          <p style={{ margin: '5px 0', marginRight: '100px' }}>GHRIBM, Jalgaon</p>
          <p style={{ margin: '5px 0', marginRight: '100px' }}>Copyright © 2024</p>
          <div style={{ marginTop: '10px', display: 'flex', justifyContent: 'center', gap: '15px' }}>
            <a href="https://www.instagram.com/jalgaonploggers?igsh=b213Y3F0YzRhNHdp" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-instagram" style={{ fontSize: '24px', color: '#E1306C' }}></i>
            </a>
            <a href="https://www.linkedin.com/company/jalgaon-ploggers/" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin" style={{ fontSize: '24px', color: '#0077B5' }}></i>
            </a>
            <a href="https://whatsapp.com/channel/0029Va8noliE50UnyunL6n3E" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-whatsapp" style={{ fontSize: '24px', color: '#25D366' }}></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
