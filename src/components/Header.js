import * as React from 'react';
import Container from '@mui/material/Container';
import '../styles/index.css'

function AppHeader() {

  return (
    <Container>
        <div className="sides">
            <a href="home" className="logo">Sobre mi</a>
            <a href="home" className="logo">Experiencia</a>
            <a href="home" className="logo">Mis proyectos</a>
            <a href="home" className="logo">Contacto</a>
        </div>
        
        <div className="info">
            <h4><a href="home">Fullstack developer</a></h4>
            <h1>Bienvenido/a a mi web</h1>
            <div className="meta">
                <a href="home"  class="author"> </a>
                <br></br>
                Hecho por <a href="home" >Joanna Sakugawa</a> el 30 de Julio de 2024.
            </div>
        </div>
    </Container>
);
}

export default AppHeader;
