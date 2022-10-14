import { Container, Row, Col, Card, Button } from "react-bootstrap";

const CourseCard = ({ dataa }) => {
  // console.log(dataa);
  return (
    <Container className="text-center mt-4 p-4 d-flex justify-content-center">
      <Row className=" g-3">
        {dataa.map((eleman) => {
          return (
            <Col sm={12} md={6} lg={4}>
              <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src={eleman.img} />
                <Card.Body>
                  <Card.Title>{eleman.name}</Card.Title>
                  <Card.Text>{eleman.text}</Card.Text>
                  <Button variant="primary">DETAYLAR</Button>
                </Card.Body>
              </Card>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};

export default CourseCard;
