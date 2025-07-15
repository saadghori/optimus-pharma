import React from 'react';
import { Container, Stack } from 'react-bootstrap';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from 'react-bootstrap';

const Hero = ({ 
  imageSrc, 
  imageAlt, 
  heading, 
  text, 
  buttonText, 
  overlayOpacity = 0.15, 
  buttonLink = '/contact',
  overlayColor = 'rgba(31, 33, 53, 0.72)' // Default overlay color, fully opaque for base
}) => {
  return (
    <div style={{ 
      position: 'relative',
      width: '100%',
      height: '100vh',
      
    }}>
      <Image
        src={imageSrc}
        alt={imageAlt}
        fill
        priority
        quality={80}
        style={{
          objectFit: 'cover',
          zIndex: 0,
        }}
      />

      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: `${overlayColor.replace(/1\)/, overlayOpacity + ')')}`, // Apply opacity to the color
        zIndex: 1
      }} />

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
          <h1 style={{ fontSize: '3.5rem', fontWeight: 'bold' }}>{heading}</h1>
          <p style={{ fontSize: '1.75rem', maxWidth: '600px' }}>{text}</p>
          <Link href={buttonLink} passHref>
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