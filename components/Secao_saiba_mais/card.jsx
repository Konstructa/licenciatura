import React from 'react'
import './card.css'

export default function Card(props) {
    return (
        <div className='card'>
            <div className='title-box'>
                <h3>{props.titulo}</h3>
                <hr />
            </div>
            <img src={props.img} alt="Imagem card" />
            <button>Saiba Mais</button>
        </div>
    )
}
