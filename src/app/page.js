import Header from "./components/header";
import HomeBanner from "./components/home_banner";
import AboutCxp from "./components/about_cxp";
import CryptoCarousel from "./components/crypto_carousel";
import BlogSection from "./components/blog_section";
import DrivingSection from "./components/driving_section";
import SeniorSection from "./components/senior_section";
import ReviewsSection from "./components/reviews_section";
import AboutCxpTwo from "./components/about_cxp_two";
import Footer from "./components/footer";

export default function Home() {
  return (
    <>
      <Header />
      <section id="home">
        <HomeBanner />
      </section>
      <section id="crypto-carousel">
        <CryptoCarousel />
      </section>
      <section id="about-cxp">
        <AboutCxp />
      </section>
      <section id="blog">
        <BlogSection />
      </section>
      <section id="driving">
        <DrivingSection />
      </section>
      <section id="senior">
        <SeniorSection />
      </section>
      <section id="reviews">
        <ReviewsSection />
      </section>
      <section id="about-cxp-two">
        <AboutCxpTwo />
      </section>
      <Footer />
    </>
  );
}
