import { Href } from 'components/ui/Href'
import './About.scss'
import babel from 'icons/stack/babel.svg'
import docker from 'icons/stack/docker.svg'
import figma from 'icons/stack/figma.svg'
import git from 'icons/stack/git.svg'
import html from 'icons/stack/html.svg'
import js from 'icons/stack/js.svg'
import linux from 'icons/stack/linux.svg'
import nginx from 'icons/stack/nginx.svg'
import nodeJs from 'icons/stack/node-js.svg'
import nuxt from 'icons/stack/nuxt.svg'
import parcel from 'icons/stack/parcel.svg'
import postgresql from 'icons/stack/postgresql.svg'
import react from 'icons/stack/react.svg'
import redux from 'icons/stack/redux.svg'
import scss from 'icons/stack/scss.svg'
import sequelize from 'icons/stack/sequelize.svg'
import ts from 'icons/stack/ts.svg'
import vite from 'icons/stack/vite.svg'
import vue from 'icons/stack/vue.svg'
import webpack from 'icons/stack/webpack.svg'
import software from 'images/software.png'
import { localize } from 'lang/Translation'
import { useContext } from 'react'
import { LocalizationContext } from 'hooks/useLocalization'
import CertificateYP from 'docs/Sergeev_certificate_yp.pdf'

export const About = () => {
    const { lang } = useContext(LocalizationContext);

    const stack = [
        { icon: babel, link: 'https://babeljs.io/' },
        { icon: docker, link: 'https://www.docker.com/' },
        { icon: figma, link: 'https://www.figma.com/' },
        { icon: git, link: 'https://git-scm.com/' },
        { icon: html, link: 'https://developer.mozilla.org/ru/docs/Learn/Getting_started_with_the_web/HTML_basics' },
        { icon: js, link: 'https://developer.mozilla.org/ru/docs/Web/JavaScript' },
        { icon: linux, link: 'https://www.linux.org/' },
        { icon: nginx, link: 'https://www.nginx.com/' },
        { icon: nodeJs, link: 'https://nodejs.org/en' },
        { icon: nuxt, link: 'https://nuxt.com/' },
        { icon: parcel, link: 'https://parceljs.org/' },
        { icon: postgresql, link: 'https://www.postgresql.org/' },
        { icon: react, link: 'https://react.dev/' },
        { icon: redux, link: ' https://redux.js.org/' },
        { icon: scss, link: 'https://sass-scss.ru/' },
        { icon: sequelize, link: 'https://sequelize.org/' },
        { icon: ts, link: 'https://www.typescriptlang.org/' },
        { icon: vite, link: 'https://vitejs.dev/' },
        { icon: vue, link: 'https://vuejs.org/' },
        { icon: webpack, link: 'https://webpack.js.org/' }
    ];

    return (
        <div className='about'>
            <h2 className='about__title title-medium'>{localize(lang, 'aboutTitle')}</h2>
            <div className='about__layout'>
                <div className='about__block'>
                    <img className='about__image' src={software} />
                </div>
                <div>
                    <p className='about__description text-medium'>
                        {localize(lang, 'aboutText1')}
                        <Href target='_blank' theme='simple' href='https://teamly.ru/'>«Teamly»</Href>
                        {localize(lang, 'aboutText2')}
                        <Href target='_blank' theme='simple' href='https://www.atlassian.com/software/confluence'>Conflunece</Href>
                        {localize(lang, 'aboutText3')}
                        <Href target='_blank' theme='simple' href='https://www.notion.so/'>Notion</Href>
                        {localize(lang, 'aboutText4')}
                        <Href target='_blank' theme='simple' href={CertificateYP} download>{localize(lang, 'aboutText5')}</Href>
                        {localize(lang, 'aboutText6')}
                    </p>
                    <div className='about__stack'>
                        {
                            stack.map(({icon, link}, index) => (
                                <div key={index} className='about__stack-item'>
                                    <Href target='_blank' theme='light' href={link}>
                                        <img src={icon} />
                                    </Href>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}