// Code written by sneha chopade ->


import React from 'react';
import { Carousel } from 'react-bootstrap';
// import About from './About';
import { useState, useEffect } from 'react'; // Import React hooks
//import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'; // Import Router components
//import { Navbar, Nav } from 'react-bootstrap'; // Import Bootstrap components
import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure Bootstrap CSS is included
//import Footer from './Footer';
import VideoSection from './Video';
function Home() {


    // Scroll up functionality - 

    const [showScrollButton, setShowScrollButton] = useState(false);

    // Function to handle scroll-to-top behavior
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth', // Adds smooth scrolling effect
        });
    };

    // Fucntionality for video - 



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



    // Chatbot code - 

    const [chatVisible, setChatVisible] = useState(false);
    const [userMessage, setUserMessage] = useState('');
    const [messages, setMessages] = useState([]);

    const botResponses = {
        "What is jalgaon ploggers": "Jalgaon ploggers is a NGO famous for plogging drives.",
        "Where are you located?": "We are located at Jalgaon, Maharashtra.",
        "How can I contact jalgaon ploggers": "You can contact us through the join now page and also through the WhatsApp group.",
        "Where can I find the founder's information?": "You can find that information on the About Us page.",
        "Thank you": "You're welcome! If you have any more questions, feel free to ask.",
        "Please tell the contact details of jalgaon ploggers": "Here are the details - +91-9082290426, mail - ackjalgaonploggers@gmail.com / jalgaonploggers@gmail.com"
    };

    // Keywords and their corresponding responses
    const responseKeywords = {
        "jalgaon ploggers": "Jalgaon ploggers is a NGO famous for plogging drives.",
        "location": "We are located at Jalgaon, Maharashtra.",
        "contact": "You can contact us through the join now page and also through the WhatsApp group.",
        "founder": "You can find that information on the About Us page.",
        "thank you": "You're welcome! If you have any more questions, feel free to ask.",
        "contact details": "Here are the details - +91-9082290426, mail - ackjalgaonploggers@gmail.com / jalgaonploggers@gmail.com"
    };

    const handleUserMessage = (event) => {
        if (event.key === 'Enter' && userMessage.trim()) {
            // Add user message to chat
            setMessages((prev) => [...prev, { sender: 'user', text: userMessage }]);

            // Check for direct bot responses
            const botMessage = botResponses[userMessage] || getResponseFromKeywords(userMessage);

            // Add bot message to chat
            setMessages((prev) => [...prev, { sender: 'bot', text: botMessage }]);
            setUserMessage('');
        }
    };

    // Function to get response based on keywords
    const getResponseFromKeywords = (message) => {
        const lowercasedMessage = message.toLowerCase();
        for (const keyword in responseKeywords) {
            if (lowercasedMessage.includes(keyword)) {
                return responseKeywords[keyword];
            }
        }
        return "Sorry, I didn't understand that.";
    };

    // Code for media recognitions //

    // const [mediaIndex, setMediaIndex] = useState(0);


    // const mediaRecognitions = [
    //   { title: 'Media 1', description: 'Description of Media 1', imgSrc: 'https://via.placeholder.com/150' },
    //   { title: 'Media 2', description: 'Description of Media 2', imgSrc: 'https://via.placeholder.com/150' },
    //   { title: 'Media 3', description: 'Description of Media 3', imgSrc: 'https://via.placeholder.com/150' },
    //   { title: 'Media 4', description: 'Description of Media 4', imgSrc: 'https://via.placeholder.com/150' },
    //   { title: 'Media 5', description: 'Description of Media 5', imgSrc: 'https://via.placeholder.com/150' },
    //   { title: 'Media 6', description: 'Description of Media 6', imgSrc: 'https://via.placeholder.com/150' },
    //   { title: 'Media 7', description: 'Description of Media 7', imgSrc: 'https://via.placeholder.com/150' },
    //   { title: 'Media 8', description: 'Description of Media 8', imgSrc: 'https://via.placeholder.com/150' },
    //   { title: 'Media 9', description: 'Description of Media 9', imgSrc: 'https://via.placeholder.com/150' },
    // ];



    // const handleMediaPrev = () => {
    //   setMediaIndex((prevIndex) => (prevIndex - 3 + mediaRecognitions.length) % mediaRecognitions.length);
    // };

    // const handleMediaNext = () => {
    //   setMediaIndex((prevIndex) => (prevIndex + 3) % mediaRecognitions.length);
    // };

    // End of code for media recognitions //


    // Code for videos counter - 

   
    // const [currentVideoIndex, setCurrentVideoIndex] = useState(0);





    // End of code of videos cunter

    // Code for testimonials // - Written by Harshal 

    const testimonials = [
        { name: 'Raj Nandini', feedback: 'Jalgaon ploggers is doing a great thing by cleaning the city !!', imgSrc: './images/User-1.jpeg' },
        { name: 'Aniket Kotkar', feedback: 'Had a great time while plogging in the city !!', imgSrc: './images/Aniket.jpeg' },
        { name: 'Sujata Pandey', feedback: 'The organization is working hard for cleanliness !!', imgSrc: './images/User-2.jpeg' },
    ];

    // end of code for testimonials //

    // Code for counter of the awards // 

    // const [currentIndex, setCurrentIndex] = useState(0);

    const awards = [
        { imageSrc: './images/Award-1.jpeg' },
        { imageSrc: './images/Award-2.jpeg' },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    const handleNext = () => {
        if (currentIndex < awards.length - 1) {
            setCurrentIndex(prevIndex => prevIndex + 1);
        }
    };

    const handlePrev = () => {
        if (currentIndex > 0) {
            setCurrentIndex(prevIndex => prevIndex - 1);
        }
    };

    // End of the counter code //

    // Code for increasing the counters on the our accomplishments cards - 

    useEffect(() => {
        function animateCounter(id, start, end, duration) {
            let current = start;
            const range = end - start;
            const stepTime = 50; // Reduce step time for faster updates
            const totalSteps = duration / stepTime;
            const increment = Math.ceil(range / totalSteps);

            const obj = document.getElementById(id);
            const timer = setInterval(() => {
                current += increment;
                if (current >= end) {
                    current = end; // Ensure it doesn't overshoot
                    clearInterval(timer);
                }
                obj.innerText = current.toLocaleString() + ' +'; // Add '+' after number
            }, stepTime);
        }

        // Standard counters (2 seconds duration)
        animateCounter('ploggers-counter', 0, 500, 2000);
        animateCounter('campaigns-counter', 0, 40, 2000);
        animateCounter('litter-counter', 0, 1100, 2000);

        // Faster money counter (8 seconds duration, but faster steps)
        animateCounter('money-counter', 0, 7000, 8000); // 8 seconds duration
    }, []);



    // End of counters 

    return (
        <div className="App">

            {/* Navbar Start */}

            <div className="App">
                {/* Navbar Start */}
                {/* <Navbar bg="dark" variant="dark" expand="lg" style={{ borderBottomLeftRadius: '50px', borderBottomRightRadius: '50px' }}>
          <Container>
            <Navbar.Brand as={Link} to="/">
              Jalgaon Ploggers
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ms-auto">
                <Nav.Link as={Link} to="/about" style={{ marginRight: '15px' }}>About Us</Nav.Link>
                <Nav.Link as={Link} to="#media" style={{ marginRight: '15px' }}>Media</Nav.Link>
                <Nav.Link as={Link} to="#events" style={{ marginRight: '15px' }}>Events</Nav.Link>
                <Nav.Link as={Link} to="#blogs" style={{ marginRight: '15px' }}>Blogs</Nav.Link>
                <Nav.Link as={Link} to="#join" style={{ borderRadius: '50px', backgroundColor: '#007bff', color: 'white', padding: '8px 20px', marginRight: '15px' }}>
                  Join Now
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar> */}

                {/* Navbar End */}

                {/* Image Carousel and other components here... */}

                {/* Define Routes */}

            </div>

            {/* Navbar End */}

            {/* Image Carousel start */}

            <Carousel
                style={{
                    maxWidth: '90%',
                    margin: '20px auto',
                    height: '500px',
                    borderRadius: '50px',
                    overflow: 'hidden',
                    border: '2px solid #DDA0DD',  // Light purple border
                    boxShadow: '0 0 10px blue'
                }}
            >
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="/images/img-5.jpeg"
                        alt="First slide"
                        style={{ height: '500px', objectFit: 'cover' }}
                    />
                </Carousel.Item>

                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="/images/img-1.jpeg"
                        alt="Second slide"
                        style={{ height: '500px', objectFit: 'cover' }}
                    />
                </Carousel.Item>
          
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="/images/third-pic.jpg"
                        alt="Third slide"
                        style={{ height: '500px', objectFit: 'cover' }}
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="/images/fourth-pic.jpg"
                        alt="Fourth slide"
                        style={{ height: '500px', objectFit: 'cover' }}
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="/images/fifth-pic.jpg"
                        alt="Fifth slide"
                        style={{ height: '500px', objectFit: 'cover' }}
                    />
                </Carousel.Item>
                
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="/images/first-pic.jpg" 
                        alt="Sixth slide"
                        style={{ height: '500px', objectFit: 'cover' }}
                    />
                </Carousel.Item>
            </Carousel>


            {/* Image Carousel end */}

            {/* Videos Carousel start */}

            <VideoSection />
            {/* Videos Carousel End */}

            <br></br>
            <br></br>

            {/* Impact section starts */}

            {/* Impact section starts */}

            {/* Impact section starts */}

            <div style={{ marginTop: '40px', textAlign: 'center', borderRadius: '30px', padding: '20px', boxShadow: '0 0 20px rgba(0, 0, 0, 0.2)', backgroundColor: '#e0f7fa', maxWidth: '80%', margin: '0 auto' }}>
                <h2 style={{ color: '#00796b' }}>Our Impact</h2>
                <br />
                <div style={{ display: 'flex', justifyContent: 'space-between', gap: '20px' }}>
                    <div style={{ flex: '0 0 auto', borderRadius: '20px', backgroundColor: '#4db6ac', padding: '30px', width: '220px', height: '200px', fontFamily: 'Arial, sans-serif', fontWeight: 600 }}>
                        <h3 style={{ color: 'white' }}>Ploggers</h3>
                        <div style={{ borderRadius: '20px', backgroundColor: '#ffffff', padding: '10px', fontWeight: 'bold', fontSize: '24px', color: '#00796b', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)', marginTop: '20px' }}>
                            <p id="ploggers-counter" style={{ margin: 0 }}>0</p>

                        </div>
                    </div>
                    <div style={{ flex: '0 0 auto', borderRadius: '20px', backgroundColor: '#4db6ac', padding: '30px', width: '220px', height: '200px', fontFamily: 'Arial, sans-serif', fontWeight: 600 }}>
                        <h3 style={{ color: 'white' }}>Campaigns</h3>
                        <div style={{ borderRadius: '20px', backgroundColor: '#ffffff', padding: '10px', fontWeight: 'bold', fontSize: '24px', color: '#00796b', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)', marginTop: '20px' }}>
                            <p id="campaigns-counter" style={{ margin: 0 }}>0</p>


                        </div>
                    </div>
                    <div style={{ flex: '0 0 auto', borderRadius: '20px', backgroundColor: '#4db6ac', padding: '30px', width: '220px', height: '200px', fontFamily: 'Arial, sans-serif', fontWeight: 600 }}>
                        <h3 style={{ color: 'white' }}>Litter Collected</h3>
                        <div style={{ borderRadius: '20px', backgroundColor: '#ffffff', padding: '10px', fontWeight: 'bold', fontSize: '24px', color: '#00796b', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)', marginTop: '20px' }}>
                            <p id="litter-counter" style={{ margin: 0 }}>0</p>

                        </div>
                    </div>
                    <div style={{ flex: '0 0 auto', borderRadius: '20px', backgroundColor: '#4db6ac', padding: '30px', width: '220px', height: '200px', fontFamily: 'Arial, sans-serif', fontWeight: 600 }}>
                        <h3 style={{ color: 'white' }}>Money Donated</h3>
                        <div style={{ borderRadius: '20px', backgroundColor: '#ffffff', padding: '10px', fontWeight: 'bold', fontSize: '24px', color: '#00796b', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)', marginTop: '20px' }}>
                            <p id="money-counter" style={{ margin: 0 }}>0</p>


                        </div>
                    </div>
                </div>
            </div>

            {/* Impact section end */}

            {/* Impact section end */}

            {/* Impact section end */}

            {/* Awards Section start */}
            {/* Adding space */}

            <br></br>
            <br></br>
            {/* Awards Section start */}

            {/* Awards Section start */}

            <div style={{ marginTop: '40px', textAlign: 'center', borderRadius: '50px', padding: '20px', maxWidth: '70%', margin: '0 auto' }}>
                <h2 style={{ color: 'black' }}>Our Esteemed Awards</h2>
                <br />
                <div className="carousel-container" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'relative' }}>
                    {/* Left Arrow */}
                    <button onClick={handlePrev} style={{ position: 'absolute', left: '0', background: 'none', border: 'none', fontSize: '3rem', color: 'black', cursor: 'pointer' }}>&lt;</button>

                    {/* Image container */}
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', overflow: 'hidden', width: '70%' }}>
                        {awards.slice(currentIndex, currentIndex + 1).map((award, index) => (
                            <div key={index} style={{ borderRadius: '0', width: '400px', height: '250px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                <img src={award.imageSrc} alt={`Award ${index + 1}`} style={{ maxWidth: '100%', maxHeight: '100%' }} />
                            </div>
                        ))}
                    </div>

                    {/* Right Arrow */}
                    <button onClick={handleNext} style={{ position: 'absolute', right: '0', background: 'none', border: 'none', fontSize: '3rem', color: 'black', cursor: 'pointer' }}>&gt;</button>
                </div>
            </div>


            {/* Awards Section end */}

            {/* Awards Section end */}

            <br></br>
            <br></br>



            {/* <div style={{ marginTop: '40px', textAlign: 'center', borderRadius: '50px', padding: '20px', boxShadow: '0 0 10px lightorange', backgroundColor: '#f0f0f0', maxWidth: '70%', margin: '0 auto' }}>
        <h2>Media Recognitions</h2>
        <br></br>
        <div className="carousel-container" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'relative' }}>
          <button onClick={handleMediaPrev} style={{ position: 'absolute', left: '0', background: 'none', border: 'none', fontSize: '2rem', cursor: 'pointer' }}>&lt;</button>
          <div style={{ display: 'flex', gap: '20px', overflow: 'hidden', width: '70%' }}>
            {mediaRecognitions.slice(mediaIndex, mediaIndex + 3).map((media, index) => (
              <div key={index} style={{ flex: '0 0 auto', borderRadius: '50px', backgroundColor: 'lightblue', padding: '20px', width: '210px', height: '250px', boxShadow: '0 0 10px lightorange' }}>
                <img src={media.imgSrc} alt={media.title} style={{ width: '100%', height: 'auto', borderRadius: '50px 50px 0 0' }} />
                <h3>{media.title}</h3>
                <p>{media.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div> */}

            {/* Testimonials section */}

            <div style={{ marginTop: '40px', textAlign: 'center', borderRadius: '50px', padding: '20px', boxShadow: '0 0 10px lightorange', backgroundColor: '#f0f0f0', maxWidth: '70%', margin: '0 auto' }}>
                <h2>Testimonials</h2>
                <br></br>
                <div style={{ display: 'flex', justifyContent: 'center', gap: '30px' }}>
                    {testimonials.map((testimonial, index) => (
                        <div key={index} style={{ flex: '0 0 auto', borderRadius: '50px', backgroundColor: 'lightblue', padding: '20px', width: '250px', height: '300px', boxShadow: '0 0 10px lightorange', textAlign: 'center' }}>
                            <img src={testimonial.imgSrc} alt={testimonial.name} style={{ width: '100px', height: '100px', borderRadius: '50%', marginBottom: '10px' }} />
                            <h3>{testimonial.name}</h3>
                            <p>{testimonial.feedback}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* end of testimonials */}

            {/* Start of bot code */}
            <div>
                <button onClick={() => setChatVisible(true)} style={{
                    position: 'fixed',
                    bottom: '20px',
                    right: '20px',
                    borderRadius: '50%',
                    backgroundColor: '#007bff',
                    color: 'white',
                    border: 'none',
                    width: '100px',
                    height: '100px',
                    display: chatVisible ? 'none' : 'block',
                    zIndex: 1000,
                    backgroundImage: 'url(./images/bot.jpg)', // Replace with your bot icon URL
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}>
                </button>

                {chatVisible && (
                    <div style={{
                        position: 'fixed',
                        bottom: '80px',
                        right: '20px',
                        borderRadius: '50px',
                        border: '1px solid #ddd',
                        backgroundColor: 'white',
                        boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
                        width: '400px', // Increased width for better spacing
                        padding: '10px',
                        zIndex: 1000,
                    }}>
                        <div style={{ padding: '10px', borderBottom: '1px solid #ddd', position: 'relative' }}>
                            <h5>PloggerBot</h5>
                            <button onClick={() => setChatVisible(false)} style={{
                                position: 'absolute',
                                top: '10px',
                                right: '10px',
                                backgroundColor: 'transparent',
                                border: 'none',
                                color: 'green',
                                fontSize: '16px', // Size of the close button
                                padding: '0',
                            }}>✖</button>
                        </div>
                        <div style={{ maxHeight: '200px', overflowY: 'auto', padding: '10px' }}>
                            <div style={{ textAlign: 'left', marginBottom: '10px' }}>
                                <div style={{
                                    backgroundColor: '#d1d1d1',
                                    borderRadius: '5px',
                                    padding: '5px',
                                    margin: '5px 0',
                                }}>
                                    Hi there! How can I help you today?
                                </div>
                            </div>
                            {messages.map((msg, index) => (
                                <div key={index} style={{ textAlign: msg.sender === 'user' ? 'right' : 'left' }}>
                                    <div style={{
                                        backgroundColor: msg.sender === 'user' ? '#e1ffc7' : '#d1d1d1',
                                        borderRadius: '5px',
                                        padding: '5px',
                                        margin: '5px 0'
                                    }}>
                                        {msg.text}
                                    </div>
                                </div>
                            ))}
                        </div>
                        <input
                            type="text"
                            value={userMessage}
                            onChange={(e) => setUserMessage(e.target.value)}
                            onKeyDown={handleUserMessage}
                            placeholder="Type your question..."
                            style={{ width: 'calc(100% - 10px)', padding: '5px', borderRadius: '50px', border: '1px solid #ddd' }} // Adjusted input width
                        />
                    </div>
                )}
            </div>
            {/* end of bot code */}

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

            {/* code for footer */}

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
                    <p style={{ margin: '5px 0', marginRight: '100px' }}>Jalgaon, Maharshtra</p>
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


            {/* end of code for footer */}

        </div>
    );
}

export default Home;
