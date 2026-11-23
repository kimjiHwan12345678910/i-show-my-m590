import React from 'react';

interface MouseVisualProps {
  color?: 'black' | 'gray' | 'red';
  activeChannel?: 1 | 2;
  highlightPart?: 'wheel' | 'easySwitch' | 'sideButtons' | 'powerSwitch' | 'unifying' | null;
  className?: string;
}

export const MouseVisual: React.FC<MouseVisualProps> = ({
  color = 'black',
  activeChannel = 1,
  highlightPart = null,
  className = '',
}) => {
  const colorThemes = {
    black: {
      body: '#2D3035',
      bodyDark: '#1E2024',
      accent: '#3F444D',
      grip: '#1A1C1E',
      ring: '#D6F5F0',
    },
    gray: {
      body: '#8A919A',
      bodyDark: '#6B7280',
      accent: '#9CA3AF',
      grip: '#4B5563',
      ring: '#D6F5F0',
    },
    red: {
      body: '#B91C1C',
      bodyDark: '#991B1B',
      accent: '#DC2626',
      grip: '#7F1D1D',
      ring: '#D6F5F0',
    },
  };

  const theme = colorThemes[color];

  return (
    <div className={`relative flex items-center justify-center select-none ${className}`}>
      <svg
        viewBox="0 0 340 500"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full max-w-[320px] md:max-w-[380px] drop-shadow-2xl transition-all duration-300"
      >
        <defs>
          <radialGradient id="bodyGrad" cx="50%" cy="40%" r="60%">
            <stop offset="0%" stopColor={theme.body} />
            <stop offset="100%" stopColor={theme.bodyDark} />
          </radialGradient>
          <linearGradient id="splitLine" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#111" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#333" stopOpacity="0.2" />
          </linearGradient>
          <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* Mouse shadow */}
        <ellipse cx="170" cy="460" rx="110" ry="24" fill="black" opacity="0.25" />

        {/* Mouse Base Outer Shell */}
        <path
          d="M170 30 C90 30, 50 110, 48 240 C46 360, 85 450, 170 450 C255 450, 294 360, 292 240 C290 110, 250 30, 170 30 Z"
          fill="url(#bodyGrad)"
          stroke="#40454E"
          strokeWidth="2"
        />

        {/* Textured Rubber Thumb Rest (Left) */}
        <path
          d="M52 200 C45 240, 44 280, 55 330 C65 370, 80 400, 95 420 C75 380, 60 320, 62 250 C63 210, 70 180, 75 160 Z"
          fill={theme.grip}
        />
        {/* Grip Micro-dots pattern */}
        <circle cx="68" cy="240" r="1.5" fill="#555" />
        <circle cx="74" cy="246" r="1.5" fill="#555" />
        <circle cx="65" cy="260" r="1.5" fill="#555" />
        <circle cx="72" cy="268" r="1.5" fill="#555" />
        <circle cx="68" cy="285" r="1.5" fill="#555" />
        <circle cx="76" cy="292" r="1.5" fill="#555" />

        {/* Left Click Separation Curve */}
        <path
          d="M167 32 C130 35, 95 65, 80 130 C70 170, 72 200, 72 200 L167 200 Z"
          fill={theme.body}
          stroke="#1F2328"
          strokeWidth="1.5"
        />

        {/* Right Click Separation Curve */}
        <path
          d="M173 32 C210 35, 245 65, 260 130 C270 170, 268 200, 268 200 L173 200 Z"
          fill={theme.body}
          stroke="#1F2328"
          strokeWidth="1.5"
        />

        {/* Center Split Groove */}
        <line x1="170" y1="32" x2="170" y2="190" stroke="#16181B" strokeWidth="2.5" />

        {/* Scroll Wheel Recess Housing */}
        <rect
          x="154"
          y="70"
          width="32"
          height="80"
          rx="16"
          fill="#121316"
          stroke={highlightPart === 'wheel' ? '#D6F5F0' : '#2D3139'}
          strokeWidth={highlightPart === 'wheel' ? '3' : '1.5'}
          filter={highlightPart === 'wheel' ? 'url(#glow)' : undefined}
        />

        {/* Scroll Wheel with Rubber Ribs */}
        <rect x="159" y="78" width="22" height="64" rx="11" fill="#22252B" />
        {/* Scroll Wheel Tilt Arrows */}
        <path d="M152 110 L147 110" stroke={highlightPart === 'wheel' ? '#D6F5F0' : '#888'} strokeWidth="1.5" />
        <path d="M188 110 L193 110" stroke={highlightPart === 'wheel' ? '#D6F5F0' : '#888'} strokeWidth="1.5" />

        {/* Wheel micro treads */}
        {[86, 94, 102, 110, 118, 126, 134].map((y) => (
          <line key={y} x1="161" y1={y} x2="179" y2={y} stroke="#3D434E" strokeWidth="2" strokeLinecap="round" />
        ))}

        {/* Easy-Switch™ Toggle Button Behind Wheel */}
        <g
          className="cursor-pointer"
          filter={highlightPart === 'easySwitch' ? 'url(#glow)' : undefined}
        >
          <rect
            x="156"
            y="166"
            width="28"
            height="22"
            rx="6"
            fill="#181B1F"
            stroke={highlightPart === 'easySwitch' ? '#D6F5F0' : '#3A3F49'}
            strokeWidth={highlightPart === 'easySwitch' ? '2.5' : '1'}
          />
          {/* Easy-Switch icon symbol */}
          <path d="M165 174 L171 174 M175 180 L169 180" stroke="#8E97A6" strokeWidth="1.5" strokeLinecap="round" />
          <polyline points="169,172 171,174 169,176" fill="none" stroke="#8E97A6" strokeWidth="1.5" />
          <polyline points="171,178 169,180 171,182" fill="none" stroke="#8E97A6" strokeWidth="1.5" />
        </g>

        {/* Channel Indicator 1 and 2 LEDs */}
        <g>
          {/* Channel 1 LED */}
          <circle
            cx="163"
            cy="204"
            r="3.5"
            fill={activeChannel === 1 ? '#D6F5F0' : '#333842'}
            filter={activeChannel === 1 ? 'url(#glow)' : undefined}
          />
          <text x="163" y="217" textAnchor="middle" fill="#999" fontSize="9" fontWeight="bold">
            1
          </text>

          {/* Channel 2 LED */}
          <circle
            cx="177"
            cy="204"
            r="3.5"
            fill={activeChannel === 2 ? '#D6F5F0' : '#333842'}
            filter={activeChannel === 2 ? 'url(#glow)' : undefined}
          />
          <text x="177" y="217" textAnchor="middle" fill="#999" fontSize="9" fontWeight="bold">
            2
          </text>
        </g>

        {/* Side Thumb Buttons (Left) */}
        <g filter={highlightPart === 'sideButtons' ? 'url(#glow)' : undefined}>
          {/* Forward Button */}
          <path
            d="M50 180 C47 195, 46 205, 52 215 L58 212 C55 204, 55 194, 57 182 Z"
            fill="#111316"
            stroke={highlightPart === 'sideButtons' ? '#D6F5F0' : '#454C57'}
            strokeWidth={highlightPart === 'sideButtons' ? '2' : '1'}
          />
          {/* Back Button */}
          <path
            d="M52 220 C48 235, 48 245, 55 258 L61 254 C57 244, 56 235, 58 223 Z"
            fill="#111316"
            stroke={highlightPart === 'sideButtons' ? '#D6F5F0' : '#454C57'}
            strokeWidth={highlightPart === 'sideButtons' ? '2' : '1'}
          />
        </g>

        {/* Palm Rest 'logi' branding */}
        <text
          x="170"
          y="350"
          textAnchor="middle"
          fill={color === 'black' ? '#687282' : '#2D3035'}
          fontSize="24"
          fontWeight="bold"
          letterSpacing="1"
          fontFamily="system-ui, sans-serif"
        >
          logi
        </text>

        {/* Silent Touch Micro Indicator */}
        <text
          x="170"
          y="370"
          textAnchor="middle"
          fill="#8A92A0"
          fontSize="8"
          letterSpacing="2"
        >
          SILENT TOUCH
        </text>
      </svg>
    </div>
  );
};
