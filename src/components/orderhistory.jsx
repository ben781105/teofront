import '../styles/orderhistory.css'
import imageUrl from '../imageurl'
function Orderhistory({orders}) {
  return (
    <div className="order-history-container">
        <h3>Order history</h3>
       {orders.map((order)=>
       <div className="history-wrapper">
       <div className="product-info">
        <div className='order-image'><img src={`${imageUrl}${order.cake.image}`} alt="item image" /></div>
           <h2>item name:  {order.cake.name}</h2>
           <p>Order date:  {order.order_date}</p>
           <p>Order ID:   {order.order_id}</p>
       </div>
       <p>Quantity: {order.quantity}</p>
       <span>Price :{order.cake.price}</span>
</div>)}
    </div>
  )
}

export default Orderhistory
