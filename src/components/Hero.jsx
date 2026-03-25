import React from 'react';
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
  showOverlay = false,
}) => {
  return (
    <div style={{ 
      position: 'relative',
      width: '100%',
      height: '100vh',
      overflow: 'hidden' 
    }}>
      {videoSrc ? (
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          poster={imageSrc}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            zIndex: 0,
            transform: 'translateZ(0)',
            backfaceVisibility: 'hidden',
            WebkitBackfaceVisibility: 'hidden',
          }}
        >
          <source src={videoSrc} type="video/mp4" />
        </video>
      ) : (
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          priority
          style={{
            objectFit: 'cover',
            zIndex: 0,
          }}
        />
      )}

      {/* Overlay - only rendered when showOverlay is true */}
      {showOverlay && (
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: overlayColor.replace(/[\d.]+\)$/, `${overlayOpacity})`),
          zIndex: 1,
          transform: 'translateZ(0)',
          backfaceVisibility: 'hidden',
          WebkitBackfaceVisibility: 'hidden',
          pointerEvents: 'none',
        }} />
      )}

      <Container style={{
        position: 'relative',
        zIndex: 2,
        height: '100%',
        color: 'white'
      }}>
        <Stack 
          gap={3} 
          className="h-100 justify-content-center align-items-center text-center"
        >
          <h1 style={{ fontSize: '3.5rem', fontWeight: 'bold', color: '#ff7823' }}>{heading}</h1>
          <p style={{ fontSize: '1.45rem', maxWidth: '975px' }}>{text}</p>
          <Link href={buttonLink} passHref legacyBehavior>
            <Button 
              variant="primary" 
              size="lg"
              className='btn-custom'
            >
              {buttonText}
            </Button>
          </Link>
        </Stack>
      </Container>
    </div>
  );
};

export default Hero;