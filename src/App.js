import React from "react";
import './App.css';
import {AuthProvider} from "./services/Auth";
import {LoginPage} from "./pages";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"

function App() {
    return (
        <>
            <Router>
                <AuthProvider>
                    <Switch>
                        <Route path="/login" component={LoginPage}/>
                    </Switch>
                </AuthProvider>
            </Router>
        </>
    );
}

export default App;
