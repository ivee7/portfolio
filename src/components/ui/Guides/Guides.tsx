import './Guides.scss'

interface GuidesProps {
    theme: 'dark' | 'light'
}

export const Guides: React.FC<GuidesProps> = ({theme}) => {
    return (
        <div className={`guides${theme ? ` guides--${theme}` : ''}`}>
            <div className="guides__container">
                <div className="guides__guide"/>
                <div className="guides__guide"/>
                <div className="guides__guide"/>
                <div className="guides__guide"/>
                <div className="guides__guide"/>
            </div>
        </div>
    )
}