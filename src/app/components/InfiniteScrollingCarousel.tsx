import React, { useEffect, useRef } from 'react';

interface CarouselItem {
    picture: string;
    author: string;
    song: string;
}

interface InfiniteScrollingCarouselProps {
    items: CarouselItem[];
}

const InfiniteScrollingCarousel: React.FC<InfiniteScrollingCarouselProps> = ({ items }) => {
    const carouselRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const carousel = carouselRef.current;
        if (carousel) {
            let scrollAmount = 0;
            const scrollStep = 3;
            const scrollInterval = 20;

            const scroll = () => {
                if (carousel.scrollLeft >= carousel.scrollWidth / 2) {
                    scrollAmount = 0;
                    carousel.scrollLeft = 0;
                } else {
                    scrollAmount += scrollStep;
                }
                carousel.scrollTo({
                    left: scrollAmount,
                    behavior: 'smooth',
                });
            };

            const intervalId = setInterval(scroll, scrollInterval);

            return () => clearInterval(intervalId);
        }
    }, []);

    return (
        <div className="overflow-hidden" ref={carouselRef}>
            <div className="flex">
                {[...items, ...items].map((item, index) => (
                    <div className="flex-shrink-0 w-64 p-4" key={index}>
                        <img src={item.picture} alt={item.song} className="w-full h-60 object-cover" />
                        <div className="mt-2">
                            <h3 className="text-lg font-semibold">{item.song}</h3>
                            <p className="text-gray-500">{item.author}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default InfiniteScrollingCarousel;