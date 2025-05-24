import CategoryFilter from "./category-filter";
import PriceFilter from "./price-filter";

const Sidebar = () => {
  return (
    <div className="sticky top-24">
      <PriceFilter />
      <CategoryFilter />
    </div>
  )
}

export default Sidebar;
