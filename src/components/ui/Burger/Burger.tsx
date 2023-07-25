import './Burger.scss';

interface BurgerProps {
    className?: string
    active: boolean
    onClick: () => void
}

export const Burger = ({className, active, onClick}: BurgerProps) => {
    const classes = `burger${className ? ` ${className}` : ''}`;

    return (
        <button
            className={classes}
            data-active={active}
            onClick={onClick}
        >
            <div className='burger__inner'>
                <div className='burger__crossbar'/>
                <div className='burger__crossbar'/>
            </div>
        </button>
    )
}