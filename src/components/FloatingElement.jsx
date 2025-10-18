import React from 'react';

export default function FloatingElement({ delay = 0, children, className = "" }) {
  return (
    <div 
      className={`animate-float ${className}`}
      style={{ animationDelay: `${delay}s` }}
    >
      {children}
    </div>
  );
}
