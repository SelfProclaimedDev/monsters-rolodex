import React from 'react';
import './card-list.style.css';
import {Card} from '../card/card.component'

export const CardList = (props) => { 
   console.log(props.monsters[0]);
    return (
        <div className='card-list'>
              {props.monsters.map(monsters => 
                
                (<Card key={monsters.id} monster = {monsters}/>))}
        </div>
    
    );

};