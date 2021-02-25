import React from 'react';
import { Card, CardMedia, Box, CardContent, Typography, Avatar, CardHeader } from '@material-ui/core';

export default function UserInfo( ){
    return (
        <Box position="relative" display="inline-flex" alignContent="center">
            <Avatar></Avatar>
            <Typography gutterBottom variant="h5" component="h2">
                nombreUsuario
            </Typography>
        </Box>
    );
}