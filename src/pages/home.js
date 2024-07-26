import React from 'react';
import { Container, Typography } from '@mui/material';
import AboutMe from './AboutMe';

function Home() {
return (
    <Container>
        <Typography variant="h2" style={{ textAlign: 'center' }} >Web de Joanna Rocío Sakugawa</Typography>

        <AboutMe /> 
    </Container>

    
);
}

export default Home;