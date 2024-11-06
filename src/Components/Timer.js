// import React, { useState } from "react";
// // Imports React and useState from the 'react' library.
// // React is the core library for building UI components, and useState is a React hook for managing state in a functional component.

// import { Button, Card } from "react-bootstrap";
// // Imports 'Button' and 'Card' components from the 'react-bootstrap' library,
// // which are pre-built UI components for creating buttons and cards in a responsive layout.

// const Timer = () => {
//   // Defines a functional component named 'Timer'. This component will return JSX that renders a timer with a button.

//   const [time, setTime] = useState(new Date().toLocaleTimeString());
//   // Declares a state variable 'time' and its setter function 'setTime', initialized with the current time.
//   // 'new Date().toLocaleTimeString()' gets the current time in a localized string format.

//   const showTimeHandler = () => {
//     setTime(new Date().toLocaleTimeString());
//   };
//   // Defines a function 'showTimeHandler' that, when called, updates the 'time' state with the current time.
//   // This will trigger a re-render of the component to display the updated time.

//   return (
//     <Card>
//       <Card.Header>Time : {time}</Card.Header>
//       {/* Renders a Bootstrap Card component with a header showing the current time from the 'time' state variable. */}
//       <Card.Body>
//         <Button variant="danger" type="button" onClick={showTimeHandler}>
//           Get Time
//         </Button>
//         {/* Renders a Bootstrap Button with a 'danger' variant (red color).
//         When clicked, it triggers the 'showTimeHandler' function, which updates the time displayed in the Card. */}
//       </Card.Body>
//     </Card>
//   );
//   // The JSX code above renders the structure of the Card with a button and the current time.
// };

// export default Timer;

// // Exports the 'Timer' component as the default export, so it can be imported and used in other files.

import React, { useState } from "react";
// Imports React and useState from the 'react' library.
// React is the core library for building UI components, and useState is a React hook for managing state in a functional component.

import { Button, Card } from "react-bootstrap";
// Imports 'Button' and 'Card' components from the 'react-bootstrap' library,
// which are pre-built UI components for creating buttons and cards in a responsive layout.

const Timer = () => {
  // Defines a functional component named 'Timer'. This component will return JSX that renders a timer with a button.

  const [time, setTime] = useState(new Date().toLocaleTimeString());
  // Declares a state variable 'time' and its setter function 'setTime', initialized with the current time.
  // 'new Date().toLocaleTimeString()' gets the current time in a localized string format.

  const showTimeHandler = () => {
    setTime(new Date().toLocaleTimeString());
  };

  setInterval(showTimeHandler, 1000);

  // Defines a function 'showTimeHandler' that, when called, updates the 'time' state with the current time.
  // This will trigger a re-render of the component to display the updated time.

  return (
    <Card>
      <Card.Header>Time : {time}</Card.Header>
      {/* Renders a Bootstrap Card component with a header showing the current time from the 'time' state variable. */}
      <Card.Body>
        {/* <Button variant="danger" type="button" onClick={showTimeHandler}>
          Get Time
        </Button> */}
        {/* Renders a Bootstrap Button with a 'danger' variant (red color). 
        When clicked, it triggers the 'showTimeHandler' function, which updates the time displayed in the Card. */}
      </Card.Body>
    </Card>
  );
  // The JSX code above renders the structure of the Card with a button and the current time.
};

export default Timer;
// Exports the 'Timer' component as the default export, so it can be imported and used in other files.
