import "./App.css";
import { useAppDispatch, useAppSelector } from "./app/hooks";
import counterSlice, { incremented } from "./features/counter/counter-slice";

function App() {
  const count = useAppSelector((state) => state.counter.value);
  const dispatch = useAppDispatch();

  const handleClick = () => {
    dispatch(incremented());
  };

  return (
    <div className="App">
      The current value is <strong>{count}</strong>
      <br />
      <button onClick={handleClick}>Increment</button>
    </div>
  );
}

export default App;
