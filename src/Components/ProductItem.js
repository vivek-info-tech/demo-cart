import React, { createContext, useState } from 'react'
import Products from './Products';


export default function ProductItem(props) {
    const CartsContext = createContext();
    const [allprice, setAllprice]=useState([]);
    const stock = props.stock;
    const [quantity, setQuantity] = useState(0);
    const [cart, setCart] = useState([]);
    
     const item=props.adproduct;
     
    const handleAddcart = (item) => {
      
      setCart( ...cart,item);
      setQuantity(quantity+1)
    console.log(item.stock)
    console.log(cart)
      
  } 
   const cartscount=cart.length;
    const handleIncrement = () => {

        if (quantity < stock) {
            setQuantity(quantity + 1)
        }
    }
    const handleDcreament = () => {

        if (quantity >= 1) {
            setQuantity(quantity - 1)
        }
    }
    return (
        <CartsContext.Provider value={cartscount}>

            <div className="card " style={{ width: "18rem" }}>
                <img src={props.imgUrl} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{props.title}</h5>
                    <p className="card-text"> {props.description}</p>
                    <div className="container d-flex justify-content-between" >
                        <h4>${props.price}</h4>
                        {(quantity === 0) ? <button onClick={ handleAddcart  } className="btn btn-primary">Add to Cart</button>
                            : <div className='container d-flex  float-right mx-5'><button className='input-group-text' onClick={handleDcreament}>-</button>
                                <div className='text-center form-control  ' style={{ width: '3rem' }}>{quantity}</div>
                                <button className='input-group-text' onClick={handleIncrement}>+</button>
                            </div>}
                    </div>
                </div>
            </div>
        </CartsContext.Provider>
    )
}
