import React from "react";
import SEO from "../../components/SEO.jsx";
import Header from "../../partials/header/Header.jsx";
import IntroSlider from "../../container/IntroSlider/IntroSlider.jsx";
import HomeAbout from "../../components/About/HomeAbout.jsx";
import ServiceIconBox from "../../container/service/ServiceIconBox.jsx";
import Portfolio from "../../container/Portfolio/Portfolio.jsx";
import HomeBlog from "../../container/BlogGrid/HomeBlog.jsx";
import ContactInformation from "../../container/ContactInformation/ContactInformation.jsx";
import Footer from "../../container/Footer/Footer.jsx";
import ScrollToTop from "../../components/ScrollToTop.jsx";
import Faq from "../../container/Faq/Faq.jsx";
import BrandContainer from "../../container/Brand/BrandContainer.jsx";

const Home = () => {
  return (
    <React.Fragment>
      <SEO title="Exomac – Business React JS Template" />
      <Header />
      <IntroSlider />
      <HomeAbout />
      <ServiceIconBox classOption="bg-color-1" />
      <BrandContainer classOption="section-padding-bottom" />
      <Portfolio />
      <Faq />
      <HomeBlog />
      <ContactInformation />
      <Footer />
      <ScrollToTop />
    </React.Fragment>
  );
};

export default Home;
