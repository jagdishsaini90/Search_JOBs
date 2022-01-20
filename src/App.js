import React from "react";
import {Container} from "react-bootstrap";
import { AuthProvider } from "./AuthProvider";
import MainComponent from "./Components/MainComponent";

function App() {
  return (
    <AuthProvider>
      <Container className="my-4">
        <MainComponent  />
      </Container>
    </AuthProvider>
  );
}

export default App;
