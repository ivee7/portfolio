import 'parts/Intro/Intro.scss'
import laptop from 'images/laptop.png'
import { Href } from 'components/ui/Href'
import { localize } from 'lang/Translation'
import { useContext } from 'react'
import { LocalizationContext } from 'hooks/useLocalization'
import { ThemeContext } from 'hooks/useTheme'
import { Tooltip } from 'components/ui/Tooltip'

export const Intro = () => {
    const {lang} = useContext(LocalizationContext);
    const {theme} = useContext(ThemeContext);

    const textResume = lang === 'eng' ? 'АНГЛИЙСКОМ' : 'РУССКОМ';
    const themeResume = theme === 'light' ? 'СВЕТЛОМ' : 'ТЕМНОМ';

    return (
        <div className='intro'>
            <div className='intro__block'>
                <div>
                    <h2 className='intro__item title-big'>{localize(lang, 'initials')}</h2>
                    <h2 className='intro__item title-large'>{localize(lang, 'profession')}</h2>
                    <p className='intro__item text-medium'>
                        {localize(lang, 'greeting')}
                    </p>
                    <Tooltip text={`Вы скачиваете резюме на ${textResume} языке в ${themeResume} оформлении`}>
                        <Href
                            className='intro__item text-large'
                            theme='oval'
                            href=''
                            download='SERGEEV_RESUME'
                        >
                            {localize(lang, 'downloadCV')}
                        </Href>
                    </Tooltip>
                </div>
            </div>
            <div className='intro__block'>
                <img className='intro__image' src={laptop} />
            </div>
        </div>
    )
}