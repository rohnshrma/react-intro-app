// component is a js function returning html
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Header from "./Components/Header";
import Counter from "./Components/Counter";
import Timer from "./Components/Timer";

const App = () => {
  return (
    <div>
      <Header />

      <main>
        {/* <Counter /> */}
        <Timer />
      </main>
    </div>
  );
};

export default App;
