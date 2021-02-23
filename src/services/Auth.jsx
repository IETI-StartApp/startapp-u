import React from "react";
import 'firebase/auth'
import {useFirebaseApp} from "reactfire";

const firebase = useFirebaseApp();

export const createUserWithEmailAndPassword = async (email, password) => {
    await firebase.auth().createUserWithEmailAndPassword(email, password);
}

export const signInWithGoogle = async () => {
    await firebase.auth().signInWithPopup(firebase.auth.GoogleAuthProvider());
}

export const logout = async () => {
    await firebase.auth().signOut();
}
