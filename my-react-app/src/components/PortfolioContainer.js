import React, { useState } from 'react';
import NavTabs from './NavTabs';
import About from '../pages/About';
import Projects from '../pages/Projects';
import Contact from '../pages/Contact';
import Resume from '../pages/Resume';
import Logo from '../pages/images/profileimg.jpg'

export default function PortfolioContainer() {
    const [currentPage, setCurrentPage] = useState('Home');


    const renderPage = () => {
        if (currentPage === 'Contact') {
            return <Contact />;
        }
        if (currentPage === 'Projects') {
            return <Projects />;
        }
        if (currentPage === 'Resume') {
            return <Resume />;
        }
            return <About />;
    };

    const handlePageChange = (page) => setCurrentPage(page);

    return (
        <div style={{ backgroundImage: `${Logo}` }}>
            <header>
            <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
            </ header>
            {renderPage()}
        </div>
    )
}

