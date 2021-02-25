import React, { useState } from 'react'
import { ProgressBar } from '../components/Progressbar/ProgressBar'
import { makeStyles, Typography } from '@material-ui/core';
import steps from './steps';
import {ProjectDescription} from '../components/ProjectForm/ProjectDescription';
import {useForm} from "../hooks/useForm";
const useStyles = makeStyles({
    root: {
        '@media (min-width:480px)': { 
            width: '70%'
        },
        '@media (min-width:600px)': { 
            width: '70%'
        },
        '@media (min-width:801px)': { 
            width: '60%'
        },
        '@media (min-width:1025px)': { 
            width: '50%'
        },
        margin: "6rem auto",
    }    
});

export const RegisterProject = () => {
    const [activeStep, setActiveStep] = useState(0);
    const prevMessage = activeStep === steps.length ? "" : steps[activeStep-1];
    const handleNext = () => {
        setActiveStep(prevActiveStep => prevActiveStep + 1);
    }
    const handlePrev = () => {
        setActiveStep(prevActiveStep => prevActiveStep -1)
    }
    const [inputValues,handleInputChange] = useForm({
        projectName: '',
        projectDescription: ''
    });
    const classes = useStyles();
    const getStepContent = (stepIndex) => {
        switch (stepIndex) {
            case 0:
                return <ProjectDescription 
                        formValues={inputValues}
                        handleChange={handleInputChange}
                        handleNext={handleNext}/>;
            case 1:
                return "Paso 2 Financiación del proyecto";
            case 2:
                return "Paso 3 Presentación del proyecto";
            default:
                return "Nada para hacer";
        }
    }
    return (
        <div className={classes.root}>
            <ProgressBar activeStep={activeStep}/>
            {activeStep === steps.length ? "Finished": (
                    <>
                        {getStepContent(activeStep)}
                    </>
            )}
            {activeStep !== 0 && activeStep < steps.length &&(
                <>
                    <Typography 
                        variant="body1" 
                        color="initial" 
                        style={{cursor:"pointer"}} 
                        onClick={handlePrev}>
                        {prevMessage}
                    </Typography>      
                    
                </>
            )}
        </div>
    )
}
