import React from 'react';
import { Typography, List, ListItem } from '@mui/material';
import { GitHub, Email } from '@mui/icons-material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngular, faReact, faHtml5, faSass, faJs, faBootstrap } from '@fortawesome/free-brands-svg-icons';
import 'bootstrap/dist/css/bootstrap.min.css';

function AboutMe() {
  return (
    <div style={{ padding: '20px', maxWidth: '800px', margin: 'auto' }}>
      <Typography variant="h4" gutterBottom>
        Sobre Mí
      </Typography>
      <Typography variant="h5" gutterBottom >
        Joanna Sakugawa - Programadora Web
      </Typography>
      <div style={{ marginBottom: '20px' }}>
        <Typography variant="body1">
          Hola, soy Joanna Sakugawa, una programadora apasionada por el desarrollo de aplicaciones web. 
          Mi motivación principal es aprender nuevas tecnologías y aplicar mis conocimientos para ayudar 
          a otros a alcanzar sus objetivos. Actualmente, estoy cursando el último año de la Tecnicatura 
          en Programación de Computadores en la Universidad de Lomas de Zamora, y me comprometo a 
          mantenerme siempre actualizada en mi campo.
        </Typography>
        <Typography variant="body1" style={{ marginTop: '20px' }}>
          Soy una profesional comprometida con la calidad y la excelencia en todo lo que hago. 
          Disfruto trabajando en equipo y poseo habilidades de comunicación efectiva y colaboración. 
          Estoy en busca de oportunidades para formar parte de un equipo de IT en una empresa donde pueda
          desarrollarme profesionalmente y contribuir con mis habilidades.
        </Typography>
      </div>
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
      <Typography variant="h6" gutterBottom>
        Idiomas
      </Typography>
      <List>
        <ListItem>Español: Nativo</ListItem>
        <ListItem>Inglés: B2 Intermedio (Certificado por Instituto Cambridge)</ListItem>
      </List>
      <div>
        <p>Esta web fué hecha con: ReactJS, MUI, React Router, Sass, FontAwesome y Ant Design.
        </p>
    </div>
    </div>
  );
}

export default AboutMe;