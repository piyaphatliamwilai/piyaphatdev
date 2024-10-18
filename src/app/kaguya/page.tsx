'use client'
import React, { useEffect, useRef, useState } from 'react';

const colors = ['red', 'green', 'blue', 'yellow', 'purple', 'orange'];

const getRandomColor = () => colors[Math.floor(Math.random() * colors.length)];

const DVDLogo: React.FC = () => {
    const [position, setPosition] = useState({ x: 100, y: 100 });
    const [velocity, setVelocity] = useState({ x: 5, y: 5 });
    const [hueRotate, setHueRotate] = useState(0);
    const logoRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const moveLogo = () => {
            setPosition((prev) => {
                let newX = prev.x + velocity.x;
                let newY = prev.y + velocity.y;
                let newVelocity = { ...velocity };

                if (logoRef.current) {
                    const { clientWidth, clientHeight } = logoRef.current;
                    const { innerWidth, innerHeight } = window;

                    if (newX <= 0 || newX + clientWidth >= innerWidth) {
                        newVelocity.x = -velocity.x;
                        setHueRotate((prev) => (prev + 60) % 360); // Rotate hue by 60 degrees
                    }
                    if (newY <= 0 || newY + clientHeight >= innerHeight) {
                        newVelocity.y = -velocity.y;
                        setHueRotate((prev) => (prev + 60) % 360); // Rotate hue by 60 degrees
                    }
                }

                setVelocity(newVelocity);
                return { x: newX, y: newY };
            });
        };

        const intervalId = setInterval(moveLogo, 10);
        return () => clearInterval(intervalId);
    }, [velocity]);

    return (
        <div
            ref={logoRef}
            style={{
                position: 'absolute',
                top: position.y,
                left: position.x,
                width: '200px',
                height: '200px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                zIndex: 1, // Ensure the DVD logo is on top
                filter: `hue-rotate(${hueRotate}deg)`,
            }}
        >
            <img
                src="https://avatars.githubusercontent.com/u/82884260?v=4" // Replace with the path to your image
                alt="guya"
                style={{ width: '100%', height: '100%' }}
            />
        </div>
    );
};

const App: React.FC = () => {
    return (
        <div style={{ width: '100vw', height: '100vh', position: 'relative' }}>
            <h1
                style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    zIndex: 0, // Ensure the text is behind the DVD logo
                    textAlign: 'center',
                }}
            >
                it seems that you are lost, here is kaguya bouncing around
            </h1>
            <DVDLogo />
        </div>
    );
};

export default App;