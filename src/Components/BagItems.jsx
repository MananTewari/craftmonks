import { useDispatch } from "react-redux";
import "../index.css";
import { bagSliceActions } from "../store/bagSlice";


function BagItems({item}) {
  const dispatch=useDispatch();
  function handleItemRemove() {
   dispatch(bagSliceActions.deleteFromBag(item.id));
  console.log("removed clicked")
  }
  const summary = {
    totalItem: 1,
    totalDiscount: (item.discount_percentage/100)*(item.original_price),
    totalMRP: 1599,
  };
  console.log(item);
const summed={
  MRP:item.current_price,
  Discount:(item.current_price-summary.totalDiscount).toFixed(2),
  finalPayment:item.original_price - summary.totalDiscount,
}
console.log(summed);
console.log(summed.Discount);
  return (
    <>
<div className="main_container">
      <div className="bag-item-container">
        <div className="item-left-part">
          <img className="bag-item-img" src={item.image} />
        </div>
        <div className="item-right-part">
          <div className="company">{item.company}</div>
          <div className="item-name">{item.item_name}</div>
          <div className="price-container">
            <span className="current-price">Rs {item.current_price}</span>
            <span className="original-price">Rs {item.original_price}</span>
            <span className="discount-percentage">
              ({item.discount_percentage}% OFF)
            </span>
          </div>
          <div className="return-period">
            <span className="return-period-days">{item.return_period} days</span>{" "}
            return available
          </div>
          <div className="delivery-details">
            Delivery by
            <span className="delivery-details-days">{item.delivery_date}</span>
          </div>
        </div>

        <div
          className="remove-from-cart"
          onClick={handleItemRemove}
        >
          X
        </div>
      </div>

      <div className="bag-details-container">
        <div className="price-header">
          PRICE DETAILS ({summary.totalItem} Items){" "}
        </div>
        <div className="price-item">
          <span className="price-item-tag">Total MRP</span>
          <span className="price-item-value">₹{summed.totalMRP}</span>
        </div>
        <div className="price-item">
          <span className="price-item-tag">Discount on MRP</span>
          <span className="price-item-value priceDetail-base-discount">
            -₹{summed.Discount}
          </span>
        </div>
        <div className="price-item">
          <span className="price-item-tag">Convenience Fee</span>
          <span className="price-item-value">₹99</span>
        </div>
        <hr />
        <div className="price-footer">
          <span className="price-item-tag">Total Amount</span>
          <span className="price-item-value">₹{summed.finalPayment}</span>
        </div>
      </div>
      <button
        className="btn-place-order"
        onClick={() => console.log("Place order clicked")}
      >
        <div className="css-xjhrni">PLACE ORDER</div>
      </button>

      </div>
    </>
  );
}

export default BagItems;
