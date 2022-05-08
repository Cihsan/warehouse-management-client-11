import React, { useEffect, useState } from 'react';

const FeatureOne = () => {
    const [products, setProduct] = useState([])
    useEffect(() => {
        fetch('https://secret-eyrie-28226.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [])
    return (
        <div className='container'>
            <div className="">
                {
                    products.slice(11, 12).map(item => <div className=' d-flex card p-3 mt-3' key={item._id}>
                        <div className='align-items-center'>
                            <img className='w-25 zoom mb-2' src={item.pic} alt="" />
                            <ul style={{ listStyle: 'none' }}>
                                <li><h5>{item.pName}</h5></li>
                            </ul>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default FeatureOne;