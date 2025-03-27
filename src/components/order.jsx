import '../styles/order.css'
import imageUrl from '../imageurl'
function Order({cartitems,cartTotal,tax}) {
    const total = (Number(cartTotal)+ Number(tax)).toFixed(2)
  return (
    <main>
         <div className='heading'>Order summary</div>
    <div className="order-item-container">
        {cartitems.map((cartitem)=>
        <div className="order-item-wrapper" key={cartitem.id}>
        <div className="order-item">
            <div className="order-image">
                <img src={`${imageUrl}${cartitem.cake.image}`} alt={cartitem.cake.name}/>
            </div>
            <div className="order-details">
                <h3>{cartitem.cake.name}</h3>
                <p>quantity:{cartitem.quantity}</p>
            </div>
            
        </div>
        <div className="order-price">
        <span>${cartitem.cake.price}</span>
        </div>
    </div>
        )}
        <hr />
        <div className='total'>
                <span>Total</span>
                <span>${total}</span>
                </div>
</div>
</main>
  )
}

export default Order
