import React from 'react'
import { CharactersI } from '../../../models/characters.model'

interface Props {
    item: CharactersI
}

export const CharacterItem = (props: Props) => {
    return (
        <div className='card'>
        <div className='card-inner'>
          <div className='card-front'>
            <img src={props.item.img} alt={props.item.nickname} />
          </div>
          <div className='card-back'>
            <h1>{props.item.name}</h1>
            <ul>
              <li>
                <strong>Actor Name:</strong> {props.item.portrayed}
              </li>
              <li>
                <strong>Nickname:</strong> {props.item.nickname}
              </li>
              <li>
                <strong>Birthday:</strong> {props.item.birthday}
              </li>
              <li>
                <strong>Status:</strong> {props.item.status}
              </li>
            </ul>
          </div>
        </div>
      </div>
    )
}

export default CharacterItem
