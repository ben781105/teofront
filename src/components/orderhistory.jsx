import '../styles/orderhistory.css'

function Orderhistory() {
  return (
    <div className="order-history-container">
        <h3>Order history</h3>
        <div className="history-wrapper">
                <div className="product-info">
                    <h2>Product name</h2>
                    <p>Order date: june 5, 2026</p>
                    <p>Order ID: 2345678</p>
                </div>
                <p>Quantity: 1</p>
                <span>Total: $200</span>
        </div>
    </div>
  )
}

export default Orderhistory
