import React from "react";
import './App.css';
import {AuthProvider} from "./services/Auth";
import {LoginPage} from "./pages";

function App() {
    return (
            <div>
                <AuthProvider>
                    <LoginPage/>
                </AuthProvider>
            </div>
    );
}

export default App;
