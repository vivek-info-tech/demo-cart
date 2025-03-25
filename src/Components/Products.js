import React, { useState, useEffect } from 'react'
import ProductItem from './ProductItem'
import Pagination from './Pagination';
export default function Products() {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [price, setPrice] = useState();
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [sortOption, setSortOption] = useState('name');
  useEffect(() => { getProduct() }, [])




  const totalPages = Math.ceil(filteredProducts.length / 10);

  const currentProducts = filteredProducts.slice((currentPage - 1) * 10, currentPage * 10);

  // console.log(totalPages)
  // console.log(products.length)

  const getProduct = async () => {
    let url = 'https://dummyjson.com/products';
    let result = await fetch(url);
    result = await result.json();


    setProducts(result.products)
    setFilteredProducts(result.products)

  }
  const handleIpute = (e) => {
    let key = e.target.value;
    setSearch(key)


  }
  const searchItem = async () => {
    const keys = search;
    if (keys) {
      let url = `https://dummyjson.com/products/search?q=${keys}`;
      let result = await fetch(url);
      result = await result.json();
      if (result) {
        setFilteredProducts(result.products)
      }

    } else {
      getProduct();
    }
  }
  const handleSort = (e) => {
    setSortOption(e.target.value);
    const sorted = [...filteredProducts].sort((a, b) => {
      if (sortOption === 'name') {
        return a.title.localeCompare(b.title);
      }
      else if(sortOption=== 'rating'){
        return a.rating-b.rating;
      }
      return a.price - b.price;
    });
    setFilteredProducts(sorted);
  };

  const handleSearch = () => {

    searchItem()
  }
  return (


    <div className="container my-3">
      <div className="container my-4 d-flex justify-content-between">
        <div>
          <h3>Sort</h3>
          {/* <p>{price}</p>
                    <input type='range' min={0} max={45} onChange={(event)=>{setPrice(event.target.value)}} value={45}/> */}

          <select onChange={handleSort}>
            <option value="name">Sort by Name</option>
            <option value="price">Sort by Price</option>
            <option value="rating">Sort by Rating</option>
          </select>


        </div>
        <div className='float-right'>
          <div className="d-flex" role="search">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" onChange={handleIpute} value={search} />
            <button className="btn btn-outline-success" onClick={handleSearch} type='submit' >Search</button>
          </div>
        </div>
      </div>
      <h2 className='text-center my-5'>Products List</h2>
      <div className="row">
        {currentProducts.length ? currentProducts.map((element) => {
          return <div className='col-md-4' key={element.id}>

            <ProductItem title={element.title} rating={element.rating} description={element.description} imgUrl={element.thumbnail} price={element.price} stock={element.stock} adproduct={element} />
          </div>
        }) : <h2 className='text-center'>Product not found!</h2>
        }
        <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={setCurrentPage} />
      </div>
    </div>


  )
}