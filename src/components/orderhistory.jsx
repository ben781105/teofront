import '../styles/orderhistory.css'
import imageUrl from '../imageurl'
function Orderhistory() {
  return (
    <div className="order-history-container">
        <h3>Order history</h3>
       
       <div className="history-wrapper">
       <div className="product-info">
        <div className='order-image'><img src={`${imageUrl}${order.cake.image}`} alt="item image" /></div>
           <h2>item name: Red Velvet </h2>
           <p>Order date: 01/April/2025</p>
           <p>Order ID: Wx5jvJKWHJyy </p>
       </div>
       <p>Quantity: 1 </p>
       <span>Price : $200</span>
</div>
    </div>
  )
}

export default Orderhistory
