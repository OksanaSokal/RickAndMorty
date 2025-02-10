import {useState} from 'react';
import {type CharacterType, rickAndMortyApi} from '../api/api.ts';

export const useSearchCharacter = () =>{
    const [characters, setCharacters] = useState<CharacterType[] | null>(null);
    const [error, setError] = useState<string | null>(null)
    const [loading, setLoading] = useState(false)

    const searchCharacter = (value: string) => {
        if (value.length >= 3) {
            setLoading(true)
            rickAndMortyApi.searchCharacters(value)
                .then(res => {
                    setCharacters(res.data.results)
                    setError(null)
                }).catch(error => {
                console.log(error)
                if (error.status === 404) {
                    setError('The character does not exist')
                    setCharacters(null)
                } else {
                    setError(error.message)
                    setCharacters(null)
                }

            }).finally(() => {
                setLoading(false)
            })

        }
    }

    return {error, characters, loading, searchCharacter}
}