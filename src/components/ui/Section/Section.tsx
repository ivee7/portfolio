import { ReactNode, HTMLAttributes } from 'react'
import { Guides } from 'ui/Guides'
import './Section.scss'
import { firstCharToUpper } from 'utils/firstCharToUpper'

interface SectionProps extends HTMLAttributes<HTMLDivElement> {
    theme: 'dark' | 'light'
    hasGuides?: boolean
    angleTop?: boolean
    angleBottom?: boolean
    borderTop?: 'solid' | 'dashed'
    borderBottom?: 'solid' | 'dashed'
    children: ReactNode
    header?: boolean
    padded?: boolean
}

export const Section: React.FC<SectionProps> = ({
    theme,
    hasGuides,
    angleBottom,
    angleTop,
    borderBottom,
    borderTop,
    children,
    header,
    padded,
    ...props
}) => {
    const sectionClasses = {
        class: 'section',
        theme: `section--${theme}`,
        header: header ? 'section--header' : null,
        padded: padded ? 'section--padded' : null,
        angleTop: angleTop ? `section--angleTop` : null,
        angleBottom: angleBottom ? `section--angleBottom` : null,
        borderBottom: borderBottom ? `section--borderBottom${firstCharToUpper(borderBottom)}` : null,
        borderTop: borderTop ? `section--borderTop${firstCharToUpper(borderTop)}` : null,
    }

    const handleSectionClasses = () => {
        return Object.values(sectionClasses).filter(Boolean).join(' ');
    }

    return (
        <section className={handleSectionClasses()} {...props}>
            <div className='section__masked'>
                <div className='section__background-mask'>
                    <div className='section__background'>
                        { hasGuides && <Guides theme={theme} /> }
                    </div>
                </div>
                <div className='section__container'>
                    <div className='section__layout-container'>
                        <div className='section__layout'>
                            { children }
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}