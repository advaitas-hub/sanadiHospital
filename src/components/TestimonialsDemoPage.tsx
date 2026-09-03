import React from "react";
import { TestimonialsCarousel, Testimonial } from "./ui/testimonials-carousel";

const testimonials: Testimonial[] = [
  {
    text: "I am very thankful to Sanadi Hospital for the excellent treatment and care I received after my thigh bone fracture in an accident. The doctors and staff were very supportive, professional, and caring throughout my recovery.",
    highlight: "thigh bone fracture",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&auto=format&fit=crop&q=80",
    name: "Shankar Ammanagi",
    role: "Trauma & Fracture Care Patient",
  },
  {
    text: "I visited Sanadi Hospital for back pain caused by my tailoring work. The doctors provided excellent treatment and care, and I have recovered well and feel much better now.",
    highlight: "back pain",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80",
    name: "Manjula",
    role: "Spine & Back Care Patient",
  },
  {
    text: "I was suffering from severe neck pain and stiffness. The doctors at Sanadi Hospital diagnosed the issue accurately and treated me with effective therapy and care. I am now completely pain-free.",
    highlight: "neck pain",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80",
    name: "Jayashree",
    role: "Neck Pain & Spine Care Patient",
  },
  {
    text: "The hip treatment and rehabilitation program at Sanadi Hospital exceeded all my expectations. The doctors provided expert guidance, and the post-operative physical therapy helped me walk freely again.",
    highlight: "hip treatment and rehabilitation",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80",
    name: "Sidappa",
    role: "Hip Care & Rehabilitation Patient",
  },
  {
    text: "The total knee replacement surgery at Sanadi Hospital completely restored my mobility. I can now walk comfortably without any joint pain. Truly grateful to the skilled surgeons and supportive staff.",
    highlight: "knee replacement surgery",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&auto=format&fit=crop&q=80",
    name: "Umesh",
    role: "Total Knee Replacement Patient",
  },
  {
    text: "My son suffered a hand fracture in an accident. The doctors at Sanadi Hospital provided gentle, expert care and excellent treatment. My son has recovered completely and is back to his daily activities.",
    highlight: "hand fracture",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80",
    name: "Kantesh",
    role: "Pediatric Fracture Care Patient Parent",
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
