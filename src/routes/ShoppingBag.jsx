import "../index.css";
import BagItem from "../Components/BagItems";
import { useSelector } from "react-redux";

function ShoppingBag() {
  console.log("ShoppingBag component rendered"); // Log when ShoppingBag component renders
  const bagItems = useSelector((state) => state.bag);
  const items = useSelector((state) => state.items);
  const finalItems = items.filter((item) => { const itemIndex = bagItems.indexOf(item.id);
  return itemIndex >= 0;
  console.log("Final items:", finalItems); // Log finalItems to check its content
});
  return (
    <>
      <div className="bag-page">
        <div className="bag-item-container">
          {finalItems.map((item) =>(
            <BagItem item={item} />
          ))}
        </div>
      </div>
    </>
  );
}

export default ShoppingBag;
