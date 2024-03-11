import React, { useState, useEffect } from 'react'
import ProductItem from './ProductItem'
export default function Products( ) {
  const [products, setProducts] = useState([]);
  const [search,setSearch]=useState("");
  
  const [price,setPrice]=useState();
  useEffect(()=>{getProduct()},[])
  
  
  
 
    
    


  const getProduct = async () => {
    let url = 'https://dummyjson.com/products';
    let result = await fetch(url);
    result = await result.json();
    

    setProducts(result.products)

  }
  const handleIpute=  (e)=>{
   let key=e.target.value;
   setSearch(key)
    
   
  }
const searchItem=async()=>{
  const keys=search;
  if(keys)  {let url=`https://dummyjson.com/products/search?q=${keys}`;
      let result= await fetch(url);
      result= await result.json();
      if(result){
      setProducts(result.products)}

}else{
  getProduct();
}
}
   

  const handleSearch=()=>{
       
      searchItem()
}
  return (


    <div className="container my-3">
         <div className="container my-4 d-flex justify-content-between">
                <div>
                    <h3>Price</h3>
                    <p>{price}</p>
                    <input type="range" min={0} max={45} onChange={(event)=>{setPrice(event.target.value)}} value={45}/>
                    
                        
                         
                    
                </div>
                <div className='float-right'>
                    <div className="d-flex" role="search">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"onChange={handleIpute} value={search} />
                        <button className="btn btn-outline-success" onClick={handleSearch} type='submit' >Search</button>
                    </div>
                </div>
            </div>
            <h2 className='text-center my-5'>Products List</h2>
      <div className="row">
       {products.length? products.map((element) => {
          return <div className='col-md-4' key={element.id}>
            
            <ProductItem title={element.title} description={element.description} imgUrl={element.thumbnail} price={element.price} stock={element.stock} adproduct={element}   />
          </div>
        }):<h2 className='text-center'>Product not found!</h2>
        }
      </div>
    </div>


  )
}