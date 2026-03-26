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
  overlayOpacity = 0.5, 
  buttonLink = '/about',
  overlayColor = 'rgba(31, 33, 53, 1)',
  showOverlay = false,
  isDownload = false,
  priority = true 
}) => {
  // Pre-calculate the background color to ensure zero-delay rendering
  const backgroundColor = showOverlay 
    ? overlayColor.replace(/[\d.]+\)$/, `${overlayOpacity})`) 
    : 'transparent';

  const content = (
    <Stack 
      gap={3} 
      className="h-100 justify-content-center align-items-center text-center"
      style={{ paddingTop: '130px' }} 
    >
      <h1 style={{ fontSize: '2.85rem', fontWeight: 'bold', color: '#ff7823' }}>{heading}</h1>
      <div style={{ fontSize: '1.4rem', maxWidth: '975px' }}>{text}</div>
      
      {isDownload ? (
        <a href={buttonLink} download className="btn btn-primary btn-lg btn-custom">
          {buttonText}
        </a>
      ) : (
        <Link href={buttonLink} passHref legacyBehavior>
          <Button variant="primary" size="lg" className='btn-custom'>
            {buttonText}
          </Button>
        </Link>
      )}
    </Stack>
  );

  return (
    <div style={{ position: 'relative', width: '100%', height: '100vh', overflow: 'hidden', backgroundColor: '#1f2135' }}>
      {videoSrc ? (
        <video 
          autoPlay 
          muted 
          loop 
          playsInline 
          preload="auto" 
          style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover', zIndex: 0 }}
        >
          <source src={videoSrc} type="video/mp4" />
        </video>
      ) : (
        <Image 
          src={imageSrc} 
          alt={imageAlt} 
          fill 
          priority={priority} 
          fetchPriority={priority ? "high" : "auto"} 
          style={{ objectFit: 'cover', zIndex: 0 }} 
        />
      )}

      {showOverlay && (
        <div style={{
          position: 'absolute', 
          inset: 0,
          backgroundColor: backgroundColor,
          zIndex: 1, 
          pointerEvents: 'none'
        }} />
      )}

      <Container style={{ position: 'relative', zIndex: 2, height: '100%', color: 'white' }}>
        {content}
      </Container>
    </div>
  );
};

export default Hero;