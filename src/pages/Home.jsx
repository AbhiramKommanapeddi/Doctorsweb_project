import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Featured from '../components/Featured';
import WhyChooseUs from '../components/WhyChooseUs';
import CircleOfCare from '../components/CircleOfCare';
import AppFeatures from '../components/AppFeatures';
import Testimonials from '../components/Testimonials';
import FAQ from '../components/FAQ';
import AppDownload from '../components/AppDownload';
import Connect from '../components/Connect';

const Home = () => {
    return (
        <main>
            <Header />
            <Hero />
            <Featured />
            <WhyChooseUs />
            <CircleOfCare />
            <AppFeatures />
            <Testimonials />
            <FAQ />
            <AppDownload />
            <Connect />
        </main>
    );
};

export default Home;
