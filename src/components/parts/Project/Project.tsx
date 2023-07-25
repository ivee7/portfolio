import { useContext } from 'react'
import { localize } from 'lang/Translation'
import { LocalizationContext } from 'hooks/useLocalization'
import { Href } from 'components/ui/Href'
import './Project.scss'

interface ProjectProps {
    description?: string
    image: File
    stack: string[]
    repoLink?: string
    siteLink?: string
}

export const Project: React.FC<ProjectProps> = ({
    description,
    image,
    stack,
    repoLink,
    siteLink,
    ...props
}) => {
    const {lang} = useContext(LocalizationContext);

    return (
        <div className='project text-medium' {...props}>
            <div className='project__layout'>
                <div className='project__wrapper'>
                    <img className='project__image' src={image}/>
                    <div className='project__hovered'>
                        {siteLink &&
                            <div className='project__site'>
                                <Href theme='simple' target='_blank' href={siteLink}>{localize(lang, 'viewSite')}</Href>
                            </div>
                        }
                        {repoLink &&
                            <div className='project__github'>
                                <Href theme='simple' target='_blank' href={repoLink}>{localize(lang, 'viewCode')}</Href>
                            </div>
                        }
                    </div>
                </div>
            </div>
            <div className='project__content'>
                <p className='project__description'>
                    {description}
                </p>
                <div className='project__stack'>
                    {stack.map((item, index) => (
                        <div key={index} className='project__tech'>{item}</div>
                    ))}
                </div>
            </div>
        </div>
    )
}