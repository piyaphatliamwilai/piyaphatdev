'use client'
import React, { useState, useEffect } from 'react';

interface CarouselProps {
    images: string[];
}

const Carousel: React.FC<CarouselProps> = ({ images }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);

    const nextImage = () => {
        if (!isAnimating) {
            setIsAnimating(true);
            setCurrentIndex((prevIndex) => {
                const nextIndex = (prevIndex + 1) % images.length;
                return nextIndex;
            });
        }
    };

    const prevImage = () => {
        if (!isAnimating) {
            setIsAnimating(true);
            setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
        }
    };

    useEffect(() => {
        const handleAnimationEnd = () => {
            setIsAnimating(false);
        };

        const imgElement = document.getElementById('carousel-image');
        imgElement?.addEventListener('transitionend', handleAnimationEnd);

        return () => {
            imgElement?.removeEventListener('transitionend', handleAnimationEnd);
        };
    }, [currentIndex]);

    useEffect(() => {
        const interval = setInterval(() => {
            nextImage();
        }, 5000);

        return () => clearInterval(interval);
    }, [currentIndex]);

    return (
        <div style={{ width: '100%', height: '100%', overflow: 'hidden', position: 'relative' }}>
            <div
                id="carousel-image"
                style={{
                    display: 'flex',
                    transition: 'transform 0.5s ease-in-out',
                    transform: `translateX(-${(currentIndex / images.length) * 100}%)`,
                    width: `${images.length * 100}%`,
                }}
            >
                {images.map((image, index) => (
                    <img
                        key={index}
                        src={image}
                        alt={`carousel-${index}`}
                        style={{ width: `${100 / images.length}%`, height: '100%', objectFit: 'cover' }}
                    />
                ))}
            </div>
            <button
                onClick={prevImage}
                style={{
                    position: 'absolute',
                    top: '50%',
                    left: '10px',
                    transform: 'translateY(-50%)',
                    background: 'rgba(0, 0, 0, 0.5)',
                    color: 'white',
                    border: 'none',
                    borderRadius: '50%',
                    cursor: 'pointer',
                }}
            >
                {'<'}
            </button>
            <button
                onClick={nextImage}
                style={{
                    position: 'absolute',
                    top: '50%',
                    right: '10px',
                    transform: 'translateY(-50%)',
                    background: 'rgba(0, 0, 0, 0.5)',
                    color: 'white',
                    border: 'none',
                    borderRadius: '50%',
                    cursor: 'pointer',
                }}
            >
                {'>'}
            </button>
        </div>
    );
};

export default Carousel;
