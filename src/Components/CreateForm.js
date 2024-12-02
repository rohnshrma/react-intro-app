// Import necessary modules and components
import { useReducer, useState } from "react"; // Import useState hook for managing state
import { Form, Button, Container } from "react-bootstrap"; // Import components from React Bootstrap
import { v4 as uuidv4 } from "uuid"; // Import the uuidv4 function to generate unique IDs

const formReducer = (previousState, action) => {
  return initialState;
};

const initialState = {
  name: "", // Default value for the name field
  email: "", // Default value for the email field
  phone: "", // Default value for the phone field
  URL: "", // Default value for the URL field
};

// Define the CreateForm component
const CreateForm = (props) => {
  const [formState, dispatch] = useReducer(formReducer, initialState);

  console.log(formState);

  // Handler for name input changes
  const nameChangehandler = (e) => {
    const nameInput = e.target.value; // Get the value of the name input field

    dispatch({ type: "NAME_CHANGE" });
  };

  // Handler for email input changes
  const emailChangehandler = (e) => {
    const emailInput = e.target.value; // Get the value of the email input field
  };

  // Handler for phone input changes
  const phoneChangehandler = (e) => {
    const phoneInput = e.target.value; // Get the value of the phone input field
  };

  // Handler for URL input changes
  const urlChangehandler = (e) => {
    const urlInput = e.target.value; // Get the value of the URL input field
  };

  // Handler for form submission
  const submitHandler = (e) => {
    e.preventDefault(); // Prevent the default form submission behavior

    // Create a new user object with a unique ID and the current form data
    const userObj = {
      id: uuidv4(), // Generate a unique ID
      ...formState, // Include all form data fields in the object
    };

    props.onAdd(userObj); // Call the onAdd function passed as a prop to add the user
  };

  // Render the form component
  return (
    <Container className="my-3 createform">
      {/* Bootstrap container for styling */}
      <h2>Add New User</h2> {/* Form heading */}
      <Form onSubmit={submitHandler}>
        {/* Handle form submission */}
        <Form.Group className="my-3">
          {/* Group for the name input */}
          <Form.Control
            onChange={nameChangehandler} // Call nameChangehandler on input change
            type="text" // Input type is text
            placeholder="Enter your name : " // Placeholder text
          />
        </Form.Group>
        <Form.Group className="my-3">
          {/* Group for the email input */}
          <Form.Control
            onChange={emailChangehandler} // Call emailChangehandler on input change
            type="email" // Input type is email
            placeholder="Enter Email : " // Placeholder text
          />
        </Form.Group>
        <Form.Group className="my-3">
          {/* Group for the phone input */}
          <Form.Control
            onChange={phoneChangehandler} // Call phoneChangehandler on input change
            type="text" // Input type is text
            placeholder="Enter phone : " // Placeholder text
          />
        </Form.Group>
        <Form.Group className="my-3">
          {/* Group for the URL input */}
          <Form.Control
            onChange={urlChangehandler} // Call urlChangehandler on input change
            type="text" // Input type is text
            placeholder="Enter profile picture URL : " // Placeholder text
          />
        </Form.Group>
        <Button type="submit" variant="primary">
          {/* Submit button */}
          Submit
        </Button>
      </Form>
    </Container>
  );
};

export default CreateForm; // Export the CreateForm component for use in other files
