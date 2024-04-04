import { createContext, useContext } from "react";
import { Col, Card, Button, Row } from "react-bootstrap";
import { UserContext } from "./UserContextProvider";
import gif404 from "../assets/404.gif";

const UserInfo = () => {
  const { user, setUser } = useContext(UserContext);

  const notFound = user.message === "Not Found";

  return (
    <>
      {user && (
        <Row xs={2} md={3} lg={3} className="mt-4 justify-content-center">
          <Col>
            <Card>
              <Card.Img
                variant="top"
                src={user.avatar_url}
                style={{ borderRadius: "10px" }}
              />
              <Card.Body>
                <Card.Text style={{ color: "black" }}>{user.login}</Card.Text>
                <p style={{ color: "black" }}>Followers: {user.followers}</p>
                <Button
                  href="#"
                  target="_blank"
                  style={{ borderRadius: "100px" }}
                  variant="primary"
                >
                  VIEW PROFILE
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      )}

      {notFound && <img src={gif404} alt="404" />}
    </>
  );
};

export default UserInfo;
