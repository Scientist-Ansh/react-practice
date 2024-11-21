import "./App.css";
import ButtonGroup from "./Components/ButtonGroup";

function App() {
  return (
    <>
      <h1>Button group example</h1>
      <div>
        <ButtonGroup>
          {/* <IconButton label={""} icon=""/> */}
          <div>button 2</div>
        </ButtonGroup>
        <ButtonGroup>
          <div>button 1</div>
          <div>button 2</div>
          <div>button 3</div>
          <div>button 4</div>
          <div>button 5</div>
        </ButtonGroup>
      </div>
    </>
  );
}

export default App;
