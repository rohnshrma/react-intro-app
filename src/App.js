// component is a js function returning html
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Header from "./Components/Header";
// import Counter from "./Components/Counter";
// import Timer from "./Components/Timer";
import CreateForm from "./Components/CreateForm.js";
import { Card, Container } from "react-bootstrap";
import { useState } from "react";
import UserCard from "./Components/UserCard.js";

const App = () => {
  const [users, setUsers] = useState([]);

  const addUserHandler = (userObj) => {
    setUsers((prevUsers) => {
      console.log("PREVUSERS : ", prevUsers);

      return [userObj, ...prevUsers];
    });
    console.log("USER INFO =>", userObj);
  };

  return (
    <div>
      <Header />
      <main>
        {/* <Counter /> */}
        {/* <Timer /> */}
        <CreateForm onAdd={addUserHandler} />
      </main>
      <Container className="cards-container">
        {users.map((userObj) => {
          return (
            <UserCard
              name={userObj.name}
              email={userObj.email}
              phone={userObj.phone}
              imgURL={userObj.imgURL}
              key={userObj.id}
              id={userObj.id}
            />
          );
        })}
      </Container>
    </div>
  );
};

export default App;
