import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function AppNavbar() {
    const cart =  useSelector((state) => state.Cart) ; 
    return (
    <Navbar bg="dark" data-bs-theme="dark" className="bg-body-tertiary mb-5 sticky-top ">
        <Container>
            <Link to="/" className="navbar-brand">App Cart</Link>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ms-auto">
                    <Link to="/"  className="nav-link me-3">Products</Link>
                    <Link  to="cart"  className="nav-link ms-5">Cart <span style={{borderRadius:'50%' , color:'white' ,background:'rgb(30, 216, 220)'}}>{cart.length ? cart.length : null}</span></Link>  
                </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>
    );
}

export default AppNavbar;
