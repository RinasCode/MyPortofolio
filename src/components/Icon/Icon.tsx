import React from 'react';
import {FC, memo} from 'react';
import PropTypes from 'prop-types';

export interface IconProps extends React.HTMLAttributes<SVGSVGElement> {
  svgRef?: React.Ref<SVGSVGElement>; // Tetap menggunakan Ref di TypeScript
  transform?: string;
}

const Icon: FC<IconProps> = memo(({children, className, svgRef, transform, ...props}) => (
  <svg
    className={className}
    fill="currentColor"
    ref={svgRef}
    transform={transform}
    viewBox="0 0 128 128"
    width="128"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    {children}
  </svg>
));

Icon.displayName = 'Icon';

// Validasi PropTypes hanya untuk prop yang lain, kecuali svgRef
Icon.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  transform: PropTypes.string,
};

export default Icon;
