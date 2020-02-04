import React from 'react';
import { Card } from '../card/card.component';
import  './card-list.css';

export const CardList = props => 
(
    <div className='card-list'> 
        {
            props.sports.map(sport => (
                <Card key={sport.id} sport={sport}/>
            )
        )}
</div>
);