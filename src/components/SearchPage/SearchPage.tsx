import {Container} from '../Container/Container';
import {Input} from '../Input/Input.tsx';
import s from './SearchPage.module.css'
import {Card} from '../Card/Card.tsx';
import {CardWrapper} from '../Card/CardWrapper/CardWrapper.tsx';
import {formatDate} from '../../utils/formatDate.ts';
import {useSearchCharacter} from '../../hooks/useSearchCharacter.tsx';
import { KeyboardEvent } from 'react';


export const SearchPage = () => {

    const { characters, error, loading, searchCharacter } = useSearchCharacter();

    const onEnter = (e: KeyboardEvent<HTMLInputElement>) =>{
        if(e.key === 'Enter') {
            searchCharacter(e.currentTarget.value)
        }
    }

    const characterslist = characters?.map(character => {
        const formattedDate = formatDate(character.created)
        return (
            <Card name={character.name} status={character.status} created={formattedDate} key={character.id} link={character.url}/>
        )
    })

    return (
        <>

            <Container className={s.inputWrapper}>
                <Input placeholder={'Search characters...'} className={s.input} autoFocus
                       onChange={(e) => searchCharacter(e.currentTarget.value)}
                    onKeyDown={(e) => onEnter(e)}
                />
                {characterslist && <span>Found characters: {characterslist.length}</span>}
                {error && <span className={s.error}>{error}</span>}
            </Container>
            <div className={s.loading}>
                {loading && <span className={s.loader}></span>}
            </div>
            {characters && <CardWrapper>{characterslist}</CardWrapper>}
        </>
    );
};

