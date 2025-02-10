import type {StatusType} from '../../api/api.ts';
import s from './Card.module.css'
import {Link} from 'react-router';


type CardProps = {
    name: string,
    status: StatusType
    created: string
    link: string
}

export const Card = ({name, status, created, link}: CardProps) => {

    const className = `${s.status} ${status === 'Alive' ? s.statusAlive :status === 'Dead' ? s.statusDead : s.statusUnknown}`
    return (
            <div className={s.card}>
                <Link to={link} className={s.link}>
                    <p className={s.name}>{name}</p>
                    <div className={s.cardStatus}>
                        <div>
                            <span>Status: </span>
                            <span className={className}>{status}</span>
                        </div>
                        <div>
                            <span>Created: </span>
                            <span>{created}</span>
                        </div>
                    </div>
                </Link>

            </div>
    );
};

