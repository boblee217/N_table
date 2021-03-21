import React from 'react';
import {IButton} from './Types'
import './StyledComponents.css';

export const Button = React.forwardRef(
    (
        {children, buttonStyle="Primary",className ="", ...restProps}: IButton,
        ref: React.Ref<HTMLButtonElement>
    ) => (
    <button ref={ref} type="button" className={`Button ${buttonStyle} ${className}`} {...restProps}>
        {children}
    </button>
  )
);