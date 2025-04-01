import { Navigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import api from '../api';
import imageUrl from '../imageurl'
import { Link } from 'react-router-dom';
import '../styles/detail.css';
import { useNavigate } from 'react-router-dom';
import Footer from './footer';
import CakeDetailSkeleton from './detailskeleton';
import {ToastContainer, toast } from 'react-toastify';
const Detail = ({setCartnumber}) => {
    const { slug } = useParams();
    const [cakeDetail, setCakeDetail] = useState({});
    const [similarCakes, setSimilarCakes] = useState([]);
    const cart_id = localStorage.getItem('cart_id');
    const [loading, setLoading] = useState(true);
    const [inCart,setIncart] = useState(false)
     const navigate = useNavigate()
    const newCake = {
        cart_id: cart_id,
        cake_id: cakeDetail.id,
    };
    
        const addCakeToCart = async () => {
            try {
                const response = await api.post('add_cake/', newCake);
                console.log(response.data);
                setIncart(true)
                toast.success('Item added to cart')
                setCartnumber(currentNum =>(currentNum+1))
            } catch (error) {
                console.log(error.message);
            }
            navigate('/cart')
            
        }

    useEffect(() => {
        const fetchCakeDetail = async () => {
            try {
                const response = await api.get(`cake_detail/${slug}/`);
                console.log(response.data);
                setCakeDetail(response.data);
                setSimilarCakes(response.data.similar_cakes);
            } catch (error) {
                console.log(error.message);
            }finally{
                setLoading(false);
            }
        };
        fetchCakeDetail();
    }, [slug]);
    

   


    useEffect(()=>{
       if(cakeDetail.id){
        const fetchCakeInCart = async () => {
            try {
                const response = await api.get(`cake_in_cart?cart_id=${cart_id}&cake_id=${cakeDetail.id}`);
                console.log(response.data);
                setIncart(response.data.cake_in_cart)
                
              
            } catch (error) {
                console.log(error.message);
            }
        };
        fetchCakeInCart()
       }
    },[cart_id,cakeDetail.id])
    return (
        <div className="cake-detail-container">
            {loading ? (
                <>
                
                <CakeDetailSkeleton />
                
                </>
            ) : (
                <>
                    {/* Product Main Section */}
                    <div className="cake-detail">
                        <div className="cake-image">
                            <img src={`${imageUrl}${cakeDetail.image}`} alt={cakeDetail.name} />
                        </div>

                        <div className="cake-info">
                            <h1>{cakeDetail.name}</h1>
                            <p className="cake-price">${(cakeDetail.price)}</p>
                            <p className="cake-description">{cakeDetail.description}</p>
                            <button className="add-to-cart" onClick={addCakeToCart} disabled={inCart}>{inCart ?'added to cart':'add to cart'}</button> 
                        </div>
                    </div>

                    {/* Similar Cakes Section */}
                    <div className="similar-cakes">
                        <h2>You may also like</h2>
                        <div className="similar-cakes-grid">
                            {similarCakes.map((cake) => (
                                <Link to={`/cake-detail/${cake.slug}`} key={cake.id} style={{color:'inherit'}}>
                                    <div className="similar-cake-item">
                                        <img src={`${imageUrl}${cake.image}`} alt={cake.name} loading='lazy' />
                                        <h3>{cake.name}</h3>
                                        <p>${cake.price}</p>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </>
            )}

            <Footer />
        </div>
    );
};

export default Detail;
