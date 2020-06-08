import React from "react";
import { Link } from "react-router-dom";
import axios from 'axios';
// reactstrap components
import {
  Collapse,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  UncontrolledTooltip,
  UncontrolledCollapse,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup
} from "reactstrap";
import 'tachyons';
function ExamplesNavbar(props) {
  const [navbarColor, setNavbarColor] = React.useState("navbar-white");
  const [collapseOpen, setCollapseOpen] = React.useState(false);
  const [Search, setSearch] = React.useState('');
  React.useEffect(() => {
    const updateNavbarColor = () => {
      if (
        document.documentElement.scrollTop > 399 ||
        document.body.scrollTop > 399
      ) {
        setNavbarColor("");
      } else if (
        document.documentElement.scrollTop < 400 ||
        document.body.scrollTop < 400
      ) {
        setNavbarColor("navbar-white");
      }
    };
    window.addEventListener("scroll", updateNavbarColor);
    return function cleanup() {
      window.removeEventListener("scroll", updateNavbarColor);
    };
  });

const jwt =localStorage.getItem("token");
var admin =localStorage.getItem("admin");
var logeado,adminProducts,adminCreate,usercart,loggeduser,loggeduser2;
if (jwt) {
   logeado= <NavItem>
              <NavLink to="/logout" tag={Link}>
                  LOGOUT
                </NavLink>
              </NavItem>;
 
   
    usercart=<NavItem>
   <NavLink to="/user/cart" tag={Link}>
       Shopping Cart
     </NavLink>
   </NavItem>;
}else{
  loggeduser= <NavItem>
  <NavLink to="/login" tag={Link}>
      LOGIN
    </NavLink>
  </NavItem>;

 loggeduser2= <NavItem>
  <NavLink to="/signup" tag={Link}>
    SignUp
  </NavLink>
</NavItem>

}

if (admin  === "true") {

  adminProducts=<NavItem>
        <NavLink to="/products" tag={Link}>
            Products
         </NavLink>
        </NavItem>;

         adminCreate=<NavItem>
         <NavLink to="/create" tag={Link}>
             Add a Product
          </NavLink>
         </NavItem>;
}

function onSearchHandle(e){

  e.preventDefault(); // Ensure it is only this code that rusn
  console.log('entro y ',e.target.value)
  setSearch(e.target.value)
}

  return (
    <>
      {collapseOpen ? (
        <div
          id="bodyClick"
          onClick={() => {
            document.documentElement.classList.toggle("nav-open");
            setCollapseOpen(false);
          }}
        />
      ) : null}
      <Navbar className={"fixed-top " + navbarColor} color="white" expand="lg">
        <Container>
          <UncontrolledDropdown className="button-dropdown">
            <DropdownToggle
              caret
              data-toggle="dropdown"
              href="#pablo"
              id="navbarDropdown"
              tag="a"
              onClick={e => e.preventDefault()}
            >
              <span className="button-bar"></span>
              <span className="button-bar"></span>
              <span className="button-bar"></span>
            </DropdownToggle>
            <DropdownMenu aria-labelledby="navbarDropdown">
              <DropdownItem header tag="a">
                Dropdown header
              </DropdownItem>
              <DropdownItem href="#pablo" onClick={e => e.preventDefault()}>
                Action
              </DropdownItem>
              <DropdownItem href="#pablo" onClick={e => e.preventDefault()}>
                Another action
              </DropdownItem>
              <DropdownItem href="#pablo" onClick={e => e.preventDefault()}>
                Something else here
              </DropdownItem>
              <DropdownItem divider></DropdownItem>
              <DropdownItem href="#pablo" onClick={e => e.preventDefault()}>
                Separated link
              </DropdownItem>
              <DropdownItem divider></DropdownItem>
              <DropdownItem href="#pablo" onClick={e => e.preventDefault()}>
                One more separated link
              </DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
          <div className="navbar-translate">
            <NavbarBrand
              href="/"
              target="_blank"
              id="navbar-brand"
            >
              Home
            </NavbarBrand>




            <form action={"/search/"+ Search}>
              <input onChange={onSearchHandle} className="tamano pa2 ba b--black bg-lightest-black" type="search" name="" placeholder="Buscar" />
            </form>
            
                
            <UncontrolledTooltip target="#navbar-brand">
              Designed by JesuSachaFalquez
            </UncontrolledTooltip>
            <button
              className="navbar-toggler navbar-toggler"
              onClick={() => {
                document.documentElement.classList.toggle("nav-open");
                setCollapseOpen(!collapseOpen);
              }}
              aria-expanded={collapseOpen}
              type="button"
            >
              <span className="navbar-toggler-bar top-bar"></span>
              <span className="navbar-toggler-bar middle-bar"></span>
              <span className="navbar-toggler-bar bottom-bar"></span>
            </button>
          </div>
          <Collapse
            className="justify-content-end"
            isOpen={collapseOpen}
            navbar
          >

            

            <Nav navbar>
              
           
              {loggeduser2}
              {loggeduser}
              {adminProducts}
              {adminCreate}
              {usercart}
              {logeado}
           

              <NavItem>
                <NavLink
                  href="https://twitter.com/sesantanderf"
                  target="_blank"
                  id="twitter-tooltip"
                >
                  <i className="fab fa-twitter"></i>
                  <p className="d-lg-none d-xl-none">Twitter</p>
                </NavLink>
                <UncontrolledTooltip target="#twitter-tooltip">
                  Follow us on Twitter
                </UncontrolledTooltip>
              </NavItem>
              <NavItem>
                <NavLink
                  href="hhttps://www.facebook.com/gustavopetrourrego"
                  target="_blank"
                  id="facebook-tooltip"
                >
                  <i className="fab fa-facebook-square"></i>
                  <p className="d-lg-none d-xl-none">Facebook</p>
                </NavLink>
                <UncontrolledTooltip target="#facebook-tooltip">
                  Like us on Facebook
                </UncontrolledTooltip>
              </NavItem>
              <NavItem>
                <NavLink
                  href="https://www.instagram.com/eyevallenat0/"
                  target="_blank"
                  id="instagram-tooltip"
                >
                  <i className="fab fa-instagram"></i>
                  <p className="d-lg-none d-xl-none">Instagram</p>
                </NavLink>
                <UncontrolledTooltip target="#instagram-tooltip">
                  Follow us on Instagram
                </UncontrolledTooltip>
              </NavItem>
            </Nav>
          </Collapse>
          
        </Container>
      </Navbar>
    </>
  );
}

export default ExamplesNavbar;
