import { Href } from 'components/ui/Href'
import './Contacts.scss'
import { TelegramSVG } from 'icons/TelegramSVG'
import { GithubSVG } from 'icons/GithubSVG'
import { MailSVG } from 'icons/MailSVG'

export const Contacts = () => {
    return (
        <div className='contacts'>
            <Href theme='simple' target='_blank' href='https://t.me/ivees7'><TelegramSVG /></Href>
            <Href theme='simple' target='_blank' href='https://github.com/ivee7'><GithubSVG /></Href>
            <Href theme='simple' target='_blank' href='mailto:ivees7@yandex.ru'><MailSVG /></Href>
        </div>
    )
}
