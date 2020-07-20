import React from 'react'
// Models
import { CharactersI } from '../../../models/characters.model';
import CharacterItem from '../character-item-component/CharacterItem.component';
import Spinner from '../../layout/spinner-component/spinner.component';
interface Props {
    items: CharactersI[],
    isLoading: boolean,
}

const CharactersGrid = (props: Props) => {
    return props.isLoading 
    ? ( <Spinner /> ) 
    : 
    (
        <section className="cards">
            {props.items.map((item) => (
                <CharacterItem key={item.char_id} item={item}/>
            ))}
        </section>
    )
}
export default CharactersGrid
