import React from "react";
import {Form} from "../../components";
import background from './background.png'
import {Wrapper} from "./styles";

export const LoginPage = () => {
    return (
        <>
            <img src={background} style={{height: 'auto'}} alt=""/>
            <Wrapper>
                <Form/>
            </Wrapper>

        </>
    );
}
