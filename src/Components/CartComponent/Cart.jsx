import React from 'react';
import './Cart.scss';
import closeIcon from '../../assets/images/close.svg';

const Cart = ({ isOpen, toggleCart }) => {
    return (
        <>
            <div className={`CartOverlay ${isOpen ? 'open' : ''}`} onClick={toggleCart}></div>
            <div className={`Cart ${isOpen ? 'open' : ''}`}>
                <header className='CartHeader'>
                    <div id='CartTitle'>
                        <h2>Shopping cart</h2>
                    </div>
                    <div className='CartCloseContainer' onClick={toggleCart}>
                        <img src={closeIcon} alt="Close" className="CloseCart" />
                    </div>
                </header>
                <div className='allProductsContainer'>
                    <div className='scrollContainer'>

                        {/* product example */}
                        <div className='productContainer'>
                            <div className='productImages'>
                                <img src="/src/assets/images/matrixrevolutionsplakat.jpg" alt="" />
                            </div>
                            <div className='productText'>
                                <h2 className='productTitle'>The Matrix Revolutions</h2>{/* product title */}
                                <p>100kr</p>{/* product price */}
                                <p className='productHeight'>Height 85 cm</p>{/* product height */}
                                <p className='productWidth'>Width 62 cm</p>{/* product width */}
                                <div className='quantityAndRemoveContainer'>
                                    <div className='quantity'>
                                        - 1 +
                                    </div>
                                    <div>
                                        <p>remove</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* product example */}
                        <div className='productContainer'>
                            <div className='productImages'>
                                <img src="/src/assets/images/matrixrevolutionsplakat.jpg" alt="" />
                            </div>
                            <div className='productText'>
                                <h2 className='productTitle'>The Matrix Revolutions</h2>{/* product title */}
                                <p>100kr</p>{/* product price */}
                                <p className='productHeight'>Height 85 cm</p>{/* product height */}
                                <p className='productWidth'>Width 62 cm</p>{/* product width */}
                                <div className='quantityAndRemoveContainer'>
                                    <div className='quantity'>
                                        - 1 +
                                    </div>
                                    <div>
                                        <p>remove</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='exit'>
                        <div className='TotalContainer'>
                            <p>Subtotal</p>
                            <p className='price'>100,00 kr</p>
                        </div>
                        <button className='CheckOut'>
                            Checkout
                        </button>
                    </div>
                </div>

            </div>
        </>
    );
};

export default Cart;