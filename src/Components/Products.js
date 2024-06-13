import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../rtk/slices/product_slice';
import { addTocart } from '../rtk/slices/cart_slice';
import '../Css/products.css' ; 

function Products ()
{
    const  Products  =  useSelector((state) => state.Products )  ;
    console.log(Products);
    const dispatch =  useDispatch() ; 

    useEffect(() =>{
        dispatch(fetchProducts()) ; 
    } ,[])

    return(
        <>
        <div className="container">
            <div className= "row">
                {Products.map((p) =>  {
                    return(
                        <div className="col-lg-3 col-sm-12  col-md-6 column">
                            <div class="card" > 
                                <div className="img">
                                    <img src={p.image} class="card-img-top" alt="image"/>
                                </div>
                                <div class="card-body">
                                    <h5 class="card-title title">{p.title}</h5>
                                    <p class="card-text text">{p.description}</p>
                                    <p class="card-text price">{p.price}$</p>
                                    <button onClick={()=> dispatch(addTocart(p))} type="button" class="btn btn-outline-info">Add to cart </button>
                                </div>
                            </div>
                        </div>
                    ); 
                    })}  
            </div>
        </div>
        </>
    ) ;  
}

export default  Products  ;  