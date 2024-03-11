import "../index.css";


function BagItems({item}) {
  console.log(item);
  const summary = {
    totalItem: 12,
    totalDiscount: 999,
    totalMRP: 1399,
    finalPayment: 2399,
  };


  return (
    <>
      <div class="bag-item-container">
        <div class="item-left-part">
          <img class="bag-item-img" src={item.image} />
        </div>
        <div class="item-right-part">
          <div class="company">{item.company}</div>
          <div class="item-name">{item.item_name}</div>
          <div class="price-container">
            <span class="current-price">Rs {item.current_price}</span>
            <span class="original-price">Rs {item.original_price}</span>
            <span class="discount-percentage">
              ({item.discount_percentage}% OFF)
            </span>
          </div>
          <div class="return-period">
            <span class="return-period-days">{item.return_period} days</span>{" "}
            return available
          </div>
          <div class="delivery-details">
            Delivery by
            <span class="delivery-details-days">{item.delivery_date}</span>
          </div>
        </div>

        <div
          class="remove-from-cart"
          onClick={() => console.log("remove item clicked")}
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
      <button
        className="btn-place-order"
        onClick={() => console.log("Place order clicked")}
      >
        <div className="css-xjhrni">PLACE ORDER</div>
      </button> }
    </>
  );
}

export default BagItems;
