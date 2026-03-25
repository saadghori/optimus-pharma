import React, { useState, useEffect, useRef } from 'react';
import { Container, Stack, Button } from 'react-bootstrap';
import Link from 'next/link';
import Image from 'next/image';

const Hero = ({ 
  videoSrc,      
  imageSrc,      
  imageAlt = "Hero background",
  heading, 
  text, 
  buttonText, 
  overlayOpacity = 0.69, 
  buttonLink = '/about',
  overlayColor = 'rgba(31, 33, 53, 1)',
  showOverlay = true,
}) => {
  const [isVideoReady, setIsVideoReady] = useState(false);
  const videoRef = useRef(null);

  // Fail-safe: If the video is already cached, sometimes the events don't fire.
  // We check manually on mount.
  useEffect(() => {
    if (videoRef.current && videoRef.current.readyState >= 3) {
      setIsVideoReady(true);
    }
  }, []);

  return (
    <div style={{ 
      position: 'relative',
      width: '100%',
      height: '100vh',
      overflow: 'hidden',
      isolation: 'isolate',
      backgroundColor: '#1f2135' 
    }}>
      
      {/* 1. THE IMAGE (Always there as the base layer) */}
      <div style={{
        position: 'absolute',
        inset: 0,
        zIndex: -1
      }}>
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          priority
          quality={90}
          style={{ objectFit: 'cover' }}
        />
      </div>

      {/* 2. THE VIDEO (Fades in over the image) */}
      {videoSrc && (
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          onLoadedData={() => setIsVideoReady(true)}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            zIndex: isVideoReady ? 0 : -2, // Move to front only when ready
            opacity: isVideoReady ? 1 : 0,
            transition: 'opacity 1s ease-in-out',
          }}
        >
          <source src={videoSrc} type="video/mp4" />
        </video>
      )}

      {/* 3. THE OVERLAY (Stays on top of both) */}
      {showOverlay && (
        <div style={{
          position: 'absolute',
          inset: 0,
          backgroundColor: overlayColor.replace(/[\d.]+\)$/, `${overlayOpacity})`),
          zIndex: 1, // Sits above video but below text
          pointerEvents: 'none',
        }} />
      )}

      {/* 4. THE CONTENT */}
      <Container style={{
        position: 'relative',
        zIndex: 2,
        height: '100%',
        color: 'white'
      }}>
        <Stack gap={3} className="h-100 justify-content-center align-items-center text-center">
          <h1 style={{ fontSize: '3.5rem', fontWeight: 'bold', color: '#ff7823' }}>{heading}</h1>
          <p style={{ fontSize: '1.45rem', maxWidth: '975px' }}>{text}</p>
          <Link href={buttonLink} passHref legacyBehavior>
            <Button variant="primary" size="lg" className='btn-custom'>
              {buttonText}
            </Button>
          </Link>
        </Stack>
      </Container>
    </div>
  );
};

export default Hero;