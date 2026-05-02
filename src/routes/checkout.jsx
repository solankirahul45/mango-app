import {ShoppingBasket } from 'lucide-react';
import CartImage from '../assets/mango-cart.png'

const Checkout = () => {
    return (
        <div className="product-section">
            <h2>Secure Checkout</h2>
            <p>Your harvest of premium mangos is just a few steps away.</p>

            <div className="product-order">
                <div className="product-address">
                    <h4>Delivery Address</h4>

                    <form action="">
                        <div className="row column2">
                            <div className="form-group">
                                <label htmlFor="fullname">Full Name</label>
                                <input type='text' id='fullname' />
                            </div>

                            <div className="form-group">
                                <label htmlFor="phone">Phone Number</label>
                                <input type='Number' id='phone' />
                            </div>
                        </div>

                        <div className="row">
                            <div className="form-group">
                                <label htmlFor="address" >Address</label>
                                <input type='text' id='address' />
                            </div>
                        </div>

                        <div className="row column3">
                            <div className="form-group">
                                <label htmlFor="city">City</label>
                                <input type='text' id='city' />
                            </div>

                            <div className="form-group">
                                <label htmlFor="state">State</label>
                                <input type='text' id='state' />
                            </div>

                            <div className="form-group">
                                <label htmlFor="pincode">Pin Code</label>
                                <input type='text' id='pincode' />
                            </div>
                        </div>
                    </form>
                </div>

                <div className="product-cart-summary">
                    <h4>Cart Summary</h4>

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

                    <div className="cart-total">
                        <b>Total Amount</b>
                        <span>₹ 1000</span>
                    </div>

                    <div className="cart-place-order">
                        <button className='btn-secondary'>Place Your Order </button>
                    </div>
                </div>
            </div>

        </div> 
    );
}
 
export default Checkout;