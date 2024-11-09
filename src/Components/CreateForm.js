import { useState } from "react";
import { Form, Button } from "react-bootstrap";

const CreateForm = () => {
  // these state gets updated on typing (onChange)
  var [nameText, setNameText] = useState("");
  var [emailText, setEmailText] = useState("");
  var [PhoneText, setPhoneText] = useState("");

  // these state gets updated on form submissiob (onSubmit)
  var [name, setName] = useState("");
  var [email, setEmail] = useState("");
  var [phone, setPhone] = useState("");

  // this state gets updated on form submissiob (onSubmit)

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

  const submitHandler = (e) => {
    e.preventDefault();
    setName(nameText);
    setEmail(emailText);
    setPhone(PhoneText);
  };

  return (
    <div>
      <h2>{name}</h2>
      <p>{email}</p>
      <p>{phone}</p>
      <Form onSubmit={submitHandler}>
        <Form.Group>
          <Form.Control
            onChange={nameChangehandler}
            type="text"
            placeholder="Enter your name : "
          />
        </Form.Group>
        <Form.Group>
          <Form.Control
            onChange={emailChangehandler}
            type="email"
            placeholder="Enter Email : "
          />
        </Form.Group>
        <Form.Group>
          <Form.Control
            onChange={phoneChangehandler}
            type="text"
            placeholder="Enter phone : "
          />
        </Form.Group>
        <Button type="submit" variant="primary">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default CreateForm;
