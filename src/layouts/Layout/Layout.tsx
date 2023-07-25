import { PropsWithChildren } from 'react'
import './Layout.scss'

export const Layout = ({ children }: PropsWithChildren) => {
    return (
        <div className='layout' id='layout'>
            { children }
        </div>
    )
}