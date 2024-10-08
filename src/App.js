// component is a js function returning html
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import { Row, Col } from "react-bootstrap";
import EmpCard from "./Components/EmpCard.js";
import Header from "./Components/Header";
import users from "./data.js";

const App = () => {
  return (
    <div>
      <Header />

      <main>
        {
          <Row className="cards">
            {users.length === 0 ? (
              <h2>No Users Found</h2>
            ) : (
              users.map((userObj) => {
                return (
                  <EmpCard
                    name={userObj.name}
                    phone={userObj.phone}
                    email={userObj.email}
                    imgURL={userObj.imgURL}
                    key={userObj.id}
                  />
                );
              })
            )}
          </Row>
        }{" "}
      </main>
    </div>
  );
};

export default App;
