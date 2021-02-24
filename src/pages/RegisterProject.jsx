import React, { useState,useCallback } from 'react'
import { ProgressBar } from '../components/Progressbar/ProgressBar'
import { makeStyles, Typography } from '@material-ui/core';
import steps from './steps';
import {ProjectDescription} from '../components/ProjectForm/ProjectDescription';
import {ProjectFinancing} from '../components/ProjectForm/ProjectFinancing';
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
    const handleNext = useCallback(() => {
        setActiveStep(prevActiveStep => prevActiveStep + 1)}
    );
    const handlePrev = () => {
        setActiveStep(prevActiveStep => prevActiveStep -1)
    }
    const [inputValues,handleInputChange] = useForm({
        projectName: '',
        projectDescription: '',
        investment: 0,
        minInvestment: 0,
    });
    const [dueDate,setDueDate] = useState(new Date());
    const handleDateChange = useCallback((date) => setDueDate(date));
    const handleChange = useCallback(handleInputChange);
    const classes = useStyles();
    const getStepContent = (stepIndex) => {
        switch (stepIndex) {
            case 0:
                return <ProjectDescription 
                        formValues={inputValues}
                        handleChange={handleChange}
                        handleNext={handleNext}/>;
            case 1:
                return <ProjectFinancing 
                        formValues={inputValues}
                        handleChange={handleChange}
                        handleNext={handleNext}
                        zone={{zone:"co-CO",region:"COP"}}
                        handleDateChange = {handleDateChange}
                        />;
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
