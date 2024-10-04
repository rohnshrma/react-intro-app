import React from "react";

// const Card = (props) => {
//   console.log(props);
//   return (
//     <div className="card">
//       <h3>{props.name}</h3>
//       <p>{props.phone}</p>
//       <p>{props.email}</p>
//     </div>
//   );
// };

const Card = ({ name, phone, email }) => {
  return (
    <div className="card">
      <h3>{name}</h3>
      <p>{phone}</p>
      <p>{email}</p>
    </div>
  );
};

export default Card;
