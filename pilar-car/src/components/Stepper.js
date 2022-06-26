import React from "react"
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepButton from '@mui/material/StepButton';


export default function StepperBar(){

    const steps=["Daton de envio","Datos de Pago","Finalizar"]


    return(<>
        <Stepper activeStep={0}>
        {steps.map((label, index) => (
          <Step key={label} completed={false} >
            <StepButton color="inherit">
            {label}
            </StepButton>
          
          </Step>
        ))}
        </Stepper>
    
    
    </>)



}