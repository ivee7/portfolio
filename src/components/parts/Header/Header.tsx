import { useState, useContext } from 'react';
import { Button } from 'components/ui/Button'
import { Languages } from 'parts/Languages'
import './Header.scss'
import { DemiluneSVG } from 'icons/DemiluneSVG'
import { LightModeSVG } from 'icons/LightModeSVG'
import { Href } from 'components/ui/Href'
import { Burger } from 'components/ui/Burger'
import { LocalizationContext } from 'hooks/useLocalization'
import { ThemeContext } from 'hooks/useTheme'
import { localize } from 'lang/Translation'

export const Header = () => {
    const [dropdown, setDropdown] = useState(false)
    const { lang } = useContext(LocalizationContext);
    const { theme, toggleTheme } = useContext(ThemeContext);

    const nav = [
        {
            id: 'about',
            text: localize(lang, 'about'),
        },
        {
            id: 'projects',
            text: localize(lang, 'projects')
        },
        {
            id: 'contacts',
            text: localize(lang, 'contacts')
        }
    ];

    const handleBurgerClick = () => {
        if (dropdown) {
            document.getElementById('layout')?.classList.remove('layout--blocked-scroll');
        } else {
            document.getElementById('layout')?.classList.add('layout--blocked-scroll');
        }

        setDropdown(prev => !prev)
    }

    const handleClickNav = (id: string): void => {
        if (dropdown) {
            setDropdown(false)
            document.getElementById('layout')?.classList.remove('layout--blocked-scroll');
        }

        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    }

    return (
        <header className='header'>
            <Button
                theme='simple'
                className='header__item header__mode'
                onClick={() => toggleTheme(theme === 'light' ? 'dark' : 'light')}
            >
                { theme === 'light' ? <DemiluneSVG /> : <LightModeSVG /> }
            </Button>

            <nav className={`header__nav${dropdown ? ' header__nav--emerged' : ''}`}>
                <ul className='header__nav-list'>
                    {nav.map(({id, text}, index) => (
                        <li key={index} className='header__nav-item'>
                            <Href
                                className='text-big'
                                theme='simple'
                                onClick={() => handleClickNav(id)}
                            >
                                {text}
                            </Href>
                        </li>
                    ))}

                    <li className='header__nav-item'>
                        <Languages />
                    </li>
                </ul>
            </nav>

            <Burger className='header__item header__item--burger' active={dropdown} onClick={handleBurgerClick} />
        </header>
    )
}