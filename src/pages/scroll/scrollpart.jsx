import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { land, water, kids } from "../../data";
import { useRide } from "../../context/RiderContext";

const ScrollCarousel = () => {
  const { activeTab } = useRide();
  const [currentIndex, setCurrentIndex] = useState(0);
  const visibleItems = 4;
  const cardWidth = 220;
  const gapWidth = 20;
  const containerWidth = cardWidth * visibleItems + gapWidth * (visibleItems - 1);
  const scrollDistance = cardWidth + gapWidth;
  const delay = 4000;

  const rideData =
    activeTab === "Land"
      ? land
      : activeTab === "Water"
      ? water
      : kids;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) =>
        (prev + 1) % (rideData.length - visibleItems + 1)
      );
    }, delay);
    return () => clearInterval(interval);
  }, [rideData]);

  const scrollLeft = () => {
    setCurrentIndex((prev) =>
      prev > 0 ? prev - 1 : rideData.length - visibleItems
    );
  };

  const scrollRight = () => {
    setCurrentIndex((prev) =>
      (prev + 1) % (rideData.length - visibleItems + 1)
    );
  };

  return (
    <div
      className="bg-[#1E2A47] py-5"
      style={{ width: `${containerWidth + 40}px`, margin: "0 auto" }}
    >
      <div>
        {/* Header and Buttons */}
        <div className="flex justify-between items-center mb-10 pr-7">
          <h2 className="text-white text-6xl font-black uppercase">
            Our Iconic Rides
          </h2>
          <div className="flex gap-4">
            <button
              onClick={scrollLeft}
              className="flex items-center justify-center w-12 h-12 rounded-full bg-[#fad600] hover:scale-110 transition-all"
            >
              <ChevronLeft className="text-[#1E2A47]" />
            </button>
            <button
              onClick={scrollRight}
              className="flex items-center justify-center w-12 h-12 rounded-full bg-[#fad600] hover:scale-110 transition-all"
            >
              <ChevronRight className="text-[#1E2A47]" />
            </button>
          </div>
        </div>

  
        <div
          className="relative overflow-hidden"
          style={{ width: `${containerWidth}px` }}
        >
          <motion.div
            animate={{ x: `-${currentIndex * scrollDistance}px` }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="flex gap-5 w-max"
          >
            {rideData.map((ride, index) => (
              <div
                key={index}
                className="relative flex-shrink-0 rounded-t-[20px] overflow-hidden w-[220px] h-[340px] shadow-xl group transition-transform"
              >
                <video
                  src={ride.video}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="absolute inset-0 w-full h-full object-cover"
                />

   
                <div className="absolute inset-0 bg-gradient-to-t from-[#22304a] to-transparent" />

        
                <div className="relative z-20 h-full flex flex-col justify-end p-4 text-white text-start">
                  <div>
                    <h3 className="text-lg font-bold">{ride.name}</h3>
                    <p className="text-sm text-gray-200">{ride.location}</p>
                    <p className="text-xs mt-1 line-clamp-3">{ride.description}</p>
                  </div>
                  <button className="mt-2 w-[130px] bg-[#fad600] text-[#334dcf] px-4 py-2 rounded-lg text-xs font-bold uppercase hover:scale-105 transition">
                    Ride Details
                  </button>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

      
        <div className="mt-12">
          <button className="h-12 px-6 w-[280px] rounded-full text-sm font-extrabold text-[#334dcf] bg-[#fad600] hover:scale-105 transition-transform">
            Explore All Rides!
          </button>
        </div>
      </div>
    </div>
  );
};

export default ScrollCarousel;
