import "../index.css";
import BagItem from "../Components/BagItems";
import { useSelector } from "react-redux";
import EmptyCart from "../Components/EmptyCart";
import BagSummary from "../Components/BagSummary";

function ShoppingBag() {
  console.log("ShoppingBag component rendered"); // Log when ShoppingBag component renders
  const bagItems = useSelector((state) => state.bag);
  const items = useSelector((state) => state.items);

  // Filter items to get only those present in the shopping bag
  const finalItems = items.filter((item) => bagItems.includes(item.id));
  console.log("finalItems in bag", finalItems);
  const length=bagItems.length;
  console.log("items in", length);
  return (
    <>
      {bagItems.length === 0 ? (
        <EmptyCart />
      ) : (
        <div className="bag-page">
          <div className="bag-item-container">
            {finalItems.map((item) => (
              <BagItem key={item.id} item={item} />
            ))}
          </div>
          <BagSummary/>
        </div>
      )}
    </>
  );
}

export default ShoppingBag;
