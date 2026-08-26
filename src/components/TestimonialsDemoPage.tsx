import React from "react";
import { TestimonialsCarousel, Testimonial } from "./ui/testimonials-carousel";

const testimonials: Testimonial[] = [
  {
    text: "The robotic knee replacement completely changed my life. I was back walking without pain in just three weeks. The care at Sanadi Orthopedic was phenomenal.",
    highlight: "robotic knee replacement",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&auto=format&fit=crop&q=80",
    name: "Priya Kapoor",
    role: "Total Knee Replacement Patient",
  },
  {
    text: "Minimally invasive spine surgery restored my back mobility instantly. Dr. Vance and the rehabilitation team gave me back my active lifestyle.",
    highlight: "spine surgery",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80",
    name: "Rohit Verma",
    role: "Spine Care Patient",
  },
  {
    text: "My ACL reconstruction surgery went so smoothly. Within four months I was back on the football field with full knee stability.",
    highlight: "ACL reconstruction surgery",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80",
    name: "Anjali Mehta",
    role: "Sports Medicine Patient",
  },
  {
    text: "The post-op physical rehabilitation team at Sanadi Orthopedic is top-tier. Every step of my recovery was guided with care.",
    highlight: "physical rehabilitation team",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80",
    name: "Siddharth Rao",
    role: "Hip Arthroscopy Patient",
  },
  {
    text: "World-class orthopedic surgeons and state-of-the-art facilities. I recommend Sanadi Orthopedic to anyone suffering from joint pain.",
    highlight: "orthopedic surgeons",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&auto=format&fit=crop&q=80",
    name: "Nisha Sharma",
    role: "Shoulder Reconstruction Patient",
  },
];

export const TestimonialsSection = () => {
  return (
    <section className="reviews-section bg-white text-slate-900 py-16 px-4 border-t border-b border-slate-100 my-8 w-full" id="reviews">
      <div className="max-w-4xl mx-auto text-center">
        <span class="section-tag" style={{ textTransform: 'uppercase', fontSize: '0.825rem', fontWeight: 700, letterSpacing: '0.08em', color: 'var(--color-medical-blue)', marginBottom: '12px', display: 'block' }}>
          PATIENT TESTIMONIALS
        </span>
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 mb-3" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
          What Our Patients Say
        </h2>
        <p className="text-slate-600 text-base sm:text-lg max-w-2xl mx-auto">
          Hear from patients who regained pain-free mobility and active living at Sanadi Orthopedic Hospital.
        </p>
      </div>

      <div className="mt-10 space-y-6 w-full overflow-hidden">
        <TestimonialsCarousel
          testimonials={testimonials}
          speed={28}
          direction="left"
          cardHeight={210}
        />
        <TestimonialsCarousel
          testimonials={testimonials}
          speed={32}
          direction="right"
          cardHeight={210}
        />
      </div>
    </section>
  );
};

export default TestimonialsSection;
