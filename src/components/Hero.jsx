import React from 'react'

function Hero() {
    return (
        <div className='heroSection'>
            <div className="productDetails">
                <h1>YOUR FEET
                    DESERVE
                    THE BEST</h1>
                <p>YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.</p>

                <div className="btns">
                    <button>Shop Now</button>
                    <button>Category</button>
                </div>
                <div className="provider">
                    <p>Available on</p>
                    <div className="img">
                        <img src="/images/flipkart.png" alt="" />
                        <img src="/images/amazon.png" alt="" />
                    </div>
                </div>
            </div>
            <div className="productImg">
                <img src="/images/shoe_image.png" alt="" />
            </div>
        </div>
    )
}

export default Hero