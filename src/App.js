import React from "react";
import './App.css';
import {Container} from "@material-ui/core";
import {AuthProvider} from "./services/Auth";
import {LoginPage} from "./pages";

function App() {
    return (
        <Container
            className="d-flex align-items-center justify-content-center"
            style={{minHeight: "100vh"}}>
            <div>
                <AuthProvider>
                    <LoginPage/>
                </AuthProvider>
            </div>
        </Container>
    );
}

export default App;
