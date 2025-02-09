import s from './Container.module.css'
import type {ReactNode} from 'react';

type ContainerProps = {
    children: ReactNode
    className?: string
}
export const Container = ({children, className}: ContainerProps) => {
    const classNames = `${s.container} ${className ? className : ''}`
    return (
        <div className={classNames}>{children}</div>
    );
};
