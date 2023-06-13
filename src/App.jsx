import React from "react";
import './App.css';
import Nav from "./COMPONENTS/Nav";
import Hero from "./COMPONENTS/Hero";
import Analytics from "./COMPONENTS/Analytics";
import Newslatter from "./COMPONENTS/Newslatter";
import Card from "./COMPONENTS/Card";
import Footer from "./COMPONENTS/Footer";

const App = () => {

  return (
    <>
    <Nav />
    <Hero />
    <Analytics />
    <Newslatter />
    <Card />
    <Footer />
    </>
  )
}

export default App