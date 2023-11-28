
import { useSearchParams } from "react-router-dom";
import CategoryItems from "./CategoryItems";
import { categories } from "./categoriesData";
const Categories = () => {
    const [params, setParams] = useSearchParams();
    const category = params.get('category')
    console.log('query category', category);
    return (
            <div className="flex gap-6 mx-auto items-center pt-28 justify-between font-semibold overflow-x-auto">
          {categories?.map(item=> <CategoryItems key={item.label} icon={item.icon} label={item.label}
          selected={category ===item.label}></CategoryItems>)}
          </div>
    );
};

export default Categories;