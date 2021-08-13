import { Categories, SortPopup, PizzaBlock } from "../components";
import { useSelector, useDispatch } from "react-redux";
import { setCategory } from "../redux/actions/filters";
import { useCallback } from "react";

const categoryNames = ["Meat", "Vegetarian", "Grill", "Spicy", "Folded"];
const sortItems = [
  { name: "popular", type: "popular" },
  { name: "price", type: "price" },
  { name: "alphabet", type: "alphabet" },
];

function Home() {
  const dispatch = useDispatch();

  const items = useSelector(({ pizzas }) => pizzas.items);

  const onSelectCategory = useCallback((index) => {
    dispatch(setCategory(index));
  }, []);

  return (
    <div className="container">
      <div className="content__top">
        <Categories onClickItem={onSelectCategory} items={categoryNames} />
        <SortPopup
          items={sortItems}
          onClickItem={(name) => console.log(name)}
        />
      </div>
      <h2 className="content__title">All pizzas</h2>
      <div className="content__items">
        {items &&
          items.map((object) => <PizzaBlock key={object.id} {...object} />)}
      </div>
    </div>
  );
}

export default Home;
