
import './App.css';
import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import AppTheme from './shared-theme/AppTheme';
import AppAppBar from './components/AppAppBar';
import Hero from './components/Hero';
import Highlights from './components/Highlights';
import Features from './components/Features';
import Footer from './components/Footer';


function App() {
  return (
    <div>
   
      <AppTheme>
      <CssBaseline enableColorScheme />
      <AppAppBar />
      <Hero />
      
       
        <Features />
        <Divider />
      
        <Highlights />
        <Divider />
       
        <Footer />
     
    </AppTheme>
    </div>
  );
}

export default App;
