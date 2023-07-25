import { useContext, useState } from 'react'
import { LocalizationContext } from 'hooks/useLocalization'
import { Button } from 'components/ui/Button';
import { Project } from 'parts/Project';
import messenger from 'images/messenger.png';
import twenty from 'images/twenty.png';
import excel from 'images/excel.png';
import quiz from 'images/quiz.png';
import cleaning from 'images/cleaning.png';
import market from 'images/market.png';
import teamly from 'images/teamly.jpeg';
import { localize } from 'lang/Translation'
import './Projects.scss'

export const Projects = () => {
    const {lang} = useContext(LocalizationContext);

    const [sort, setSort] = useState('all')

    const projects = [
        {
            description: localize(lang, 'messenger'),
            image: messenger,
            stack: ['TypeScript', 'Handlebars', 'Docker', 'SCSS', 'Stylelint', 'Mocha'],
            repoLink: 'https://github.com/ivee7/middle.messenger.praktikum.yandex',
            siteLink: 'https://rococo-elf-3e2293.netlify.app/',
            type: 'app'
        },
        {
            description: localize(lang, 'twenty'),
            image: twenty,
            stack: ['React', 'Redux', 'TypeScript', 'Express', 'PostgreSQL', 'SSR', 'Docker', 'SCSS'],
            repoLink: 'https://github.com/twenty-forty-eight-kubiki/twenty-forty-eight',
            type: 'app'
        },
        {
            description: localize(lang, 'excel'),
            image: excel,
            stack: ['JavaScript', 'Webpack', 'HTML', 'SCSS', 'Babel', 'Eslint'],
            repoLink: 'https://github.com/ivee7/excel-course',
            type: 'app'
        },
        {
            description: localize(lang, 'quiz'),
            image: quiz,
            stack: ['React', 'Redux', 'JavaScript'],
            repoLink: 'https://github.com/ivee7/react-quiz-app',
            type: 'app'
        },
        {
            description: localize(lang, 'cleaning'),
            image: cleaning,
            stack: ['JavaScript', 'Webpack', 'HTML', 'CSS'],
            repoLink: 'https://github.com/ivee7/REINIGUNG',
            siteLink: '',
            type: 'site'
        },
        {
            description: localize(lang, 'teamly'),
            image: teamly,
            stack: ['Vue 2', 'JavaScript', 'SCSS'],
            repoLink: '',
            siteLink: 'https://teamly.ru/',
            type: 'app'
        },
        {
            description: localize(lang, 'market'),
            image: market,
            stack: ['React', 'Redux', 'JavaScript', 'SCSS'],
            repoLink: 'https://github.com/ivee7/YANDEX-MARKET-REACT',
            type: 'app'
        },
    ]

    const sorts = [
        {
            type: 'all',
            textCode: 'sortAll'
        },
        {
            type: 'app',
            textCode: 'sortApps'
        },
        {
            type: 'site',
            textCode: 'sortSites'
        },
    ]

    return (
        <div className='projects'>
            <h2 className='title-medium projects__title'>{localize(lang, 'projects')}</h2>

            <ul className='projects__sorts'>
                {sorts.map(({type, textCode}, index) => (
                    <li key={index} className='projects__sort'>
                        <Button
                            active={sort === type}
                            theme='simple'
                            className='text-medium'
                            onClick={() => setSort(type)}
                        >
                            {localize(lang, textCode)}
                        </Button>
                    </li>
                ))}
            </ul>

            <div className='projects__grid'>
                {projects.filter(item => {
                    if (sort === 'all') return true;
                    return item.type === sort;
                }).map(({description, stack, image, siteLink, repoLink}, index) => (
                    <Project
                        key={index}
                        description={description}
                        stack={stack}
                        image={image}
                        siteLink={siteLink}
                        repoLink={repoLink}
                    />
                ))}
            </div>
        </div>
    )
}