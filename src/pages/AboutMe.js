import React from 'react';
import { List, ListItem } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngular, faReact, faHtml5, faSass, faJs, faBootstrap } from '@fortawesome/free-brands-svg-icons';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/index.css'

function AboutMe() {
  return (
    <div style={{ padding: '20px', maxWidth: '800px', margin: 'auto' }}>

      <section class="content">
        <h4>Sobre mi</h4>
        <p>

          ¡Hola!, soy Joanna, una programadora apasionada por el diseño y el desarrollo de aplicaciones ya sea web, de escritorio o un videojuego. 
          Poseo una amplia experiencia creando aplicaciones web. 
          En el frontend, trabajo con tecnologías como Angular y React, mientras que en el backend tengo 
          conocimientos en .Net para la creación y gestión de endpoints HTTP, así como en el uso del patrón de 
          diseño MVC.

          Disfruto trabajando en equipo y poseo habilidades de comunicación efectiva.
          Busco aprender más cosas, mejorar día a día y compartir mi trabajo y mis conocimientos con los demás. 
          Además, estoy disponible para trabajos freelance, ya que en mis tiempos libres disfruto mucho desarrollar y diseñar aplicaciones libremente.

        </p>

        <div className="tech-container">
          <div className="tech-item">
            <FontAwesomeIcon className="beating-icons" icon={faAngular} beat />
            <h4>Angular</h4>
          </div>
          <div className="tech-item">
            <FontAwesomeIcon className="beating-icons" icon={faReact} beat />
            <h4>React</h4>
          </div>
          <div className="tech-item">
            <FontAwesomeIcon className="beating-icons" icon={faHtml5} beat />
            <h4>HTML5</h4>
          </div>
          <div className="tech-item">
            <FontAwesomeIcon className="beating-icons" icon={faSass} beat />
            <h4>Sass</h4>
          </div>
          <div className="tech-item">
            <FontAwesomeIcon className="beating-icons" icon={faJs} beat />
            <h4>JavaScript</h4>
          </div>
          <div className="tech-item">
            <FontAwesomeIcon className="beating-icons" icon={faBootstrap} beat />
            <h4>Bootstrap</h4>
          </div>
        </div>

        <h4>Idiomas</h4>

        <List>
          <ListItem>Español: Nativo</ListItem>
          <ListItem>Inglés: B2 Intermedio (Certificado por Instituto Cambridge)</ListItem>
        </List>

        <div style={{display:'flex', justifyContent: 'space-evenly'}}>
          <p align="center"><a href="https://twitter.com/saku_ritah" class="twtr btn-follow" target="_b">Sígueme en X</a>
          </p>

          <p align="center"><a href="https://instagram.com/sukaritasss" class="twtr btn-follow-i" target="_b">Sígueme en Instagram</a>
          </p>
        </div>
      </section>

    </div>
  );
}

export default AboutMe;