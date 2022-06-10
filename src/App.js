import Navigation from "./componets/header/Navigation";
import Container from "./componets/main/Container";
import Login from "./componets/user/Login";
import "./css/styles.css";

function App() {
  return (
    <div>
      <Login />
      <Navigation/>
      <Container/>
    </div>
  );
}

export default App;
