import "../index.css";

function ShoppingBag() {
  const summary = {
    totalItem: 12,
    totalDiscount: 999,
    totalMRP: 1399,
    finalPayment: 2399,
  };


  const item={
    company:"Jaye",
    item_name:"clean",
    current_price:231,
    original_price:250,
    discount_percentage:20,
    return_period:14,
    delivery_date:23,
  
  };
  return(
  <>
<div class="bag-item-container">
    <div class="item-left-part">
      <img class="bag-item-img" src="../{item.image}"/>
    </div>
    <div class="item-right-part">
      <div class="company">{item.company}</div>
      <div class="item-name">{item.item_name}</div>
      <div class="price-container">
        <span class="current-price">Rs {item.current_price}</span>
        <span class="original-price">Rs {item.original_price}</span>
        <span class="discount-percentage">({item.discount_percentage}% OFF)</span>
      </div>
      <div class="return-period">
        <span class="return-period-days">{item.return_period} days</span> return available
      </div>
      <div class="delivery-details">
        Delivery by
        <span class="delivery-details-days">{item.delivery_date}</span>
      </div>
    </div>

    <div class="remove-from-cart" onclick="removeFromBag({item.id})">X</div>
  </div>



    <div className="bag-details-container">
      <div className="price-header">
        PRICE DETAILS ({summary.totalItem} Items){" "}
      </div>
      <div className="price-item">
        <span className="price-item-tag">Total MRP</span>
        <span className="price-item-value">₹{summary.totalMRP}</span>
      </div>
      <div className="price-item">
        <span className="price-item-tag">Discount on MRP</span>
        <span className="price-item-value priceDetail-base-discount">
          -₹{summary.totalDiscount}
        </span>
      </div>
      <div className="price-item">
        <span className="price-item-tag">Convenience Fee</span>
        <span className="price-item-value">₹99</span>
      </div>
      <hr />
      <div className="price-footer">
        <span className="price-item-tag">Total Amount</span>
        <span className="price-item-value">₹{summary.finalPayment}</span>
      </div>
    </div>
    <button className="btn-place-order">
      <div className="css-xjhrni">PLACE ORDER</div>
    </button>
  </>);
}

export default ShoppingBag;
