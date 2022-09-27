import {Container} from "react-bootstrap"
// import {ArrowRightCircle} from "react-bootstrap-icons"
import {Row} from "react-bootstrap"
import {Col} from "react-bootstrap"
import profile from "../assets/img/profile.jpeg"

export const Banner = () => {
    return (
<section className="banner" id ="home">
    <Container>
        <Row className="align-items-center">
           
            <Col xs={12} md={6} xl={7}>
                {/* <span className="tagline">Welcome to my portfolio</span> */}
                <h1>{`Hello I'm Nic Catania!`}<span className="wrap"> 
                    </span>
                    </h1>
                    <p>I'm a full stack web developer with 10 years of exceptional customer service experience. My passions lie in channeling my creativity through coding.</p>
                    {/* <button onClick={()=> console.log('connct')}></button> */}
                     <img className="profileClass" src={profile} />
            </Col>
        </Row>
    </Container>
</section>
    )
} 