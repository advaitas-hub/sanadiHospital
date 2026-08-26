"use client";

import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const SQRT_5000 = Math.sqrt(5000);

export const testimonials = [
  {
    tempId: 0,
    testimonial: "Pioneered robotic joint replacement protocols reducing recovery times by 50%.",
    by: "Dr. Elena Rostova, Chief Joint Surgeon",
    imgSrc: "/images/doctor-1.jpg"
  },
  {
    tempId: 1,
    testimonial: "Specializes in micro-endoscopic spinal decompression and scoliosis correction.",
    by: "Dr. Marcus Vance, Senior Spine Surgeon",
    imgSrc: "/images/doctor-2.jpg"
  },
  {
    tempId: 2,
    testimonial: "Expert in arthroscopic ACL reconstruction and professional athlete rehabilitation.",
    by: "Dr. Sarah Chen, Sports Injury Lead",
    imgSrc: "/images/doctor-3.jpg"
  },
  {
    tempId: 3,
    testimonial: "Leads 24/7 complex fracture reconstruction and emergency trauma care.",
    by: "Dr. David Okafor, Trauma Specialist",
    imgSrc: "/images/doctor-4.jpg"
  },
  {
    tempId: 4,
    testimonial: "Master of hand, wrist, and delicate microsurgical nerve reconstruction.",
    by: "Dr. Amara Patel, Hand & Wrist Lead",
    imgSrc: "/images/doctor-5.jpg"
  }
];

interface TestimonialCardProps {
  position: number;
  testimonial: typeof testimonials[0];
  handleMove: (steps: number) => void;
  cardSize: number;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ 
  position, 
  testimonial, 
  handleMove, 
  cardSize 
}) => {
  const isCenter = position === 0;

  return (
    <div
      onClick={() => handleMove(position)}
      className={`absolute left-1/2 top-1/2 cursor-pointer border-2 p-8 transition-all duration-500 ease-in-out ${
        isCenter 
          ? "z-10 bg-blue-600 text-white border-blue-600" 
          : "z-0 bg-white text-slate-900 border-slate-200 hover:border-blue-400"
      }`}
      style={{
        width: cardSize,
        height: cardSize,
        clipPath: `polygon(50px 0%, calc(100% - 50px) 0%, 100% 50px, 100% 100%, calc(100% - 50px) 100%, 50px 100%, 0 100%, 0 0)`,
        transform: `
          translate(-50%, -50%) 
          translateX(${(cardSize / 1.5) * position}px)
          translateY(${isCenter ? -65 : position % 2 ? 15 : -15}px)
          rotate(${isCenter ? 0 : position % 2 ? 2.5 : -2.5}deg)
        `,
        boxShadow: isCenter ? "0px 12px 28px rgba(93, 140, 246, 0.3)" : "none"
      }}
    >
      <img
        src={testimonial.imgSrc}
        alt={`${testimonial.by.split(',')[0]}`}
        className="mb-4 h-16 w-16 rounded-full bg-slate-100 object-cover object-top border-2 border-white"
      />
      <h3 className={`text-base sm:text-lg font-semibold ${
        isCenter ? "text-white" : "text-slate-900"
      }`}>
        "{testimonial.testimonial}"
      </h3>
      <p className={`absolute bottom-8 left-8 right-8 mt-2 text-sm italic font-medium ${
        isCenter ? "text-blue-100" : "text-slate-500"
      }`}>
        - {testimonial.by}
      </p>
    </div>
  );
};

export const StaggerTestimonials: React.FC = () => {
  const [cardSize, setCardSize] = useState(365);
  const [testimonialsList, setTestimonialsList] = useState(testimonials);

  const handleMove = (steps: number) => {
    const newList = [...testimonialsList];
    if (steps > 0) {
      for (let i = steps; i > 0; i--) {
        const item = newList.shift();
        if (!item) return;
        newList.push({ ...item, tempId: Math.random() });
      }
    } else {
      for (let i = steps; i < 0; i++) {
        const item = newList.pop();
        if (!item) return;
        newList.unshift({ ...item, tempId: Math.random() });
      }
    }
    setTestimonialsList(newList);
  };

  useEffect(() => {
    const updateSize = () => {
      const { matches } = window.matchMedia("(min-width: 640px)");
      setCardSize(matches ? 365 : 290);
    };

    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  return (
    <div
      className="relative w-full overflow-hidden bg-slate-50 py-12 rounded-3xl border border-slate-200"
      style={{ height: 580 }}
    >
      {testimonialsList.map((testimonial, index) => {
        const position = testimonialsList.length % 2
          ? index - (testimonialsList.length + 1) / 2
          : index - testimonialsList.length / 2;
        return (
          <TestimonialCard
            key={testimonial.tempId}
            testimonial={testimonial}
            handleMove={handleMove}
            position={position}
            cardSize={cardSize}
          />
        );
      })}
      <div className="absolute bottom-6 left-1/2 flex -translate-x-1/2 gap-3 z-20">
        <button
          onClick={() => handleMove(-1)}
          className="flex h-14 w-14 items-center justify-center text-2xl transition-colors bg-white border-2 border-slate-200 rounded-full hover:bg-blue-600 hover:text-white shadow-sm"
          aria-label="Previous specialist"
        >
          <ChevronLeft />
        </button>
        <button
          onClick={() => handleMove(1)}
          className="flex h-14 w-14 items-center justify-center text-2xl transition-colors bg-white border-2 border-slate-200 rounded-full hover:bg-blue-600 hover:text-white shadow-sm"
          aria-label="Next specialist"
        >
          <ChevronRight />
        </button>
      </div>
    </div>
  );
};
