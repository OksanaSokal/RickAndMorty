import s from '../Card.module.css'
import type {ReactNode} from 'react';

type CardWrapperProps = {
    children: ReactNode
}

export const CardWrapper = ({children}: CardWrapperProps) => {

    return (
        <div className={s.cardWrapper}>{children}</div>
    )
}
