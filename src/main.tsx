import React from 'react';
import ReactDOM from 'react-dom/client';
import { TestimonialsSection } from './components/TestimonialsDemoPage';

const rootElement = document.getElementById('testimonials-root');
if (rootElement) {
  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      <TestimonialsSection />
    </React.StrictMode>
  );
}
