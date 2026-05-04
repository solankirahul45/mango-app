import {ShoppingBasket, CircleCheck } from 'lucide-react';
import CartImage from '../assets/mango-cart.png'
import { useNavigate } from 'react-router-dom';

const OrderConfirmation = () => {
    const navigate = useNavigate();

    const OrderNavigate = () => {
        navigate('/products');
    }

    return (
        <div className="product-section">
            <span className='circle-check-thanks'><CircleCheck size={'48px'} color='#1F5B2C' /></span>
            <h2>Thank You for Your Order!</h2>
            <p>We've received your request and our orchard team is already selecting the most vibrant, sun-ripened fruit for your delivery.</p>

            <div className="product-order order-confirmation">
                <div className="product-order-wrapper">
                    <div className="product-order-header">
                        <div className="product-order-box">
                            <h6>Order Number</h6>
                            <span>#SDM-8829104</span>
                        </div>

                        <div className="product-order-box">
                            <h6>Estimated Arrival</h6>
                            <span>07 May 26</span>
                        </div>

                        <div className="product-order-box">
                            <label>Order Confirmed</label>
                        </div>
                    </div>

                    <h3>Your Order</h3>
                    <div className="user-order">
                        <div className="cart-item">
                            <div className="cart-item-image">
                                <img src={CartImage} alt='' />
                            </div>
    
                            <div className="cart-item-details">
                                <h5>Kesar Premium Mangos</h5>
                                <p>Harvest Arrival: 4 May 2026 - 7 May 2026</p>
    
                                <div className="cart-price-details">
                                    <b>₹ 1000</b>
    
                                    <span>Qty: 1</span>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>

                <div className="product-cart-summary">
                    <h4>Order Summary</h4>

                    <div className="cart-item">
                        <div className="cart-item-details">
                            <div className="cart-price-details">
                                <b>subtotal</b>

                                <span>₹ 1000</span>
                            </div>

                            <div className="cart-price-details">
                                <b>Shipping (Express)</b>

                                <span>0</span>
                            </div>
                        </div>
                    </div>

                    <div className="cart-total">
                        <b>Total Amount</b>
                        <span>₹ 1000</span>
                    </div>

                    <div className="cart-place-order">
                        <button className='btn-tertiery' onClick={OrderNavigate}>Return to Shop</button>
                    </div>
                </div>
            </div>

        </div> 
    );
}
 
export default OrderConfirmation;