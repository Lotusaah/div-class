import React from 'react';
import {useState, useEffect, createContext, Fragment } from 'react';
import axios from 'axios';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import { Disclosure, Menu, Transition } from '@headlessui/react';
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline';
import { Navbar } from "./pages/Navbar";
import {Footer} from "./pages/Footer";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import {Positionality} from './pages/Positionality'
import {Dashboard} from './components/Dashboard';
import {Race} from './pages/Race';
import {Ethnicity} from './pages/Ethnicity';
import {Nationalorigin} from './pages/Nationalorigin';
import {Sex} from './pages/Sex';
import {Gender} from './pages/Gender';
import {Sexualorientation} from './pages/Sexualorientation';
import {Class} from './pages/Class';
import {Disability} from './pages/Disability';
import {Religion} from './pages/Religion';



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
            <Route path="/Ethnicity" element={<Ethnicity />}/>
            <Route path="/National-Origin" element={<Nationalorigin />}/>
            <Route path="/Sex" element={<Sex />}/>
            <Route path="/Gender" element={<Gender />}/>
            <Route path="/Sexual-Orientation" element={<Sexualorientation />}/>
            <Route path="/Class" element={<Class />}/>
            <Route path="/Disability" element={<Disability />}/>
            <Route path="/Religion" element={<Religion />}/>
            <Route path="*" element={<h1>ERROR</h1>}/>
          </Routes>
        </Router>
      </QueryClientProvider>
    </div>
  );
}

export default App;
