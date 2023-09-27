// App.js
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Footer from './components/Footer'
import TodoList from './TodoList'
import './App.css'

function App() {
  return (
  <div className='App'>
      <Header />
      <Navbar />
      <TodoList />
      <Footer />
    </div>
  );
}

export default App;
