import React from 'react';
import SEO from '../../components/SEO.jsx';
import Header from "../../partials/header/Header.jsx";
import Breadcrumb from '../../container/Breadcrumb/Breadcrumb.jsx';
import AboutFour from '../../container/About/AboutFour.jsx';
import Video from '../../container/Video/Video.jsx';
import AboutFive from '../../container/About/AboutFive.jsx';
import TestimonialContainer from '../../container/Testimonial/TestimonialContainer.jsx';
import CallToActionTwo from '../../container/CallToAction/CallToActionTwo.jsx';
import Footer from '../../container/Footer/Footer.jsx';
import ScrollToTop from '../../components/ScrollToTop.jsx';


const AboutUs = () => {
    return (
        <React.Fragment>
            <SEO title="Exomac || About" />
            <Header />
            <Breadcrumb 
                image="images/bg/breadcrumb-bg.jpg"
                title="We are an agency located in New York"
                content="Home"
                contentTwo="About Us"
            />
            <AboutFour />
            <Video />
            <AboutFive />
            <TestimonialContainer classOption="bg-primary-blue" />
            <CallToActionTwo />
            <Footer />
            <ScrollToTop />
        </React.Fragment>
    )
}

export default AboutUs;



