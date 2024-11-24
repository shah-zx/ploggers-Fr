import React, { useState } from 'react';

const VideoSection = () => {
    const [isVideoPlaying, setIsVideoPlaying] = useState(false);

    // YouTube video URL
    const videoUrl = 'https://www.youtube.com/embed/nBjIaOJ3txw';

    const handlePlayVideo = () => {
        setIsVideoPlaying(true);
    };

    return (
        <div style={{ marginTop: '40px', textAlign: 'center' }}>
            <h2>Our Work !!</h2>
            <br />
            <div style={{ position: 'relative', display: 'inline-block', cursor: 'pointer' }}>
                {!isVideoPlaying ? (
                    <div onClick={handlePlayVideo} style={{ position: 'relative' }}>
                        <img
                            src="./images/img-3.jpeg" // Replace with the actual thumbnail URL
                            alt="Video Thumbnail"
                            style={{ borderRadius: '30px', width: '900px', height: '500px' }}
                        />
                        <div
                            style={{
                                position: 'absolute',
                                top: '50%',
                                left: '50%',
                                transform: 'translate(-50%, -50%)',
                                padding: '20px',
                            }}
                        >
                            <img
                                src="./images/yt.png" // Replace with the actual play button image URL
                                alt="Play Button"
                                style={{ width: '80px', height: '80px' }}
                            />
                        </div>
                    </div>
                ) : (
                    <iframe
                        width="900"
                        height="500"
                        src={`${videoUrl}?autoplay=1`} // YouTube embed URL with autoplay enabled
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        style={{ borderRadius: '30px' }}
                    ></iframe>
                )}
            </div>
        </div>
    );
};

export default VideoSection;
