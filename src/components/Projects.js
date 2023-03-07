import { Container, Row, Col } from "react-bootstrap";
import Move from "../assets/img/move2.png"
import Dinner from '../assets/img/DDDD.png'
import develup from "../assets/img/devop.png"

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
    <a className=""href="https://develup.herokuapp.com/" ><img className="imgClassTwo " src={develup} alt="develup projects" /> </a>
    <h5 className="item ">Develup</h5>
    <p>A team built Web development service app using React, MongoDB, Graphql, and Chakra UI.</p>
  </div>
  

<div className="item hoverLink">
    <a className=""href="https://move.herokuapp.com/" ><img className="imgClassTwo " src={Move} alt="Move projects" /> </a>
    <h5 className="item ">Move</h5>
    <p>A team built social blog using handlebars and mySQL</p>
  </div>

<div className="item hoverLink">
    <a href="https://Niccatania.github.io/Dinner_Decider/"> <img className="imgClassTwo"  src={Dinner} alt="Dinner Decider" /></a>
    <h5 className="item ">Dinner Decider</h5>
    <p>A team built Recipe app uisng HTML, CSS, Javascript and uses API calls.</p>
  </div>

{/* <div className="item hoverLink ">
<a href="https://pythonblog.herokuapp.com/"> <img className="imgClassTwo " src={pyBlog} alt="python Blog" /> </a>
    <h5 className="item ">Python Blog</h5>
  </div> */}
            </div>
            </Col>
          </Row>
        </Container>
      </section>
    )
}