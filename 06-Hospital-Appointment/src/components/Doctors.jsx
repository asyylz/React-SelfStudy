import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { MDBCol, MDBRow, MDBContainer } from "mdb-react-ui-kit";

export default function Doctors({ dataDoctors }) {
  console.log(dataDoctors);
  return (
    <MDBContainer className="px-2 mt-3">
      <MDBRow className="gx-3 gy-3">
        {dataDoctors.map((doctor) => (
          <MDBCol key={doctor.id} >
            <div className="p-3">
              <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src={doctor.img} />
                <Card.Body>
                  <Card.Title>{doctor.doctorName}</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
            </div>
          </MDBCol>
        ))}
      </MDBRow>
    </MDBContainer>
  );
}
