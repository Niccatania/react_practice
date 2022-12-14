import { Container, Row, Col } from "react-bootstrap";
import Move from "../assets/img/move2.png"
import Pwa from "../assets/img/pwa.png"
import Dinner from '../assets/img/gif.gif'
import pyBlog from '../assets/img/pyBLog.png'
import develup from "../assets/img/develup.png"

export const Projects = () =>{
    const responsive = {
        superLargeDesktop: {
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 2
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 1
        },
        mobile: {
          breakpoint: { max: 520, min: 0 }, 
          items: 1
        }
      };
    return (
   
      <section className="skill" id="projects">
       
        <div className="mix-div">
 </div>
        <Container>
          <Row>
            <Col>
            <div className="skill-bx">
              <h2>
                Projects
              </h2>

<div className="item hoverLink">
    <a className=""href="https://move.herokuapp.com/" ><img className="imgClassTwo " src={Move} alt="Move projects" /> </a>
    <h5 className="item ">Move</h5>
  </div>

  <div className="item hoverLink">
    <a className=""href="https://develup.herokuapp.com/" ><img className="imgClassTwo " src={develup} alt="develup projects" /> </a>
    <h5 className="item ">Develup</h5>
  </div>
  

<div className="item hoverLink">
    <a href="https://owenmg.github.io/Dinner_Decider/"> <img className="imgClassTwo"  src={Dinner} alt="Dinner Decider" /></a>
    <h5 className="item ">Dinner Decider</h5>
  </div>

<div className="item hoverLink ">
<a href="https://pythonblog.herokuapp.com/"> <img className="imgClassTwo " src={pyBlog} alt="python Blog" /> </a>
    <h5 className="item ">Python Blog</h5>
  </div>
            </div>
            </Col>
          </Row>
        </Container>
      </section>
    )
}