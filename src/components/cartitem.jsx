import { useState } from 'react';
import '../styles/cartitem.css';
import api from '../api';
import { toast } from 'react-toastify';

function CartItem({ cartitem, setCartTotal, cartitems, setCartnumber, setCartItems }) {
    const [quantity, setQuantity] = useState(cartitem.quantity);
    const [loading, setLoading] = useState(false)

    const update = async () => {
        try {
            const itemData = {
                quantity: quantity,
                cartitem_id: cartitem.id
            };
              setLoading(true)
            const response = await api.patch("update_quantity/", itemData);
            console.log(response.data);

            // Updating cart item in the state
            const updatedCartItems = cartitems.map((item) =>
                item.id === cartitem.id ? { ...item, quantity: response.data.data.quantity, total: response.data.data.total } : item
            );

            //  Updating the cart state with the modified items
            setCartItems(updatedCartItems);

            //  recalculating cart total
            const newCartTotal = updatedCartItems.reduce((acc, item) => acc + Number(item.total), 0);
            setCartTotal(newCartTotal);

            //  recalculating cart quantity
            const newCartQuantity = updatedCartItems.reduce((acc, item) => acc + Number(item.quantity), 0);
            setCartnumber(newCartQuantity);
            setLoading(false)
            toast.success('Item updated successfully')
        } catch (error) {
            console.log(error.message);
        }
    };
    
    const deleteCartItem = async () => {
      const confirmDelete = window.confirm('Are you sure you want to delete this cart item?');
      const cartItemId = { cartitem_id: cartitem.id };
  
      if (confirmDelete) {
          try {
              const response = await api.post('delete_cartitem/', cartItemId);
              console.log(response.data);
  
              //  removing the deleted item from cartitems state
              const updatedCartItems = cartitems.filter((item) => item.id !== cartitem.id);
              setCartItems(updatedCartItems);
  
              //  recalculating total price
              const newCartTotal = updatedCartItems.reduce((acc, item) => acc + Number(item.total), 0);
              setCartTotal(newCartTotal);
  
              //  recalculating total number of cakes
              const newCartQuantity = updatedCartItems.reduce((acc, item) => acc + Number(item.quantity), 0);
              setCartnumber(newCartQuantity);
  
              toast.success('Item removed successfully');
          } catch (error) {
              console.log(error.message);
              toast.error('Failed to remove item');
          }
      }
  };
  
    return (
        <div className="cart-item-container">
            <div className="cart-item-wrapper">
                <div className="cart-item">
                    <div className="cart-item-image">
                        <img src={`http://localhost:8000${cartitem.cake.image}`} alt={cartitem.cake.name} />
                    </div>
                    <div className="cart-item-details">
                        <h3>{cartitem.cake.name}</h3>
                        <p>${cartitem.cake.price}</p>
                    </div>
                </div>
                <div className="cart-item-controls">
                    <input
                        type="number"
                        min="1"
                        className="cart-item-quantity"
                        value={quantity}
                        onChange={(e) => setQuantity(e.target.value)}
                    />
                    <button className="cart-item-update" onClick={update} disabled={loading}>{loading?"Updating...":"Update"}</button>
                    <button className="cart-item-remove" onClick={deleteCartItem}>Remove</button>
                </div>
            </div>
        </div>
    );
}

export default CartItem;
