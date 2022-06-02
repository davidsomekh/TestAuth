import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { Platform } from "react-native";

import { GoogleSignin } from "@react-native-google-signin/google-signin";



import {
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  OAuthProvider,
  signInWithPopup,
  signOut,
  signInWithCredential,
} from "firebase/auth";


const AuthContext = React.createContext({

  signInGoogleMobile: () => {},
  getNumber: () : number => {return getNumber();},

});

export function useAuth() {
  return useContext(AuthContext);
}

const getNumber = (): number =>{
  return 3;
}

const signInGoogleMobile = async () => {
  return new Promise(async (resolve, reject) => {
    
    let idToken;

    try {
    //  ({ idToken } = await GoogleSignin.signIn());
    } catch (error) {
      resolve(error);
    }

    // Create a Google credential with the token
    const googleCredential = GoogleAuthProvider.credential(idToken);

  });
};













export function AuthProvider({ children }) {
  const [login, setLogin] = useState(false);
  const [userName, setUserName] = useState("");
  const [authFinished, setAuthFinished] = useState(false);

  useEffect(() => {
   
  

   
  }, []);

  return (
    <AuthContext.Provider
      value={{
        signInGoogleMobile,
        getNumber,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
