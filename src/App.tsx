import React from 'react';
import './App.css';
import {useState, useEffect, createContext } from 'react';
import axios from 'axios';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import { Navbar } from "./pages/Navbar.js";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import {Home} from './pages/Home'







function App() {
  const client = new QueryClient({defaultOptions:{
    queries: {
      refetchOnWindowFocus: false,
    }
  }});

  return (
    <div className="App">
       <QueryClientProvider client={client}>
        <Router>
          <Navbar /> 
          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="*" element={<h1>ERROR</h1>}/>
          </Routes>
        </Router>
      </QueryClientProvider>
    </div>
  );
}

export default App;
