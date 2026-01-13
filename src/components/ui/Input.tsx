import React from 'react';
import styles from './Input.module.css';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    containerClassName?: string;
}

export const Input = ({ className = '', containerClassName = '', ...props }: InputProps) => {
    return (
        <div className={`${styles.inputWrapper} ${containerClassName}`}>
            <input
                className={`${styles.input} ${className}`}
                {...props}
            />
        </div>
    );
};
