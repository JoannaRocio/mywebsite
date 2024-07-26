import React from 'react';
import { Typography, List, ListItem } from '@mui/material';
import { GitHub, Email } from '@mui/icons-material';

function ContactMe() {
    return (
    <div style={{ padding: '20px', maxWidth: '800px', margin: 'auto' }}>
        <div style={{ marginTop: '20px' }}>
            <Typography variant="body1">
                <GitHub /> <a href="https://github.com/JoannaRocio" target="_blank" rel="noopener noreferrer">GitHub</a>
                </Typography>
                <Typography variant="body1">
                <Email /> <a href="mailto:joannarocios@gmail.com">joannarocios@gmail.com</a>
            </Typography>
        </div>
    </div>
    );
}

export default ContactMe;