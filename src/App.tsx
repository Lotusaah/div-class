import React from 'react';
import './App.css';
import {useState, useEffect, createContext, Fragment } from 'react';
import axios from 'axios';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import { Disclosure, Menu, Transition } from '@headlessui/react';
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline';
import {Footer} from "./pages/Footer";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import {Positionality} from './pages/Positionality'
import {Race} from './pages/Race';
import {Transgenderidentities} from './pages/Transgenderidentites';
import {Nationalorigin} from './pages/Nationalorigin';
import {Gender} from './pages/Gender';
import {Sexualorientation} from './pages/Sexualorientation';
import {Class} from './pages/Class';
import {Ability} from './pages/Ability';
import {Religion} from './pages/Religion';
import {Error} from './components/Error';
import {Conclusion} from './pages/Conclusion';



function App() {
  const client = new QueryClient({defaultOptions:{
    queries: {
      refetchOnWindowFocus: false,
    }
  }});

  return (
    <div className="flex flex-col min-h-screen">
       <QueryClientProvider client={client}>
        <Router>
          <Routes>
            <Route path="/" element={<Positionality />}/>
            <Route path="/Race" element={<Race />}/>
            <Route path="/Gender" element={<Gender />}/>
            <Route path="/Sexual-Orientation" element={<Sexualorientation />}/>
            <Route path="/Transgender-Identities" element={<Transgenderidentities />}/>
            <Route path="/Class" element={<Class />}/>
            <Route path="/Ability" element={<Ability />}/>
            <Route path="/National-Origin" element={<Nationalorigin />}/>
            <Route path="/Religion" element={<Religion />}/>
            <Route path="/Conclusion" element={<Conclusion />}/>
            <Route path="*" element={<Error />}/>
          </Routes>
          <Footer />
        </Router>
      </QueryClientProvider>
    </div>
  );
}

export default App;
