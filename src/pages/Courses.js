import React from 'react';
import { Typography, List, ListItem } from '@mui/material';
import { GitHub, Email } from '@mui/icons-material';

function Courses() {
  return (
    <div style={{ padding: '20px', maxWidth: '800px', margin: 'auto' }}>
        <div style={{ marginTop: '20px' }}>
            <Typography variant="h6" gutterBottom>
                Cursos Realizados
            </Typography>
            <List>
                <ListItem>Git y GitHub: Curso Profesional de Git y GitHub - Platzi (Enero 2023)</ListItem>
                <ListItem>Programación de Videojuegos 3D: Curso de Introducción a la Programación de Videojuegos 3D con Unity - Platzi (Enero 2023)</ListItem>
                <ListItem>C# con .NET: Curso de Introducción a C# con .NET 3.1 - Platzi (Enero 2023)</ListItem>
                <ListItem>C# Esencial: Linkedin Learning (Octubre 2022)</ListItem>
                <ListItem>Programación Orientada a Objetos con C#: Linkedin Learning (Octubre 2022)</ListItem>
                <ListItem>RxJS Práctico: Linkedin Learning (Febrero 2022)</ListItem>
                <ListItem>Desarrollo Web Frontend: Curso de Front-end Web-Development: React – Coursera (Junio 2020)</ListItem>
                <ListItem>JavaScript UI-Frameworks: Curso de Front-end JavaScript UI-Frameworks: Angular – Coursera (Octubre 2019)</ListItem>
                <ListItem>Bootstrap 4: Curso de Front-end Web UI-Frameworks and Tools – Coursera (Agosto 2019)</ListItem>
                <ListItem>Seguridad Informática: Museo de la Informática (Abril 2019)</ListItem>
                <ListItem>Bases de Datos y SQL: Introducción a las Bases de Datos y SQL – Educación IT (Enero 2019)</ListItem>
                <ListItem>Redes: Introducción a las Redes – Educación IT (Diciembre 2018)</ListItem>
                <ListItem>Armado y Reparación de PC: Instituto CETAE (Diciembre 2017)</ListItem>
                <ListItem>Inglés: Curso Superior de inglés (6to año) – Instituto Cambridge (Diciembre 2012)</ListItem>
            </List>
        </div>
    </div>
    );
}

export default Courses;