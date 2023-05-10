import {Col, Card, Image} from "react-bootstrap";

const TeacherCard = ({ teacher }) => {
  return (
  <Col className='mt-3' md={3}>
    <Card className="mx-auto h-100" style={{ width: '18rem'}}>
        <Col className="ms-4" xs={6} md={4}>
          <Image   src={process.env.REACT_APP_API_URL + teacher.img} rounded />
        </Col>
      <Card.Body>
        <Card.Title>{teacher.name}</Card.Title>
        <Card.Text>
          {teacher.subject}
        </Card.Text>
      </Card.Body>
    </Card>
  </Col>
  )
};

export default TeacherCard;
