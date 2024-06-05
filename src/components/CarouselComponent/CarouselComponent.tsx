import React, { useRef } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

interface CarouselProps {
  children: React.ReactNode;
}

const CarouselComponent: React.FC<CarouselProps> = ({ children }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  const handleScroll = (scrollOffset: number) => {
    if (containerRef.current) {
      containerRef.current.scrollTo({
        left: containerRef.current.scrollLeft + scrollOffset,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="relative w-full overflow-x-hidden ">
      <div
        className="flex transition-transform gap-[3rem] items-center scrollbar-hide duration-300 relative"
        ref={containerRef}
        style={{ scrollSnapType: 'x mandatory', overflowX: 'scroll', whiteSpace: 'nowrap', minHeight: '100px' }}
      >
        {children}
      </div>
      <div className="absolute bottom-0 left-0 right-0 flex justify-between px-4 pb-4">
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded-lg flex items-center justify-center"
          onClick={() => handleScroll(-200)}
        >
          <FaArrowLeft />
        </button>
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded-lg flex items-center justify-center"
          onClick={() => handleScroll(200)}
        >
          <FaArrowRight />
        </button>
      </div>
    </div>
  );
};

export default CarouselComponent;
