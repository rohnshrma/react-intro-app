import { useState } from "react";
import { Form } from "react-bootstrap";

const CreateForm = () => {
  var [nameText, setName] = useState("");
  const changehandler = (e) => {
    nameText = e.target.value;
    setName(nameText);
  };

  return (
    <div>
      <h2>{nameText}</h2>
      <Form>
        <Form.Group>
          <Form.Control
            onChange={changehandler}
            type="text"
            placeholder="Enter your name : "
          />
        </Form.Group>
      </Form>
    </div>
  );
};

export default CreateForm;
