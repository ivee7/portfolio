import React, {HTMLAttributes, HTMLProps} from 'react';
import './Href.scss';

interface HrefProps extends HTMLAttributes<HTMLAnchorElement> {
    children: React.ReactNode
    theme: string
    className?: string
}

export const Href: React.FC<HrefProps & HTMLProps<HTMLAnchorElement>> = ({
    theme, className, ...props
}) => {
    return (
        <a
            {...props}
            className={`href href--${theme}${className ? ` ${className}` : ''}`}
        >
            { props.children }
        </a>
    )
}