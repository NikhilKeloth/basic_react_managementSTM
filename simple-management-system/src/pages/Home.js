import React from 'react';
import './Home.css';

function Home() {
    return (
        <div className = 'page home-page'>
            <h1> Welcome to our Management System </h1>
            <p> A very simple and easy application to use!</p>

            <div className='image-gallery'>
                <div className='image-card'>
                    <img src="https://www.inetsoft.com/images/screenshots/ceo_performance_dashboard.png" alt="Management Dashboard" />
                    <h3> My Own Dashboard</h3>
                    <p> Monitor all your key metrices at a glance </p>
                </div>

                <div className='image-card'>
                    <img src="" alt="Management Dashboard" />
                    <h3> My Own Dashboard</h3>
                    <p> Monitor all your key metrices at a glance </p>
                </div>

                <div className='image-card'>
                    <img src="" alt="Management Dashboard" />
                    <h3> My Own Dashboard</h3>
                    <p> Monitor all your key metrices at a glance </p>
                </div>
            </div>
        </div>
    );
};

export default Home;