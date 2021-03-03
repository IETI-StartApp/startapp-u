import React from "react";
import './App.css';
import {AuthProvider} from "./services/Auth";
import RegisterForm from "./components/Register/RegisterForm";
import {LoginPage,  UserSelect, RegisterProjectPage } from "./pages";
import {ProjectDescription} from './pages/ProjectDescription/ProjectDescription'
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"

function App() {
    return (
        <>
            <Router>
                <AuthProvider>
                    <Switch>  
                        <Route exact path="/login" component={LoginPage}/>
                        <Route exact path="/register-project" component={RegisterProjectPage}/>
                        <Route exact path="/signup" component = {RegisterForm}/>
                        <Route exact path="/userselect" component = {UserSelect}/>
                        <Route exact path="/projectDescription" component={ProjectDescription}/> 
                    </Switch>
                </AuthProvider>
            </Router>
        </>
    );
}

export default App;
