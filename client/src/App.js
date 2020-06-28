import React from "react";
import ApolloClient from "apollo-boost"; //connect with our server which is running at backend
import { ApolloProvider } from '@apollo/react-hooks'; // Connect react with apollo.
import CarList from "./components/CarList";
import AddCar from "./components/AddCar";

//Using ApolloClient to connect with server
const client = new ApolloClient({
  uri: '/graphql'
});

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <h1>List of Cars</h1>
        <CarList />
        <AddCar />
      </div>
    </ApolloProvider>
  );
}

export default App;
