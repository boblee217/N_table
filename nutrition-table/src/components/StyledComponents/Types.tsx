import React, {ButtonHTMLAttributes, ReactFragment} from 'react';

export interface IButton extends React.DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>{
    children: string | ReactFragment;
    className?: string;
    buttonStyle?: "Primary" | "Transparent" | "Borderless" | "Accesibility";
}