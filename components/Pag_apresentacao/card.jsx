import React from 'react'
import './card.css'

export default function Card(props) {
    return (
        <div className='card'>
            <div className='card-title'><h4>{props.title}</h4></div>
            <p>{props.info}</p>
        </div>
    )
}
