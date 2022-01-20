import React, { useContext, useState } from "react";

// Creating Context for the AuthProvider
const AuthContext = React.createContext();

export function useAuth() {
  return useContext(AuthContext);
}
// Method to Provide Auth throughout the website
export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState({});

  function signup(email, password, displayName) {
    try {
      // setting up user credentials after signup 
      localStorage.setItem("local_name", displayName);
      localStorage.setItem("local_email", email);
      localStorage.setItem("local_password", password);
      return true;
    } catch (error) {
      return false;
    }
  }
  // login method
  function login(email, password) {
    let local_email = localStorage.getItem("local_email");
    let local_password = localStorage.getItem("local_password");
    let local_name = localStorage.getItem("local_name");

    // checking the validity of the credentials provided during login
    if (local_email === email && local_password === password) {
      setCurrentUser({
        name: local_name,
        email: local_email,
        password: local_password,
      });
      return true;
    } else {
      setCurrentUser(null);
      return false;
    }
  }
  // returning everything in the function as a object to the provider
  const value = {
    currentUser,
    login,
    signup,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
