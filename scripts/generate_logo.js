import { Resvg } from '@resvg/resvg-js';
import fs from 'fs';
import path from 'path';

// Construct the high-fidelity vector SVG matching the user's uploaded logo
const svgContent = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 360" width="1000" height="360">
  <defs>
    <!-- Top Ribbon Gradient -->
    <linearGradient id="topRibbon" x1="0%" y1="0%" x2="100%" y2="80%">
      <stop offset="0%" stop-color="#00A2EA"/>
      <stop offset="50%" stop-color="#008BE2"/>
      <stop offset="100%" stop-color="#006CC6"/>
    </linearGradient>

    <!-- Top Inner Fold (Dark Shadow) -->
    <linearGradient id="topInnerShadow" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#004D8C"/>
      <stop offset="70%" stop-color="#003566"/>
      <stop offset="100%" stop-color="#00284D"/>
    </linearGradient>

    <!-- Middle Ribbon (S-curve spine) -->
    <linearGradient id="midRibbon" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#006AC2"/>
      <stop offset="40%" stop-color="#008BE2"/>
      <stop offset="100%" stop-color="#00A5ED"/>
    </linearGradient>

    <!-- Middle Inner Shadow -->
    <linearGradient id="midInnerShadow" x1="0%" y1="100%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#002D59"/>
      <stop offset="60%" stop-color="#004682"/>
      <stop offset="100%" stop-color="#005B9E"/>
    </linearGradient>

    <!-- Bottom Shield Outer Bowl -->
    <linearGradient id="bottomBowl" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#007ED8"/>
      <stop offset="50%" stop-color="#0066BE"/>
      <stop offset="100%" stop-color="#004F9E"/>
    </linearGradient>

    <!-- Bottom Inner Rim Light -->
    <linearGradient id="bottomRim" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#00A5ED"/>
      <stop offset="60%" stop-color="#0088DD"/>
      <stop offset="100%" stop-color="#0063B8"/>
    </linearGradient>
  </defs>

  <!-- 3D SHIELD EMBLEM -->
  <g id="shield-emblem" transform="translate(15, 10)">
    
    <!-- 1. Top Ribbon Cap -->
    <!-- Curved top arch of shield, curving down to upper inner fold -->
    <path d="M 28 65 C 55 25, 120 10, 165 14 C 210 18, 275 35, 305 65 C 308 100, 290 125, 270 135 C 205 165, 100 135, 28 65 Z" fill="url(#topRibbon)"/>

    <!-- 2. Top Inner Dark Fold / Crease -->
    <path d="M 28 65 C 60 115, 140 145, 205 140 C 245 137, 280 120, 298 90 C 275 125, 215 155, 160 152 C 95 148, 45 110, 28 65 Z" fill="url(#topInnerShadow)"/>

    <!-- 3. Middle Sweeping Ribbon (The core 'S' diagonal fold) -->
    <!-- Starting from right shoulder, sweeping across and down to left side -->
    <path d="M 40 115 C 90 95, 195 105, 275 130 C 295 136, 310 152, 285 185 C 240 235, 130 220, 35 155 C 20 145, 22 125, 40 115 Z" fill="url(#midRibbon)"/>

    <!-- 4. Lower Inner Shadow -->
    <path d="M 35 155 C 75 190, 145 225, 220 220 C 265 217, 295 190, 295 190 C 275 220, 225 242, 170 240 C 105 238, 55 200, 35 155 Z" fill="url(#midInnerShadow)"/>

    <!-- 5. Bottom Shield Apex Bowl -->
    <!-- Lower body curving down to the bottom rounded apex point -->
    <path d="M 42 200 C 65 205, 170 240, 280 190 C 295 205, 280 245, 240 285 C 195 330, 165 345, 150 345 C 135 345, 105 330, 68 285 C 42 250, 35 220, 42 200 Z" fill="url(#bottomBowl)"/>

    <!-- 6. Bottom Rim Upper Edge Fold (Gives distinct 3D lip) -->
    <path d="M 42 200 C 85 240, 190 255, 280 190 C 265 210, 195 240, 140 238 C 85 235, 52 215, 42 200 Z" fill="url(#bottomRim)"/>
  </g>

  <!-- TYPOGRAPHY -->
  <g id="brand-text" fill="#242424">
    <!-- SAMARTH -->
    <text x="340" y="205" font-family="'Plus Jakarta Sans', 'Inter', 'Montserrat', 'Arial Black', sans-serif" font-size="160" font-weight="900" letter-spacing="-2">SAMARTH</text>
    
    <!-- VENTURES -->
    <text x="342" y="285" font-family="'Plus Jakarta Sans', 'Inter', 'Montserrat', 'Arial', sans-serif" font-size="70" font-weight="800" letter-spacing="18.5">VENTURES</text>
  </g>
</svg>`;

// Convert SVG to high-res PNG using @resvg/resvg-js
const resvg = new Resvg(svgContent, {
  fitTo: {
    mode: 'width',
    value: 1200
  }
});

const pngData = resvg.render();
const pngBuffer = pngData.asPng();

// Write to public, root, and dist
fs.writeFileSync('public/samarth ventures logo - horizontal.png', pngBuffer);
fs.writeFileSync('samarth ventures logo - horizontal.png', pngBuffer);
if (fs.existsSync('dist')) {
  fs.writeFileSync('dist/samarth ventures logo - horizontal.png', pngBuffer);
}
fs.writeFileSync('public/samarth-ventures-logo-horizontal.svg', svgContent);

console.log('Logo generated successfully!');
console.log('PNG size:', pngBuffer.length, 'bytes');
