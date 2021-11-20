import React from 'react'
import './saiba-mais.css'
import Card from './card'
import apresentacaoImg from './images/apresentacao.png'
import perfilImg from './images/perfil.png'
import sobreImg from './images/sobre.png'
import {Link} from 'react-router-dom'

export default function SaibaMais() {
    return (
        <section className='saiba-mais-section'>
            <div className='section-title-box'>
                <h2>Licenciatura em Computação</h2>
                <hr />
            </div>
            <div className='cards'>
                <div className='card'>
                    <div className='title-box'>
                        <h3>Apresentação e objetivos</h3>
                        <hr />
                    </div>
                    <img src={apresentacaoImg} alt="Imagem card" />
                    <Link to = "/apresentacao"><button>Saiba Mais</button></Link>
                </div>
                <Card 
                titulo='Perfil do Egresso'
                img={perfilImg}/>
                <Card 
                titulo='Sobre o curso'
                img={sobreImg}/>
            </div>
        </section>
    )
}
