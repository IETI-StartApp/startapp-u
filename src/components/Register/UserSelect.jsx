import React from 'react';
import {Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import {BackDesign} from "./styles";



const useStyles = makeStyles((theme) => ({
    paper: {
      width: "100%",
      height: "100%",
      overflowY: "auto"
    
    },
    root: {
        overflowY: "auto" 
    },
    formContainer: {
        position: "relative",
        '@media (min-width:780px)': {
            width: '28.125rem'
        },
        height: "auto",
        padding: "3rem"
    },
    Magin:{
        marginTop: "12px"
    },
    root2: {
        flexGrow: 1,
    },
    papero: {
        padding: theme.spacing(2),
        margin: 'auto',
        maxWidth: 400
    },
    image: {
        width: 128,
        height: 128,
    },
    img: {
        margin: 'auto',
        display: 'block',
        maxWidth: '100%',
        maxHeight: '100%',
        alignItems: "center"
    }
    
}));
export const UserSelect = () => { 

    const classes =  useStyles();

    return (
        <div>
            <Grid container direction="row" justify="flex-end" alignItems="stretch" className={classes.root}>
                <Grid item xs={6} >
                    <img className={classes.paper} alt="" src="https://media.discordapp.net/attachments/781412743537491969/814353548065374228/background.png?width=530&height=662"/>   
                </Grid>
                <Grid item xs={6} justify="flex-end">
                <Grid item xs={10} alignItems="center" >  
                            <Grid > 
                                ¿Ya tienes una cuenta? 
                                <BackDesign href='#' className={classes.Magin}> Clic acá</BackDesign>
                            </Grid>
                        </Grid>
                    <Grid container className={classes.Magin} direction="row-reverse" justify="space-around"  >
                        
                        <div className={classes.formContainer}>
                            <Grid item xs={12}>
                                <div>
                                    <h1>Unase a nosotros!</h1>
                                </div>
                                <div>
                                    <p>Para comenzar este viaje, díganos qué tipo de cuenta desea abrir</p>
                                </div>
                                <br></br>
                            
                                
                                <div className={classes.root2}>
                                    <Paper className={classes.papero}>
                                        <Grid container spacing={2}>
                                        <Grid item>
                                        <ButtonBase className={classes.image}>
                                            <img className={classes.img} alt="complex" src="https://media.discordapp.net/attachments/781412743537491969/814340479393988709/emprendedor_1.png"/>
                                        </ButtonBase>
                                        </Grid>
                                        <Grid item xs={12} sm container >
                                            <Grid item xs container  direction="column" spacing={2}>
                                            <Grid item xs>
                                            <Typography gutterBottom variant="subtitle1">
                                                Emprendedor
                                            </Typography>
                                                <Typography variant="body2" gutterBottom>
                                                    
                                                </Typography>
                                                <Typography variant="body2" color="textSecondary">
                                                    Cuenta personal para gestionar su proyecto y obtener inversiones.
                                                </Typography>
                                            </Grid>
                                            </Grid>
                                            <Grid item>
                                            <ButtonBase className={classes.image}>
                                            <img className={classes.img} alt="complex" src="https://media.discordapp.net/attachments/781412743537491969/814340827269955594/flecha-correcta_1.png"/>
                                            </ButtonBase>                                            
                                            </Grid>
                                        </Grid>
                                        </Grid>
                                    </Paper>
                                    </div>
                                    <br></br>
                                        <div className={classes.root2}>
                                            <Paper className={classes.papero}>
                                        <       Grid container spacing={2}>
                                                    <Grid item>
                                                        <ButtonBase className={classes.image}>
                                                            <img className={classes.img} alt="complex" src="https://media.discordapp.net/attachments/781412743537491969/814339858901893160/investing_2.png"/>
                                                        </ButtonBase>
                                                    </Grid>
                                                    <Grid item xs={12} sm container>
                                                        <Grid item xs container direction="column" spacing={2}>
                                                            <Grid item xs>
                                                                <Typography gutterBottom variant="subtitle1">
                                                                    Inversionista
                                                                </Typography>
                                                            
                                                                <Typography variant="body2" color="textSecondary">
                                                                    Cuenta personal para invertir en proyectos TI.
                                                                </Typography>
                                                            </Grid>
                                                        </Grid>
                                                        <Grid item>
                                                            <ButtonBase className={classes.image}>
                                                                <img className={classes.img} alt="complex" src="https://media.discordapp.net/attachments/781412743537491969/814340827269955594/flecha-correcta_1.png"/>
                                                            </ButtonBase>                                            
                                                        </Grid>
                                                    </Grid>
                                                </Grid>
                                            </Paper>
                                        </div>
                                    </Grid>
                        </div>
                    </Grid>
                </Grid>
            </Grid>    
        </div>
    )
}

export default UserSelect
