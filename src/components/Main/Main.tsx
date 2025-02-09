import {Container} from '../Container/Container';
import {Input} from '../Input/Input.tsx';
import s from './Main.module.css'
import {type CharacterType, rickAndMortyApi} from '../../api/api.ts';
import {type ChangeEvent, useState} from 'react';
import {Card} from '../Card/Card.tsx';
import {CardWrapper} from '../Card/CardWrapper/CardWrapper.tsx';
import {formatDate} from '../../utils/formatDate.ts';

export const Main = () => {

    const [characters, setCharacters] = useState<CharacterType[] | null>(null);
    const [error, setError] =useState<string | null>(null)
    const [loading, setLoading] = useState(false)

    const searchCharacter = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.currentTarget.value.length >= 3) {
            setLoading(true)
            rickAndMortyApi.getCharacters(e.currentTarget.value)
                .then(res => {
                setCharacters(res.data.results)
                    setError(null)
            }).catch(error =>{
                console.log(error)
                if(error.status === 404) {
                    setError('The character does not exist')
                    setCharacters(null)
                } else {
                    setError(error.message)
                    setCharacters(null)
                }

            }).finally(()=>{
                setLoading(false)
            })

        }
    }

    const characterslist = characters?.map(character => {
        const formattedDate = formatDate(character.created)
        return <Card name={character.name} status={character.status} created={formattedDate} key = {character.id} />
    })

    return (
        <>

            <Container className={s.main}>
                <Input placeholder={'Search characters...'} className={s.input} autoFocus onChange={(e) => searchCharacter(e)}
                       // onKeyDown={(e) => onEnter(e)}
                />
                {characterslist && <span>Found characters: {characterslist.length}</span>}
                {error && <span className={s.error}>{error}</span>}
            </Container>
            <div className={s.loading}>
                {loading&&<span className={s.loader}></span>}
            </div>
            {characters && <CardWrapper>{characterslist}</CardWrapper>}
        </>
    );
};

