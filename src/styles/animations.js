export const globalStyles = `
  @keyframes float {
    0%, 100% { transform: translateY(0px) rotate(0deg); }
    50% { transform: translateY(-20px) rotate(5deg); }
  }
  
  @keyframes slideIn {
    from { opacity: 0; transform: translateY(50px); }
    to { opacity: 1; transform: translateY(0); }
  }
  
  @keyframes pulse {
    0%, 100% { transform: scale(1); }
    50% { transform: scale(1.05); }
  }
  
  @keyframes shimmer {
    0% { background-position: -1000px 0; }
    100% { background-position: 1000px 0; }
  }
  
  .animate-float {
    animation: float 6s ease-in-out infinite;
  }
  
  .animate-slideIn {
    animation: slideIn 0.8s ease-out forwards;
  }
  
  .animate-pulse-slow {
    animation: pulse 3s ease-in-out infinite;
  }
  
  .shimmer {
    background: linear-gradient(90deg, transparent, rgba(209,161,72,0.3), transparent);
    background-size: 1000px 100%;
    animation: shimmer 3s infinite;
  }
  
  .bento-card {
    transition: all 0.3s ease;
  }
  
  .bento-card:hover {
    transform: translateY(-10px);
    box-shadow: 0 25px 50px -12px rgba(62, 46, 31, 0.25);
  }
`;
