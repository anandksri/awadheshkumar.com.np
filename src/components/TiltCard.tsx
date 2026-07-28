import React from 'react';

interface TiltCardProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
}

export const TiltCard: React.FC<TiltCardProps> = ({
  children,
  className = '',
  id
}) => {
  return (
    <div
      id={id}
      className={`relative transition-transform duration-200 ease-out glass-panel rounded-2xl overflow-hidden hover:scale-[1.02] ${className}`}
    >
      {children}
    </div>
  );
};
