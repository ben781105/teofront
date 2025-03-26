
import "../styles/Cart.css";
import Footer from "./footer";
import "../styles/footer.css";
import CartItem from "./cartitem";
import Cartsummary from "./cartsummary";
import Spinner from "./spinner"; 
import Emptycart from "./emptycart";
import useCartData from "../custom hook/cartContext";
const Cart = ({ cartNumber, setCartnumber }) => {


   const {cartitems,setCartItems,cartTotal,setCartTotal,tax,loading}=useCartData()

    if (loading) {
        return (
            <div className="cart-loading-container">
                <Spinner />
            </div>
        );
    }
    if (cartitems.length === 0) {
      return (
        <>
             <Emptycart/>
            
              </>
      );
  }

    return (
        <div>
            <div className="cart-page">
                <h1>Your Cart: {cartNumber} cake(s)</h1>
                    <div className="cart-wrapper">
                        <div className="cartitems-container">
                            {cartitems.map((cartitem) => (
                                <CartItem
                                    key={cartitem.id}
                                    cartitem={cartitem}
                                    setCartnumber={setCartnumber}
                                    setCartTotal={setCartTotal}
                                    setCartItems={setCartItems}
                                    cartitems={cartitems}
                                />
                            ))}
                        </div>
                        <Cartsummary cartTotal={cartTotal} tax={tax} />
                    </div>
                
            </div>
            <Footer />
        </div>
    );
};

export default Cart;
