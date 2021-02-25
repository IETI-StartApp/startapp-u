import React from 'react'
import {ThemeProvider} from "@material-ui/core/styles";
import {
    Typography,
    Button,
    TextField,
} from "@material-ui/core";
import globalTheme from "../../globalTheme";
import styles from "./styles"
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';

export const ProjectDescription = ({formValues,handleChange,handleNext}) => {
    const classes = styles();
    const {projectName,projectDescription} = formValues;
    const CHARACTER_LIMIT = 120;
    
    return (
        <div className = {classes.mainContainer}>
            <ThemeProvider theme={globalTheme}>
                <Typography variant="h5" className={classes.descriptionHeader}>
                    Elige un nombre para tu proyecto
                </Typography>
                <div className={classes.formContainer}>
                    <form>
                        <TextField
                            label = "Nombre del proyecto"
                            className={classes.inputField}
                            variant = "outlined"
                            color = "primary"
                            name = "projectName" 
                            value = {projectName}
                            onChange = {handleChange}
                        />
                        <TextField
                            label = "Describe tu proyecto"
                            className={classes.inputField}
                            variant = "outlined"
                            color = "primary"
                            multiline
                            name = "projectDescription" 
                            value = {projectDescription}
                            onChange = {handleChange}
                            inputProps={{
                                maxLength: 120,
                            }}
                            helperText={`${projectDescription.length}/${CHARACTER_LIMIT}`}
                            rows = {3}
                        />
                        <>
                            <Button
                                variant= "contained"
                                className = {classes.btn}
                                endIcon = {<MonetizationOnIcon/>}
                                onClick = {handleNext}               
                            >
                                Define tu Financiación
                            </Button>
                        </>
                    </form>
                </div>
            </ThemeProvider>
        </div>
    )
}
