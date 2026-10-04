import Header from "../../components/SharedLayout/Header/Header";
import Footer from "../../components/SharedLayout/Footer/Footer";
import MainBanner from "./MainBanner/MainBanner";
import PromoBanners from "./PromoBanners/PromoBanners";
import MedicineStores from "./MedicineStores/MedicineStores";
import PromoSection from "./PromoSection/PromoSection";
import ReviewsSection from "./ReviewsSection/ReviewsSection";
import styles from "./HomePage.module.css";

function HomePage() {
  return (
    <>
      <div className={styles.pageGrid}>
        <Header variant="green" />
        <MainBanner />
        <div className={styles.wrapperBackground}>
          <PromoBanners />
          <MedicineStores />
          <PromoSection />
          <ReviewsSection />
        </div>
        <div className={styles.footerContainer}>
          <Footer />
        </div>
      </div>
    </>
  );
}

export default HomePage;
