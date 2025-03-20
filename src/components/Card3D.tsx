
import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface Card3DProps {
  children: React.ReactNode;
  className?: string;
  intensity?: number;
}

const Card3D: React.FC<Card3DProps> = ({ 
  children, 
  className = "",
  intensity = 15
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [mouseX, setMouseX] = useState(0);
  const [mouseY, setMouseY] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    
    const rect = cardRef.current.getBoundingClientRect();
    
    // Calculate mouse position relative to the card
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    
    // Calculate the percentage of the mouse position
    const percentX = mouseX / rect.width;
    const percentY = mouseY / rect.height;
    
    // Calculate rotation based on mouse position
    const rotateY = (percentX - 0.5) * intensity;
    const rotateX = (0.5 - percentY) * intensity;
    
    setRotateX(rotateX);
    setRotateY(rotateY);
    
    // Update CSS variables for the shine effect
    setMouseX(mouseX);
    setMouseY(mouseY);
  };
  
  const handleMouseLeave = () => {
    // Reset rotation when mouse leaves
    setRotateX(0);
    setRotateY(0);
  };
  
  return (
    <motion.div
      ref={cardRef}
      className={`card-3d ${className}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
        "--mouse-x": `${mouseX}px`,
        "--mouse-y": `${mouseY}px`
      } as React.CSSProperties}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="card-3d-content">
        {children}
      </div>
      <div className="card-3d-shine" />
    </motion.div>
  );
};

export default Card3D;
