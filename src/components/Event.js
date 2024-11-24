// Code written by pratiksha patil ->

// Media.js
import React from 'react';
import './Media.css'; // Make sure to style accordingly
import { Container, Row, Col, Card } from 'react-bootstrap';
import { useState, useEffect } from 'react';
//import Footer from './Footer'; - Not required


// Example media data (this would normally come from props, a CMS, or an API)
const litterCollectionPhotos = [
  { src: './images/Pic-3-gl.jpeg' },
  { src: './images/Pic-4-gl.jpeg' },
  { src: './images/Pic-5-gl.jpeg' },
  { src: './images/Pic-11-gl.jpeg' },
  { src: './images/Pic-12-gl.jpeg' },
  { src: './images/Lit-1.jpg' },
  { src: './images/Lit-2.jpg' },
  { src: './images/Lit-3.jpg' },
  { src: './images/Lit-4.jpg' },
  { src: './images/Lit-5.jpg' },
  { src: './images/Lit-6.jpg' },
  { src: './images/Lit-7.jpg' },
  { src: './images/Lit-8.jpg' },
  { src: './images/Lit-9.jpg' },
  { src: './images/Lit-10.jpg' },
  { src: './images/Lit-11.jpg' },
  { src: './images/Lit-12.jpg' },
  { src: './images/Lit-13.jpg' },
  { src: './images/Lit-14.jpg' },
  { src: './images/Lit-15.jpg' },
  { src: './images/Lit-16.jpg' },
  { src: './images/Lit-17.jpg' },
  // { src: './images/Lit-19.jpg' },
  // { src: './images/Lit-20.jpg' },
  // { src: './images/Lit-21.jpg' },
  // { src: './images/Lit-22.jpg' },
  // { src: './images/Lit-23.jpg' },
  // { src: './images/Lit-24.jpg' },
  // { src: './images/Lit-25.jpg' },
  // { src: './images/Lit-26.jpg' },
];

const activitiesPhotos = [
  { src: './images/Pic-8-gl.jpeg' },
  { src: './images/Pic-1-gl.jpeg' },
  { src: './images/Pic-2-gl.jpeg' },
  { src: './images/Pic-6-gl.jpeg' },
  { src: './images/act-1.jpg' },
  { src: './images/act-1.jpg' },
  { src: './images/act-2.jpg' },
  { src: './images/act-3.jpg' },
  { src: './images/act-4.jpg' },
  { src: './images/act-5.jpg' },
  { src: './images/act-6.jpg' },
  { src: './images/act-7.jpg' },
  { src: './images/act-8.jpg' },
  { src: './images/act-9.jpg' },
  { src: './images/act-10.jpg' },
  { src: './images/act-11.jpg' },
  { src: './images/act-12.jpg' },
  { src: './images/act-13.jpg' },
  { src: './images/act-14.jpg' },
  { src: './images/act-15.jpg' },
  { src: './images/act-16.jpg' },
  { src: './images/act-17.jpg' },
  { src: './images/act-18.jpg' },
  { src: './images/act-19.jpg' },
  { src: './images/act-20.jpg' },
  { src: './images/act-21.jpg' },
  { src: './images/act-22.jpg' },
  { src: './images/act-23.jpg' },
  { src: './images/act-24.jpg' },
  { src: './images/act-25.jpg' },
  { src: './images/act-26.jpg' },
  { src: './images/act-27.jpg' },
  // { src: './images/act-28.jpg' },
  // { src: './images/act-29.jpg' },
  // { src: './images/act-30.jpg' },
];

const celebrationsPhotos = [
  { src: './images/Pic-9-gl.jpeg' },
  { src: './images/Pic-7-gl.jpeg' },
  { src: './images/Pic-10-gl.jpeg' },
  { src: './images/Clb-2.jpg' },
  { src: './images/Clb-3.jpg' },
  { src: './images/Clb-4.jpg' },
  { src: './images/Clb-5.jpg' },
  { src: './images/Clb-6.jpg' },
  { src: './images/Clb-7.jpg' },
  { src: './images/Clb-8.jpg' },
  { src: './images/Clb-9.jpg' },
  { src: './images/Clb-10.jpg' },
  { src: './images/Clb-11.jpg' },
  { src: './images/Clb-12.jpg' },
  { src: './images/Clb-13.jpg' },
  { src: './images/Clb-14.jpg' },
  { src: './images/Clb-15.jpg' },
  { src: './images/Clb-16.jpg' },
  { src: './images/Clb-17.jpg' },
  { src: './images/Clb-18.jpg' },
  { src: './images/Clb-19.jpg' },
  { src: './images/Clb-20.jpg' },
  { src: './images/Clb-21.jpg' },
  { src: './images/Clb-22.jpg' },
  { src: './images/Clb-23.jpg' },
  { src: './images/Clb-24.jpg' },
  { src: './images/Clb-25.jpg' },
  { src: './images/Clb-26.jpg' },
  // { src: './images/Clb-27.jpg' },
  // { src: './images/Clb-28.jpg' },
  // { src: './images/Clb-29.jpg' },
  // { src: './images/Clb-30.jpg' },

];



const renderPhotos = (photos) => (
  photos.map((photo, index) => (
    <Col key={index} md={4} className="mb-4">
      <Card>
        <Card.Img variant="top" src={photo.src} alt={`Photo ${index + 1}`} />
      </Card>
    </Col>
  ))
);

const videos = [
  { url: './videos/vid-1.mp4' },
  { url: './videos/vid-2.mp4' },
  { url: './videos/vid-3.mp4' },
  { url: './videos/vid-4.mp4' },
  { url: './videos/vid-5.mp4' },
  { url: './videos/vid-6.mp4' },
  { url: './videos/vid-7.mp4' },
  { url: './videos/vid-8.mp4' },
  { url: './videos/vid-9.mp4' },
  { url: './videos/vid-10.mp4' },
];

// const press = [
//   { imageSrc: './images/Clb-27.jpg' },
//   { imageSrc: './images/Clb-28.jpg' },
//   { imageSrc: './images/Clb-29.jpg' },
//   { imageSrc: './images/Clb-30.jpg' },
//   { imageSrc: './images/Clb-31.jpg' },
//   { imageSrc: './images/Clb-32.jpg' },
//   { imageSrc: './images/Clb-33.jpg' },
//   { imageSrc: './images/Clb-34.jpg' },

// ];

// const testimonials = [
//   { name: 'John Doe', text: 'Plogging with this NGO has been a transformative experience for me.' },
//   { name: 'Jane Smith', text: 'I love how they combine fitness with environmental care.' },
// ];

const Media = () => {

  // Code for counters of videos section - 


  const [currentIndex, setCurrentIndex] = useState(0);
  const videosToShow = videos.slice(currentIndex, currentIndex + 2);

  const handleNext = () => {
    if (currentIndex < videos.length - 2) {
      setCurrentIndex((prevIndex) => prevIndex + 2);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevIndex) => prevIndex - 2);
    }
  };

  // End of code for counters of videos section

  // Start of style for press section //

  // const styles = {
  //   pressNews: {
  //     marginBottom: '40px',
  //     backgroundColor: '#e0f7fa', /* Light green */
  //     padding: '20px', // Padding
  //     borderRadius: '50px', // Rounded corners
  //     boxShadow: '0 4px 20px rgba(173, 216, 230, 0.5), 0 4px 20px rgba(216, 191, 216, 0.5)', // Shadow effect
  //   },
  //   photoContainer: {
  //     overflow: 'hidden',
  //     borderRadius: '50px', // Rounded corners
  //     boxShadow: '0 4px 20px rgba(173, 216, 230, 0.5)', // Shadow for depth
  //   },
  //   photo: {
  //     width: '100%', // Make images responsive
  //     height: 'auto', // Maintain aspect ratio
  //     borderRadius: '50px', // Ensure the image also has rounded corners
  //     transition: 'transform 0.3s', // Animation for hover effect
  //   },
  // };

  // Add hover effect
  // const hoverEffect = {
  //   ':hover': {
  //     transform: 'scale(1.05)', // Slight zoom effect on hover
  //   },
  // };



  // End of style for press section //

  // Styles for the videos section - 

  const Vstyles = {
    videosSection: {
      marginBottom: '40px',
      backgroundColor: '#fff3e0',
      padding: '20px',
      borderRadius: '50px',
      boxShadow: '0 4px 20px rgba(173, 216, 230, 0.5), 0 4px 20px rgba(216, 191, 216, 0.5)',
    },
    videosContainer: {
      display: 'flex',
      justifyContent: 'space-between',
      flexWrap: 'wrap',
    },
    videoItem: {
      flex: '0 0 48%',
      margin: '10px 0',
    },
    videoFrame: {
      position: 'relative',
      overflow: 'hidden',
      borderRadius: '50px',
      boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)',
      height: '300px', // Set a fixed height for the video frame
    },
    video: {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      border: 'none',
      borderRadius: '50px',
      objectFit: 'cover',
    },
    navigationButtons: {
      display: 'flex',
      justifyContent: 'space-between',
      marginTop: '20px',
    },
    navButton: {
      backgroundColor: '#FFC080',
      border: 'none',
      borderRadius: '50px',
      padding: '10px 20px',
      cursor: 'pointer',
      boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
      transition: 'background-color 0.3s ease',
    },
  };


  // // Code for back to top  - 

  // const scrollToTop = () => {
  //   window.scrollTo({ top: 0, behavior: 'smooth' });
  // };

  // // End of cvode for back to top 

  // // Styles for back to top 

  // const backToTopStyles = {
  //   position: 'fixed',
  //   bottom: '30px',
  //   right: '30px',
  //   backgroundColor: 'red',
  //   border: 'none',
  //   borderRadius: '50%',
  //   padding: '10px 15px',
  //   cursor: 'pointer',
  //   boxShadow: '0 2px 10px rgba(0, 0, 0, 0.2)',
  //   transition: 'background-color 0.3s ease',
  //   display: currentIndex > 0 ? 'block' : 'none', // Show only when scrolling down
  // };

  // // End of Styles for bacj to top



  // Scroll up functionality - 

  const [showScrollButton, setShowScrollButton] = useState(false);

  // Function to handle scroll-to-top behavior
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // Adds smooth scrolling effect
    });
  };

  // Show or hide button based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {  // Show button after scrolling down 300px
        setShowScrollButton(true);
      } else {
        setShowScrollButton(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  // Page renderts here ->

  return (

    <Container className="media-page">
      {/* Hero Banner */}
      <section className="hero-banner">
        <h1 className="text-center">Plogging in Action</h1>
        <p className="text-center">Explore our plogging events, photos, videos, and media coverage</p>
      </section>

      {/* Photo Gallery Start*/}
      <section className="photo-gallery">

        <div className="gallery-section">
          <h3 className="text-center">Litter Collection</h3>
          <br></br>
          <Row>
            {renderPhotos(litterCollectionPhotos)}
          </Row>
        </div>
        <div className="gallery-section">
          <h3 className="text-center">Activities</h3>
          <br></br>
          <Row>
            {renderPhotos(activitiesPhotos)}
          </Row>
        </div>
        <div className="gallery-section">
          <h3 className="text-center">Celebrations</h3>
          <br></br>
          <Row>
            {renderPhotos(celebrationsPhotos)}
          </Row>
        </div>
      </section>

      {/* Photo Gallery End*/}

      {/* Video Section Start*/}

      <section className="video-gallery-section" style={Vstyles.videosSection}>
        <h2 className="video-gallery-title text-center">Videos</h2>
        <div className="video-list-container" style={Vstyles.videosContainer}>
          {videosToShow.map((video, index) => (
            <div key={currentIndex + index} className="video-list-item" style={Vstyles.videoItem}>
              <div className="video-display-frame" style={Vstyles.videoFrame}>
                <video
                  controls
                  title={`Video ${currentIndex + index + 1}`} // Updated for clarity
                  style={Vstyles.video}
                >
                  <source src={video.url} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          ))}
        </div>
        <div className="video-navigation-buttons" style={Vstyles.navigationButtons}>
          <button
            className="video-nav-button"
            style={Vstyles.navButton}
            onClick={handlePrev}
            disabled={currentIndex === 0}
          >
            Previous
          </button>
          <button
            className="video-nav-button"
            style={Vstyles.navButton}
            onClick={handleNext}
            disabled={currentIndex >= videos.length - 2}
          >
            Next
          </button>
        </div>
      </section>
      {/* Video Section End */}

      {/* Press and News Start*/}

      {showScrollButton && (
        <div
          style={{
            position: 'fixed',
            bottom: '50px',
            left: '30px',  // Changed to left for left corner placement
            zIndex: 1000,  // Ensures container stays on top
          }}
        >
          <button
            onClick={scrollToTop}
            style={{
              padding: '10px 20px',
              fontSize: '18px',
              borderRadius: '30px',
              backgroundColor: '#007bff',
              color: 'white',
              border: 'none',
              cursor: 'pointer',
              boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.3)', // Adds a slight shadow for visibility
            }}
          >
            ↑ Top
          </button>
        </div>
      )}

      {/* End of press and news */}

      {/* Testimonials Start*/}
      {/* <section className="testimonials">
        <h2 className="text-center">What People Say</h2>
        <Row>
          {testimonials.map((testimonial, index) => (
            <Col key={index} md={6} className="mb-4">
              <Card>
                <Card.Body>
                  <Card.Text>"{testimonial.text}"</Card.Text>
                  <footer className="blockquote-footer">{testimonial.name}</footer>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

      </section> */}

    </Container>

    // Testimonials End //

  );
};

export default Media;
