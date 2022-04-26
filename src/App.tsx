import React from 'react';
import styled from 'styled-components';
import Header from './components/Header';
import GlobalStyle from './ui/global';
import { BrowserRouter } from 'react-router-dom';
import Navigation from './components/Navigation';
import Dashboard from './components/Dashboard';

const AppWrapper = styled.div`
    width: 100%;
    min-height: 100vh;
    background: #fff;
`;

const App: React.FC = () => {
    return (
        <BrowserRouter>
            <GlobalStyle />
            <AppWrapper>
                <Header />
                <Navigation />
                <Dashboard />
            </AppWrapper>
        </BrowserRouter>
    );
};

export default App;
