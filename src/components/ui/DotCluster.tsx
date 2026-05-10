import React from 'react';

interface DotClusterProps {
  color: string;
  size?: number;
}

export function DotCluster({ color, size = 8 }: DotClusterProps) {
  // A 3x3 grid means 9 dots. 
  // We want opacity to go from ~0.2 to 1.0.
  // We can just define an array of 9 opacities.
  const opacities = [
    0.2, 0.3, 0.4,
    0.3, 0.5, 0.7,
    0.4, 0.7, 1.0
  ];

  return (
    <div 
      style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(3, 1fr)', 
        gap: '3px',
        width: 'fit-content'
      }}
    >
      {opacities.map((opacity, i) => (
        <div
          key={i}
          style={{
            width: `${size}px`,
            height: `${size}px`,
            borderRadius: '50%',
            backgroundColor: color,
            opacity: opacity,
          }}
        />
      ))}
    </div>
  );
}
