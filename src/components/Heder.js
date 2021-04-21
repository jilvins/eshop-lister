import React from 'react'
import {Link, useHistory} from 'react-router-dom'
import {Navbar, Nav, NavDropdown} from 'react-bootstrap'

function Header(){
  let user=JSON.parse(localStorage.getItem('user-info'))
  const history = useHistory();
  function logOut(){
    localStorage.clear();
    history.push('/register')

  }
    return(
        <div>
  <Navbar bg="dark" variant="dark">
    <Navbar.Brand href="#home">Eshop</Navbar.Brand>
    <Nav className="mr-auto navbar-wrapper">
      {
        localStorage.getItem('user-info') ?
        <>
        <Link to="/add">Product List</Link>
        <Link to="/add">Add Product</Link>
      <Link to="/update">Update Product</Link>
        </>
        :
        <>
        <Link to="/login">Login</Link>
      <Link to="/register">Register</Link>
        </>
      }
    </Nav>
    {localStorage.getItem('user-info') ?
    <Nav>
      <NavDropdown title={user && user.name}>
        <NavDropdown.Item onClick={logOut}>Logout</NavDropdown.Item>
      </NavDropdown>
    </Nav>
    : null}
  </Navbar>
        </div>
    )
}

export default Header