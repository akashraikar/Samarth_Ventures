import React from 'react';

interface BrandLogoProps {
  className?: string;
  variant?: 'color' | 'white';
}

export const BrandLogo: React.FC<BrandLogoProps> = ({ 
  className = 'h-10 sm:h-12 w-auto',
  variant = 'color'
}) => {
  const textColor = variant === 'white' ? '#FFFFFF' : '#232323';

  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 1020 340" 
      className={className}
      fill="none"
      aria-label="Samarth Ventures"
    >
      <defs>
        {/* Top Rim Gradient */}
        <linearGradient id="svTopRibbon" x1="0%" y1="0%" x2="100%" y2="80%">
          <stop offset="0%" stopColor="#00A2EA" />
          <stop offset="45%" stopColor="#008BE2" />
          <stop offset="100%" stopColor="#006CC6" />
        </linearGradient>

        {/* Top Inner Shadow */}
        <linearGradient id="svTopInnerShadow" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#004D8C" />
          <stop offset="70%" stopColor="#003566" />
          <stop offset="100%" stopColor="#00284D" />
        </linearGradient>

        {/* Mid Ribbon S-Curve */}
        <linearGradient id="svMidRibbon" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#006AC2" />
          <stop offset="40%" stopColor="#008BE2" />
          <stop offset="100%" stopColor="#00A5ED" />
        </linearGradient>

        {/* Mid Inner Shadow */}
        <linearGradient id="svMidInnerShadow" x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#002D59" />
          <stop offset="60%" stopColor="#004682" />
          <stop offset="100%" stopColor="#005B9E" />
        </linearGradient>

        {/* Bottom Shield Bowl */}
        <linearGradient id="svBottomBowl" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#007ED8" />
          <stop offset="50%" stopColor="#0066BE" />
          <stop offset="100%" stopColor="#004F9E" />
        </linearGradient>

        {/* Bottom Rim Highlight */}
        <linearGradient id="svBottomRim" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#00A5ED" />
          <stop offset="60%" stopColor="#0088DD" />
          <stop offset="100%" stopColor="#0063B8" />
        </linearGradient>
      </defs>

      {/* 3D SHIELD EMBLEM */}
      <g id="shield-mark" transform="translate(10, 5)">
        {/* 1. Top Ribbon Arch */}
        <path 
          d="M 28 65 C 55 25, 120 10, 165 14 C 210 18, 275 35, 305 65 C 308 100, 290 125, 270 135 C 205 165, 100 135, 28 65 Z" 
          fill="url(#svTopRibbon)" 
        />

        {/* 2. Top Inner Dark Fold */}
        <path 
          d="M 28 65 C 60 115, 140 145, 205 140 C 245 137, 280 120, 298 90 C 275 125, 215 155, 160 152 C 95 148, 45 110, 28 65 Z" 
          fill="url(#svTopInnerShadow)" 
        />

        {/* 3. Middle Sweeping Ribbon */}
        <path 
          d="M 40 115 C 90 95, 195 105, 275 130 C 295 136, 310 152, 285 185 C 240 235, 130 220, 35 155 C 20 145, 22 125, 40 115 Z" 
          fill="url(#svMidRibbon)" 
        />

        {/* 4. Lower Inner Shadow */}
        <path 
          d="M 35 155 C 75 190, 145 225, 220 220 C 265 217, 295 190, 295 190 C 275 220, 225 242, 170 240 C 105 238, 55 200, 35 155 Z" 
          fill="url(#svMidInnerShadow)" 
        />

        {/* 5. Bottom Shield Apex Bowl */}
        <path 
          d="M 42 200 C 65 205, 170 240, 280 190 C 295 205, 280 245, 240 285 C 195 330, 165 345, 150 345 C 135 345, 105 330, 68 285 C 42 250, 35 220, 42 200 Z" 
          fill="url(#svBottomBowl)" 
        />

        {/* 6. Bottom Rim Upper Edge Fold */}
        <path 
          d="M 42 200 C 85 240, 190 255, 280 190 C 265 210, 195 240, 140 238 C 85 235, 52 215, 42 200 Z" 
          fill="url(#svBottomRim)" 
        />
      </g>

      {/* TYPOGRAPHY */}
      <g id="brand-typography" fill={textColor}>
        {/* SAMARTH */}
        <text 
          x="340" 
          y="200" 
          fontFamily="'Plus Jakarta Sans', system-ui, -apple-system, sans-serif" 
          fontSize="162" 
          fontWeight="900" 
          letterSpacing="-1.5"
        >
          SAMARTH
        </text>
        
        {/* VENTURES */}
        <text 
          x="342" 
          y="280" 
          fontFamily="'Plus Jakarta Sans', system-ui, -apple-system, sans-serif" 
          fontSize="72" 
          fontWeight="800" 
          letterSpacing="19.5"
        >
          VENTURES
        </text>
      </g>
    </svg>
  );
};
