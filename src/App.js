import React from "react";
import Layout from "./components/layout/Layout";
import Header from "./components/header/Header";
import Form from "./components/form/Form";
import "./App.css";

function App() {
  return (
    <Layout>
      <Header>
        <Form />
      </Header>
    </Layout>
  );
}

export default App;
