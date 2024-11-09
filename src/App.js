// component is a js function returning html
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Header from "./Components/Header";
// import Counter from "./Components/Counter";
// import Timer from "./Components/Timer";
import CreateForm from "./Components/CreateForm.js";
import { Card, Container } from "react-bootstrap";
import { useState } from "react";

const App = () => {
  const [users, setUsers] = useState([]);

  const addUserHandler = (userObj) => {
    console.log("USER INFO =>", userObj);
  };

  return (
    <div>
      <Header />
      <main>
        {/* <Counter /> */}
        {/* <Timer /> */}
        <CreateForm onAdd={addUserHandler} />

        <main>
          <Container>
            <Card />
          </Container>
        </main>
      </main>
    </div>
  );
};

export default App;
