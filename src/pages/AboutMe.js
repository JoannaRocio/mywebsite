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

          ¡Hola!, soy Joanna, una programadora apasionada por el desarrollo de aplicaciones web. 
          Poseo una amplia experiencia creando aplicaciones web. 
          En el frontend, trabajo con tecnologías como Angular y React, mientras que en el backend tengo 
          conocimientos en la creación y gestión de endpoints HTTP, así como en el uso del patrón de 
          diseño MVC.

          Disfruto trabajando en equipo y poseo habilidades de comunicación efectiva. 
          Estoy en busca de oportunidades para formar parte de un equipo de IT en una empresa donde 
          pueda desarrollarme profesionalmente y contribuir con mis habilidades. 
          Además, estoy disponible para trabajos freelance, con el objetivo de seguir aprendiendo 
          demostrando mi trabajo de manera constante.

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