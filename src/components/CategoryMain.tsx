import type { CategoryMainProps, CategoryItem } from "@/types";
import CategoryMainCard from "./ui/CategoryMainCard";
import FreshMeat from "../../public/images/category/fish-and-meats-category.png";
import FreshVegetables from "../../public/images/category/vegetables-category.png";
import FreshMilk from "../../public/images/category/dairy-and-eggs.png";
import FreshFruits from "../../public/images/category/fresh-fruits-category.png";

const defaultCategories: CategoryItem[] = [
  {
    id: 1,
    prefix: "Everyday",
    title: "Fresh Meat",
    image: FreshMeat.src,
    backgroundColor: "#F9F8E7",
    href: "/category/fresh-meat",
  },
  {
    id: 2,
    prefix: "Daily",
    title: "Fresh Vegetables",
    image: FreshVegetables.src,
    backgroundColor: "#E8F5E9",
    href: "/category/fresh-vegetables",
  },
  {
    id: 3,
    prefix: "Everyday",
    title: "Fresh Milk",
    image: FreshMilk.src,
    backgroundColor: "#FDF2F2",
    href: "/category/fresh-milk",
  },
  {
    id: 4,
    prefix: "Everyday",
    title: "Fresh Fruits",
    image: FreshFruits.src,
    backgroundColor: "#F1F8E9",
    href: "/category/fresh-fruits",
  },
];

const CategoryMain = ({
  categories = defaultCategories,
}: CategoryMainProps) => {
  return (
    <section className="py-12">
      <div className="max-w-[90%] mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category) => (
            <CategoryMainCard key={category.id} item={category} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryMain;
