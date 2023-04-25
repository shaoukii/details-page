import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import image from "./cat.jpg";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import ColorSchemesExample from "./nav";

function App() {
  return (
    <>
      <ColorSchemesExample></ColorSchemesExample>
      <div className="App" style={{ padding: "20px" ,paddingLeft:"80px"}}>
        <Container>
          <Row>
            <Col>
              <img
                src={image}
                alt="img"
                width="100%"
                height="60%"
                className="responsive-image"
              />
            </Col>
            <Col>
              <div style={{ padding: "20px" }}>
                <Card style={{ width: "30rem", padding: "30px" , textAlign:"center" }}>
                  <Card.Body>
                    <Card.Title >Moonstone Cat</Card.Title>
                    <Card.Text  style={{ textAlign:"start" ,paddingTop:"20px" }}>
                      The Moonstone Cat is a medium-sized cat with a sleek,
                      muscular build and long, slender legs. They have a short,
                      plush coat that shimmers in the light, with a range of
                      colors from pale silver to deep gray, giving them a
                      moonlit appearance. Their eyes are a bright and piercing
                      blue, reminiscent of moonstones. Despite their regal
                      appearance, the Moonstone Cat is known for their gentle
                      and affectionate nature. They crave attention and love to
                      be near their humans, often curling up in laps or
                      snuggling under blankets. They are also highly intelligent
                      and trainable, making them excellent companions for those
                      who enjoy teaching their pets tricks and games.
                    </Card.Text>
                    <Button variant="outline-secondary">Go somewhere</Button>
                  </Card.Body>
                </Card>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default App;
