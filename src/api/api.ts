import {instance} from './instance.ts';


export const rickAndMortyApi = {
    getCharacters(name:string) {
        return instance.get<ResponseType>(`/character?name=${name}`)
    },
}

export type ResponseType = {
    info: InfoType
    results: CharacterType[]
}

type InfoType ={
    count: number
    pages: number
    next: string | null
    prev: string | null
}

export type CharacterType = {
    id: number
    name: string
    status: StatusType
    species: string
    type: string
    gender: string
    origin: AdditionalData
    location: AdditionalData
    image: string
    episode: string[]
    url: string
    created: string
}

type AdditionalData = {
    name: string
    url: string
}

 export type StatusType = "Alive" | "Dead" | "unknown";