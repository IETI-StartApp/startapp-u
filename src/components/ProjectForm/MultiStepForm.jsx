import React, { useState } from 'react'
import { ProgressBar } from '../Progressbar/ProgressBar';
import {  Button, makeStyles } from '@material-ui/core';
import steps from './steps';

const useStyles = makeStyles({
    root: {
        width: "50%",
        margin: "6rem auto",
        border: "1px solid #999"
    }    
});

export const MultistepForm = () => {
    const buttonMessage = activeStep === steps.length ? "Publicar" : "Next";
    const [activeStep, setActiveStep] = useState(0);
    const handleNext = () => {
        setActiveStep(prevActiveStep => prevActiveStep + 1);
    }
    const classes = useStyles();
    const getStepContent = (stepIndex) => {
        switch (stepIndex) {
            case 0:
                return "Paso 1 Descripción del proyecto";
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
                        <Button onClick={handleNext}>
                            {buttonMessage}
                        </Button>
                    </>
            )}
        </div>
    )
}
