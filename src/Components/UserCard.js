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

const UserCard = ({ name, phone, email, imgURL }) => {
  return (
    <div className="user-card">
      <img src={imgURL} alt={name} />
      <h3>{name}</h3>
      <p>{phone}</p>
      <p>{email}</p>
    </div>
  );
};

export default UserCard;
