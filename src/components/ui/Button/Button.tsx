import { HTMLAttributes } from 'react'
import './Button.scss'

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode
    theme?: 'simple'
    className?: string
    active?: boolean
}

export const Button: React.FC<ButtonProps> = ({theme, active, className, ...props}) => {
    const topic = theme ? ` button--${theme}` : '';
    const name = className ? ` ${className}` : '';
    const highlighted = active ? ' button--active' : '';

    return (
        <button
            {...props}
            className={`button${topic}${name}${highlighted}`}
        >
            { props.children }
        </button>
    )
}