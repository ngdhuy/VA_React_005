import { Container, Row, Col, Button, Card } from 'react-bootstrap';

export default function Index(props) {
  return(
    <>
      <Container>
        <Row>
          <Col>
            <Card style={{width: '18rem'}} >
              <Card.Img variant="top" src="./img/corgi.jpg" />
              <Card.Body>
                <Card.Title>Corgi</Card.Title>
                <Card.Text>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed ab, cumque voluptatibus corporis maiores, quo id eius eaque suscipit, obcaecati ducimus et praesentium? Distinctio consequuntur aliquid nemo itaque eos dolorum?
                </Card.Text>
                <Button variant="primary">Take One</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}