import kesarBox from '../assets/kesar-mango-box.avif';
import {ShoppingBasket } from 'lucide-react';

const Products = () => {
    return (
        <div className="product-section">
            <h2>Order the Farm Fresh Kesar Mangoes</h2>
            <p>Naturally ripened Alphonso mangoes sourced directly from trusted farms.</p>

            <div className="product-order">
                <div className="product-image">
                    <img src={kesarBox} alt='' />
                </div>

                <div className="product-details">
                    <h4>Premium Kesar Mangoes</h4>

                    <p>Rich aroma, Natural sweetness, From Farm to Family</p>

                    <div className="select-order">
                        <span className='added-quantity'>1 <ShoppingBasket size={20} color="#57534e" /></span>
                        <span className='added-details'>12 pcs(~ 2.7kg) / <b>₹ 1000</b></span>
                        {/* <span className='added-price'>₹ 1000</span> */}
                    </div>

                    <div className="add-to-cart">
                        <button className='btn-secondary'>Add to Cart</button>
                        <button className='btn-primary'>Buy Now</button>
                    </div>
                </div>
            </div>

        </div> 
    );
}
 
export default Products;