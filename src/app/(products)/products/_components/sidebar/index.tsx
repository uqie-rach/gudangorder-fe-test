import BrandFilter from "./brand-filter";
import CategoryFilter from "./category-filter";
import PriceFilter from "./price-filter";


const Sidebar = () => {
  return (
    <div className="tp-shop-widget">
      <PriceFilter />
      <CategoryFilter />
      <BrandFilter />
    </div>
  )
}

export default Sidebar;
