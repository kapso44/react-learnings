import React from 'react'
import './card.css'

export const Card = props =>  (
        <div className = 'card-container'>
            <img alt="sports" src={`https://robohash.org/${props.sport.id}?set=set2&size=180x180`}/>
            <h2 key={ props.sport.id }> { props.sport.name} </h2>
            <p> {props.sport.email} </p> 
        </div>
);
