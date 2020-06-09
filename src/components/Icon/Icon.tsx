import React from 'react';
import * as svgs from './svg';

type IconType = keyof typeof svgs;
export const iconTypes: IconType[] = Object.keys(svgs) as any[];

export interface IconProps {
  type: IconType;
  color?: string;
  size?: string | number;
  className?: string;
}

function Icon({ type, color = 'black', size = '24px', className }: IconProps) {
  const SVG = svgs[type];
  return (
    <SVG fill={color} width={size} height="auto" className={className}>
      <title>{type}</title>
    </SVG>
  );
}

export default Icon;
