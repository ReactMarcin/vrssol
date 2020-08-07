import React from 'react'
import { AnimatePresence } from 'framer-motion'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import styled, { createGlobalStyle } from 'styled-components'
import Home from './components/Home'
import Navbar from './components/Navbar'
import MobileMenu from './components/Mobilemenu'
import Uslugi_i_produkty from './components/Uslugi_i_produkty'
import Ofirmie from './components/Ofirmie'
import Footer from './components/Footer'

const Conatiner = styled.div`
    max-width: 1300px;
    margin: 0 auto;
`
const GlobalStyles = createGlobalStyle`
    *,*::after,*::before{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body{
        font-family: 'Roboto', sans-serif;
        font-size: 90%;
        @media (max-width: 1200px){
            font-size: 80%;
        }
        @media (max-width: 900px){
            font-size: 70%;
        }
        @media (max-width: 300px){
            font-size: 60%;
        }
    }
`

const App = () => (
    <>
        <Conatiner>
            <BrowserRouter>
                <Navbar />
                <MobileMenu />
                <Route
                    render={({ location }) => (
                        <AnimatePresence exitBeforeEnter initial={false}>
                            <Switch location={location} key={location.pathname}>
                                <Route exact path="/" component={Home} />
                                <Route exact path="/o-firmie" component={Ofirmie} />
                                <Route exact path="/uslugi-i-produkty" component={Uslugi_i_produkty} />
                            </Switch>
                        </AnimatePresence>
                    )}
                />
            </BrowserRouter>
            <Footer />
        </Conatiner>
    <GlobalStyles />
    </>
);
export default App;