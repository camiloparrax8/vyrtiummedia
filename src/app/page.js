import Header from "./layout/header";
import HomeBanner from "./layout/home_banner";
import AboutCxp from "./layout/about_cxp";
import CryptoCarousel from "./layout/crypto_carousel";
import BlogSection from "./layout/blog_section";
import DrivingSection from "./layout/driving_section";
import SeniorSection from "./layout/senior_section";
import ReviewsSection from "./layout/reviews_section";
import AboutCxpTwo from "./layout/about_cxp_two";
import Footer from "./layout/footer";

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
