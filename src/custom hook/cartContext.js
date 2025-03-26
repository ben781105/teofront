import { useState,useEffect } from "react";
import api from "../api";
const useCartData=()=>{
    const [cartitems, setCartItems] = useState([]);
    const cart_id = localStorage.getItem("cart_id");
    const [loading, setLoading] = useState(false);
    const [cartTotal, setCartTotal] = useState(0);
    const tax = (cartTotal * 0.18).toFixed(2);

    useEffect(() => {
        const fetchCart = async () => {
            try {
                setLoading(true);
                const response = await api.get(
                    `get_cart?cart_id=${cart_id}`
                );
                console.log(response.data);
                
                const totalAmount = response.data.total.reduce(
                    (acc, curr) => acc + Number(curr),
                    0
                );
                
                setCartItems(response.data.cakes);
                setCartTotal(totalAmount);
                
            } catch (error) {
                console.log(error);
            } finally {
                setLoading(false);
            }
        };

        fetchCart();
    }, [cart_id]);
    return {cartitems,cartTotal,tax,loading,setCartItems,setCartTotal}

}
export default useCartData