import React from "react";
import { Button, Card, Col } from "react-bootstrap";
// const Card = (props) => {
//   console.log(props);
//   return (
//     <div className="card">
//       <h3>{props.name}</h3>
//       <p>{props.phone}</p>
//       <p>{props.email}</p>
//     </div>
//   );
// };

const EmpCard = ({ name, phone, email, imgURL }) => {
  return (
    <Col>
      <Card>
        <Card.Img variant="top" src={imgURL} alt={name} />
        <Card.Body>
          <Card.Title as="h3">{name}</Card.Title>
          <Card.Text>{phone}</Card.Text>
          <Card.Text>{email}</Card.Text>
          <Button variant="info">Read More</Button>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default EmpCard;
