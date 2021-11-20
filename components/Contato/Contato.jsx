import React, {useState} from 'react';
import './style-contato.css';

export default function Contato() {
    
    const [campos, setCampos] = useState({
        name: '',
        email: '',
        subject: '',
        mensage:''
    })

    function InputChange(event) {
        campos[event.target.name] = event.target.value;
        setCampos(campos);
    }

    function handleFormSubmit (event) {
        event.preventDefault();
    } 

    return (
        <section className="contato">
            
            <div className="title-container">
               
                <div className="title">
                     <a href="#"><img src="../assets/setinha.svg"/></a>
                    <p className="description">Contato</p>
                </div>
                <hr />
            </div>

            <form action="/submit" method="post" autoComplete="off">
                <div className="pair-label-input">    
                    <label name="name" >Seu nome</label>
                    <input 
                        name="name" 
                        type="text" 
                        placeholder="Name"  
                        required 
                        pattern="[A-Za-z\s]{3,}"
                        id="name"
                        title="Digite letras maiusculas e minusculas, minimo 3 caracteres"
                        autoComplete="off"
                        onChange={InputChange}
                    />
                </div>

                <div className="pair-label-input"> 
                    <label name="email">Seu e-mail</label>
                    <input 
                        id="email"
                        name="email" 
                        type="email" 
                        placeholder="Email"  
                        required
                        autoComplete="off"
                        title="Utilize email com @ e no mínimo mínimo 5 caracteres"
                        pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$"
                        onChange={InputChange}
                    />
                </div>

                <div className="pair-label-input"> 
                    <label name="subject">Assunto</label>
                    <input 
                        name="subject" 
                        type="text" 
                        required 
                        pattern="[A-Za-z\s]{3,}"
                        id="assunto"
                        title="Digite letras maiusculas e minusculas, minimo 3 caracteres"
                        autoComplete="off"
                        onChange={InputChange}
                    />
                </div>
                <div className="pair-label-input"> 
                    <label name="mensage">Mensagem</label>
                    <textarea name="mensage" rows="5" cols= "30" required id="mensage" onChange={InputChange}></textarea>
                </div>
                <button type="submit" id="submit">Enviar</button>
            </form>
        </section>
    )
}
