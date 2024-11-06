import { useState } from "react";
import { Form, Button } from "react-bootstrap";

const CreateForm = () => {
  // this state gets updated on typing (onChange)
  var [nameText, setNameText] = useState("");

  // this state gets updated on form submissiob (onSubmit)
  var [name, setName] = useState("");

  const changehandler = (e) => {
    nameText = e.target.value;
    setNameText(nameText);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    setName(nameText);
  };

  return (
    <div>
      <h2>{name}</h2>
      <Form onSubmit={submitHandler}>
        <Form.Group>
          <Form.Control
            onChange={changehandler}
            type="text"
            placeholder="Enter your name : "
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
