import React from 'react';
import { Grid, Box, Container } from '@material-ui/core';
import CardProject from './CardProject';
import { useStyles } from './styles';

export default function ProjectsGrid ( {  }) {

    const classes = useStyles();
    const projects = [{},{},{},{},{},{}];

    return (
        <Container  className={classes.cardGrid}>
          <Grid 
            container 
            spacing={4}
        >
            {
                projects.map(() => (
                    <Grid item xs={12} sm={6} md={4}>
                        <CardProject />
                    </Grid>
                ))
            }
          </Grid>
        </Container>
    );

}