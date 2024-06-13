import { Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { deleteTocart } from "../rtk/slices/cart_slice";
import { clear } from "../rtk/slices/cart_slice";
function Cart() {
    const  myProduct  =  useSelector((state) => (state.Cart)) ;
    const  dispatch  =  useDispatch() ; 
    return(
        <>
        <Container>
            <h1 style={{marginBottom:'100px'}}> My Cart</h1>
            <table class="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Products</th>
                        <th scope="col">Image</th>
                        <th scope="col">Price</th>
                        <th scope="col">Quantity</th>
                        <th scope="col">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {myProduct.map((p) => {
                        return(
                            <tr>
                                <th scope="row">{p.id}</th>
                                <td style={{color:'rgb(30, 216, 220)'}}>{p.title}</td>
                                <td><img style={{width:'50px' ,  height:'50px'}} src={p.image}/></td>
                                <td style={{color:'green' , fontWeight:'bold'}}>{p.price * p.quantity}</td>
                                <td>{p.quantity}</td>
                                <td><button onClick={() => dispatch(deleteTocart(p))} type="button" class="btn btn-danger">Remove</button></td>
                            </tr>
                        ) ; 
                    } )}
                </tbody>
            </table>
            <button onClick={() =>dispatch(clear())} type="button" class="btn btn-danger">Delete List</button>   
        </Container>
        </>
    ) ;  
}

export  default Cart ; 