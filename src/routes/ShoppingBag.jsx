import "../index.css";

import BagItems from "../Components/BagItems";
import { useSelector } from "react-redux";  

function ShoppingBag() {
  const bagItems = useSelector((state) => state.bag);
  const items = useSelector((state) => state.items);
  const finalItems = items.filter((items) => {
    const itemIndex = bagItems.indexOf(items.id);
    return itemIndex >= 0;
  });
console.log(items);


  return (
    <>
      <div className="bag-page">
        <div className="bag-item-container">
          {finalItems.map((item=>( <BagItems item={item}/>)))}        
        </div>
      </div>
    </>
  );
}

export default ShoppingBag;
