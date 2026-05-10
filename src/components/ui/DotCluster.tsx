import React from 'react';

interface DotClusterProps {
  color: string;
}

export function DotCluster({ color }: DotClusterProps) {
  // 3x3 grid opacities:
  // Top-left: 0.15
  // Bottom-right: 1.0
  // Smooth gradient across the rest
  const opacities = [
    0.15, 0.25, 0.40,
    0.25, 0.50, 0.70,
    0.40, 0.70, 1.00
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
            width: '8px',
            height: '8px',
            borderRadius: '50%',
            backgroundColor: color,
            opacity: opacity,
          }}
        />
      ))}
    </div>
  );
}
