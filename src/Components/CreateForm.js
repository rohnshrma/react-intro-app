import { useState } from "react";
import { Form, Button, Container } from "react-bootstrap";
import { v4 as uuidv4 } from "uuid";

const CreateForm = (props) => {
  // console.log(props);

  // these state gets updated on typing (onChange)
  var [nameText, setNameText] = useState("");
  var [emailText, setEmailText] = useState("");
  var [phoneText, setPhoneText] = useState("");
  var [URLText, setURLText] = useState("");

  const nameChangehandler = (e) => {
    const nameInput = e.target.value;
    setNameText(nameInput);
  };
  const emailChangehandler = (e) => {
    const emailInput = e.target.value;
    setEmailText(emailInput);
  };
  const phoneChangehandler = (e) => {
    const phoneInput = e.target.value;
    setPhoneText(phoneInput);
  };
  const urlChangehandler = (e) => {
    const urlInput = e.target.value;
    setURLText(urlInput);
  };

  const submitHandler = (e) => {
    e.preventDefault();

    const userObj = {
      id: uuidv4(),
      name: nameText,
      email: emailText,
      phone: phoneText,
      imgURL: URLText,
    };

    props.onAdd(userObj);
  };

  return (
    <Container className="my-3 createform">
      <h2>Add New User</h2>
      <Form onSubmit={submitHandler}>
        <Form.Group className="my-3">
          <Form.Control
            onChange={nameChangehandler}
            type="text"
            placeholder="Enter your name : "
          />
        </Form.Group>
        <Form.Group className="my-3">
          <Form.Control
            onChange={emailChangehandler}
            type="email"
            placeholder="Enter Email : "
          />
        </Form.Group>
        <Form.Group className="my-3">
          <Form.Control
            onChange={phoneChangehandler}
            type="text"
            placeholder="Enter phone : "
          />
        </Form.Group>
        <Form.Group className="my-3">
          <Form.Control
            onChange={urlChangehandler}
            type="text"
            placeholder="Enter profile picture URL : "
          />
        </Form.Group>
        <Button type="submit" variant="primary">
          Submit
        </Button>
      </Form>
    </Container>
  );
};

export default CreateForm;
