import {Container} from "react-bootstrap"
// import {ArrowRightCircle} from "react-bootstrap-icons"
import {Row} from "react-bootstrap"
import {Col} from "react-bootstrap"
import profile from "../assets/img/profile.jpeg"

export const Footer = () => {
    return (
<section className="footer" id ="home">
    <Container>
        <Row className="align-items-center">
           
            <Col xs={12} md={6} xl={7}>
         <p>© Nic Catania 2023</p>
            </Col>
        </Row>
    </Container>
</section>
    )
} 