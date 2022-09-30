import {Container, Col, Row} from  "react-bootstrap";
export const Projects = () => {
  const projects = [
    {
      title: "DevelUP",
      description:
        "A straight to hire developer website to advertise web services",
      imgUrl: "",
    },
    {
      title: "Move",
      description: "Social website for enjoyers of the outdoors",
      imgUrl: "",
    },
    {
      title: "Dinner Decider",
      description: "An app that uses the spoonacular API to get recipes and a relevant video",
      imgUrl: "",
    },
  ];
  return(
    <section className="banner2" id ="home">
    <Container>
        <Row className="align-items-center">
           
            <Col xs={12} md={6} xl={7}>
                {/* <span className="tagline">Welcome to my portfolio</span> */}
                <h1> Projects</h1>
                 </Col>
        </Row>
    </Container>
</section>
  )
};
