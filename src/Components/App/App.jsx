import React, { Component } from 'react';
import { Route, Routes } from 'react-router-dom';
import Contact from '../Contact/Contact';
import About from '../About/About';
import Footer from '../Footer/Footer';
import Home from '../Home/Home';
import Portfolio from '../Portfolio/Portfolio';
import Nav from '../Nav/Nav';

export default class App extends Component {
    render() {
        return (<>


            {/* routing */}
            <Nav />
            <Routes>
                <Route path='/' element={<Home />}></Route>
                <Route path='home' element={<Home />}></Route>
                <Route path='Portfolio' element={<Portfolio />}></Route>
                <Route path='About' element={<About />}></Route>
                <Route path='Contact' element={<Contact />}></Route>

            </Routes>
            {/* <Portfolio />
            <About />
            <Contact /> */}
            <Footer />
        </>);
    }
}
