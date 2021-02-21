import React from "react";
import "./styles.js";
import {Wrapper} from "./styles";

/*
<Button green onClick={() => console.log("HOLA")} >
              Start Investing
            </Button>
 */

export const Button = ({
                           children,
                           onClick,
                           green,
                       }) => {
    return (
        <Wrapper primary={!!green} onClick={onClick}>
            {children}
        </Wrapper>

    );
};
