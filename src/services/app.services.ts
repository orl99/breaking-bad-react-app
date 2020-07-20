import axios from 'axios';

// Interaces
import { CharactersI } from '../models/characters.model';

const BASEAPIURL = 'https://www.breakingbadapi.com/api';

export const getCharacters = async (): Promise<CharactersI[]>  => {
    const response = await axios.get<CharactersI[]>(`${BASEAPIURL}/characters`);
    const responseDta = response.data
    // console.log('response data', responseDta);
    return responseDta;
};
export const getCharactersByQuery = async (query: string): Promise<CharactersI[]>  => {
    const response = await axios.get<CharactersI[]>(`${BASEAPIURL}/characters?name=${query}`);
    const responseDta = response.data
    // console.log('response data', responseDta);
    return responseDta;
};