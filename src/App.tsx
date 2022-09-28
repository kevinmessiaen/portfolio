import React from 'react';
import './App.css';
import Home from './pages/Home';
import PortfolioNavbar from './components/PortfolioNavbar';

function App() {
    return (
        <div className="App">
            <PortfolioNavbar/>
            <Home/>
        </div>
    );
}

export default App;
