import React from 'react';
import styles from './Button.module.css';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary';
    fullWidth?: boolean;
    children: React.ReactNode;
}

export const Button = ({
    className = '',
    variant = 'primary',
    fullWidth = false,
    children,
    ...props
}: ButtonProps) => {
    return (
        <button
            className={`
        ${styles.button} 
        ${styles[variant]} 
        ${fullWidth ? styles.fullWidth : ''} 
        ${className}
      `}
            {...props}
        >
            {children}
        </button>
    );
};
