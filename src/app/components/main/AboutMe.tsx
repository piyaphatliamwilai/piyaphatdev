import React from 'react';

const AboutMe: React.FC = () => {
    return (
        <div className="about-me p-6 bg-gray-100 rounded-lg shadow-md">
            <h1 className="text-3xl font-bold mb-4">About Me</h1>
            <p className="text-lg mb-4">
                Hello! I'm [Your Name], a passionate developer with a love for creating dynamic and responsive web applications. I have experience in various technologies including React, TypeScript, and more.
            </p>
            <p className="text-lg mb-4">
                In my free time, I enjoy [Your Hobbies]. I'm always eager to learn new things and take on new challenges.
            </p>
            <p className="text-lg">
                Feel free to connect with me on [Your Social Media Links] or check out my portfolio for more information about my work.
            </p>
        </div>
    );
};

export default AboutMe;