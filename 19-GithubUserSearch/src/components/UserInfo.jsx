import { createContext, useContext } from "react";
import { Col, Card, Button, Row } from "react-bootstrap";
import { UserContext } from "./UserContextProvider";
import notFound from "../assets/404.gif";

const UserInfo = () => {
  const { user, setUser } = useContext(UserContext);

  return user ? (
    <Row xs={2} md={3} lg={3} className="mt-4 justify-content-center">
      <Col>
        <Card>
          <Card.Img variant="top" src="" />
          <Card.Body>
            <Card.Text>{user.username}</Card.Text>
            <Button
              href="#"
              target="_blank"
              style={{ borderRadius: "50px" }}
              variant="primary"
            >
              VIEW PROFILE
            </Button>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  ) : (
    <img src={notFound} alt="404" />
  );
};

export default UserInfo;
