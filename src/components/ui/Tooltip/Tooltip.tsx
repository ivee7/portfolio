import { HTMLAttributes } from 'react'
import './Tooltip.scss'

interface ButtonProps extends HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode
    text: string
    className?: string
}


export const Tooltip: React.FC<ButtonProps> = ({text, className, ...props}) => {
    return (
        <div
            {...props}
            className={`tooltip${className ? className : ''}`}
        >
            <span className="tooltip__text">{text}</span>
            {props.children}
        </div>
    )
}