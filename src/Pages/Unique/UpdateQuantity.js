import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { AiOutlineCarryOut } from 'react-icons/ai';
import { toast, ToastContainer } from "react-toastify";

const UpdateQuantity = () => {
    const { id } = useParams()
    const [products, setProduct] = useState([])
    useEffect(() => {
        const url = `http://localhost:5000/update/${id}`
        fetch(url)
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [products, id])

    //Deliver
    const deliver = () => {
        const quantity = parseInt(products.qt) - 1
        const uQuantity = { quantity }
        const url = `http://localhost:5000/update/${id}`
        const ask = window.confirm('Are sure to Deliver')
        if (ask) {
            fetch(url, {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(uQuantity)
            })
                .then(res => res.json())
                .then(data => {
                    toast('Your Product Ready to Deliver')
                })
        }
    }

    //Quantity Update
    const addQuantity = event => {
        event.preventDefault()
        const inPutquantity = event.target.quantity.value;
        const quantity = parseInt(products.qt) + parseInt(inPutquantity)
        const uQuantity = { quantity }
        const url = `http://localhost:5000/update/${id}`
        const ask = window.confirm('Are sure to Update')
        if (ask) {
            fetch(url, {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(uQuantity)
            })
                .then(res => res.json())
                .then(data => {
                    toast('Product Quantity Updated')
                })
            event.target.reset()
        }


    }
    return (
        <div className="container">
            <div className="mt-5">
                <ToastContainer />
                <div className="row justify-content-center align-items-center g-5">
                    <img className="col-md-4 col-sm-6 col" src={products.pic} alt="" />
                    <div className="col-md-8 col-sm-6 col">
                        <h3>Product Name : {products.pName}</h3>
                        <h4>Supplier : {products.sName}</h4>
                        <h4>Desc.. : {products.desc}</h4>
                        <h4>Price : {products.price}</h4>
                        <div className="d-flex mb-3">
                            <h5>Quantity : {products.qt}</h5>
                            <form onSubmit={addQuantity} className='d-flex align-items-center'>{/* increase */}
                                <input className="form-control mx-4" type="number" name="quantity" placeholder="Product Quantity" required />
                                <input className="btn btn-info text-white" type="submit" value="Update Quantity" />
                            </form>
                        </div>
                        <button className="btn btn-success" onClick={deliver}>Delivered <AiOutlineCarryOut /></button>{/* decrease one */}
                        <Link className="btn btn-link " to='/all-product'>Go Manage Product</Link>
                    </div>

                </div>

            </div>



        </div>
    );
};

export default UpdateQuantity;