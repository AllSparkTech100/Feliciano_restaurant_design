import 'bootstrap/dist/css/bootstrap.min.css';
import Pages from "./Pages/Pages";
import "./app.scss"
import NavComp from "./Components/NavComp";

function App() {
  return (
    <>
      <NavComp />
      <Pages />
    </>
  );
}

export default App;
