import React from 'react';

interface CardProps {
    imageUrl: string;
    competitionName: string;
    placement: string;
}

const Card: React.FC<CardProps> = ({ imageUrl, competitionName, placement }) => {
    return (
        <div className="relative w-full h-[500px] rounded-lg overflow-hidden shadow-lg transform transition-transform hover:scale-105">
            <div
                className="absolute inset-0 bg-cover bg-center transition-opacity duration-300 hover:opacity-50"
                style={{ backgroundImage: `url(${imageUrl})` }}
            ></div>
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                <h2 className="text-white text-lg font-bold">{competitionName}</h2>
                <p className="text-white text-sm">{placement}</p>
            </div>
        </div>
    );
};

export default Card;