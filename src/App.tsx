import React from 'react';
import './App.css';
import Home from './pages/Home';
import PortfolioNavbar from './components/PortfolioNavbar';
import {Spacer} from '@nextui-org/react';
import {Footer} from './layouts';

function App() {
    return (
        <div className="App">
            <PortfolioNavbar/>
            <Home/>
            <Spacer y={4}/>
            <Footer/>
        </div>
    );
}

export default App;
