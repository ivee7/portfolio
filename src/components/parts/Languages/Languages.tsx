import { Button } from "components/ui/Button"
import { FC, HTMLAttributes } from "react"
import './Languages.scss'
import { isOdd } from 'utils/isOdd'
import { useContext } from 'react'
import { langCodes, LangugeCodes } from 'lang/Translation'
import { LocalizationContext } from 'hooks/useLocalization'

interface LanguagesProps extends HTMLAttributes<HTMLUListElement> {
    className?: string
}

export const Languages: FC<LanguagesProps> = ({className, ...props}) => {
    const { lang, toggleLang } = useContext(LocalizationContext);

    const toggleTab = (code: LangugeCodes): void => {
        if (code !== lang) {
            toggleLang(code);
        }
    };

    return (
        <ul className={`languages ${className ? ` ${className}` : ''}`} {...props}>
            {langCodes.map(({code, text}, index) => (
                <li key={code} className='text-big'>
                    <Button
                        active={code === lang}
                        theme='simple'
                        className='languages__lang'
                        onClick={() => toggleTab(code)}
                    >
                        {text}
                    </Button>
                    {isOdd(index + 1) && '/'}
                </li>
                )
            )}
        </ul>
    )
}