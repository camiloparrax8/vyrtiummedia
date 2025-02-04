import Header from "./components/header";
import HomeBanner from "./components/home_banner";
import AboutCxp from "./components/about_cxp";
import CryptoCarousel from "./components/crypto_carousel";
import BlogSection from "./components/blog_section";
import DrivingSection from "./components/driving_section";

export default function Home() {
  return (
    <>
      <Header />
      <HomeBanner />
      <CryptoCarousel />
      <AboutCxp />
      <BlogSection />
      <DrivingSection />
    </>
  );
}
