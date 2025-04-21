import React from 'react';

interface PdfIconProps {
  className?: string;
}

const PdfIcon: React.FC<PdfIconProps> = ({ className }) => {
  return (
    <svg viewBox="0 0 24 24" className={className}>
      <path
        fill="currentColor"
        d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0-2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"
      />
      <polyline
        fill="none"
        stroke="white"
        strokeWidth="1.5"
        points="14 2 14 8 20 8"
      />
      <path
        fill="none"
        stroke="white"
        strokeWidth="1.5"
        d="M9 13h6m-6 3h6m-6-6h2"
      />
    </svg>
  );
};

export default PdfIcon;