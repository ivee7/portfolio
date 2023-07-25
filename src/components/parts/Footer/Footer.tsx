import './Footer.scss'
import { Href } from 'ui/Href'
import { localize } from 'lang/Translation'
import { useContext } from 'react'
import { LocalizationContext } from 'hooks/useLocalization'

export const Footer = () => {
    const { lang } = useContext(LocalizationContext);

    return (
        <footer className='footer'>
            <p className='footer__item text-medium'>ivees7@yandex.ru</p>
            <div className='footer__lower'>
                <p className='footer__item'>&copy; Ivees7, 2023</p>
                <Href theme='simple' className='footer__item'>{localize(lang, 'privacyPolicy')}</Href>
            </div>
        </footer>
    )
}