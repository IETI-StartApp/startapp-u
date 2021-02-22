import React, {useState} from 'react';
import {Checkbox, Link, TextField, Typography} from "@material-ui/core";
import 'typeface-roboto';
import CircleChecked from '@material-ui/icons/CheckCircleOutline';
import CircleUnchecked from '@material-ui/icons/RadioButtonUnchecked';

import {CheckBoxArea, FooterWrapper, ForgotPasswdArea, InputArea, TextArea, Wrapper} from "./styles";
import {CustomTypography} from "../ButtonCustom/Button";

export const Form: React.FunctionComponent = () => {
    const [checked, setChecked] = useState(false);
    const handleSubmit = (event) => {
        console.log(typeof event)
    }

    function handleChange(event) {
        setChecked(event.target.checked)
    }

    console.log(checked)
    return (
        <Wrapper>
            <form action={handleSubmit}>
                <TextArea>
                    <Typography>
                        Password
                    </Typography>
                </TextArea>
                <InputArea>
                    <TextField id="outlined-basic" label="Email" variant="outlined" fullWidth/>
                </InputArea>
                <TextArea>
                    <Typography>
                        Email
                    </Typography>
                </TextArea>
                <InputArea>
                    <TextField id="outlined-basic" label="Password" variant="outlined" fullWidth/>
                </InputArea>
                <FooterWrapper>
                    <CheckBoxArea>
                        <Checkbox
                            className={`without-padding`}
                            checked={checked}
                            onChange={handleChange}
                            style={{
                                color: "#4A5568",
                                background: "none",
                                borderradius: "none"
                            }}
                            icon={<CircleUnchecked/>}
                            checkedIcon={<CircleChecked/>}
                        />
                        <CustomTypography text='#2D3748' style={{padding: '10px 0'}}>Remember me</CustomTypography>
                    </CheckBoxArea>
                    <ForgotPasswdArea>
                            <CustomTypography
                                style={{padding: '10px 0', cursor: 'pointer'}}
                                text='#2C5282'
                                onClick={() => {
                                console.log('shi')
                            }}
                            >
                                Forgot password?
                            </CustomTypography>
                    </ForgotPasswdArea>

                </FooterWrapper>

            </form>
        </Wrapper>
    );

};

