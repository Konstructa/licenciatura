import React from 'react'
import './Notices.css'


function CardNotice(props) {
    return (
        <div className = "card-notice">
            <img src = {props.img} className = "img-card-notice"/>
            <div className = "info-notice-card">
                <h3>{props.info}</h3>
                <p>{props.data}</p>
            </div>
        </div>
    )
}

export default CardNotice
