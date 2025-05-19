import HeroSlider from "./_components/hero-slider"
import TrendingProducts from "./_components/trending-products";
import BannerSlider from "./_components/banner-slider";
import NewArrivals from "./_components/new-arrival";
import CategoryCards from "./_components/category-cards";
import Newsletter from "./_components/newsletter";
import Services from "./_components/services";

export default function Home() {
  return (
    <div className="space-y-20">
      <HeroSlider />

      <Services />

      <CategoryCards />

      <TrendingProducts />

      <BannerSlider />

      <NewArrivals />

      <Newsletter />

    </div>
  );
}
