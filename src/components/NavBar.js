import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useState, useEffect } from "react";
import {Link} from "react-router-dom"
import navIcon1 from '../assets/img/nav-icon1.svg';
import twitt from "../assets/img/twitt.png";

export const NavBar = () => {
    const [activeLink, setActiveLink] = useState('home');
    const[scrolled,setScrolled]= useState(false)

    useEffect( () =>{
        const onScroll = () => {
            if (window.scrollY> 50) {
                setScrolled(true);
            } else{
                setScrolled(false);
            }
        }
        window.addEventListener("scroll", onScroll);

        return () => window.removeEventListener("scroll", onScroll);

    }, [])

    const onUpdateActiveLink = (value) =>{
        setActiveLink(value);
     }

  return (
    <Navbar  expand="lg" className={scrolled ? "scrolled aText": ""}>
      <Container> 
        <Navbar.Brand href="#home">Nic Catania</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className="navbar-toggler-icon"></span>   
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto linkClass">
            <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link': 'navbar-link'} onClick={ () => onUpdateActiveLink('home')} >Home</Nav.Link>
            <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link': 'navbar-link'} onClick={ () => onUpdateActiveLink('projects')}>Projects</Nav.Link>
      
          </Nav>
          <span className="navbar-text">
            <div className="social-icon">
            <a href="https://www.linkedin.com/in/niccatania/"><img src={navIcon1} alt="linkedIn" /></a>
            </div>
            <div className="social-icon2">
            <a href="https://twitter.com/NicCatania"><img src={twitt} alt="twitter" /></a>
            </div>
            <button className="vvd" onClick={()=> console.log("connect")}><span>
            nicjcatania@gmail.com</span></button>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
export default NavBar;