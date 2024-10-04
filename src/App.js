// component is a js function returning html
import "./App.css";
import Card from "./Components/Card";
import Header from "./Components/Header";
import users from "./data.js";

const App = () => {
  return (
    <div>
      <Header />

      <main>
        {
          <div className="cards">
            {users.length === 0 ? (
              <h2>No Users Found</h2>
            ) : (
              users.map((userObj) => {
                return (
                  <Card
                    name={userObj.name}
                    phone={userObj.phone}
                    email={userObj.email}
                    imgURL={userObj.imgURL}
                    key={userObj.id}
                  />
                );
              })
            )}
          </div>
        }{" "}
      </main>
    </div>
  );
};

export default App;
