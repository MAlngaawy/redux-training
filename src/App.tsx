import "./App.css";
import { useAppDispatch, useAppSelector } from "./app/hooks";
import counterSlice, {
  incremented,
  incremented3,
} from "./features/counter/counter-slice";

function App() {
  const count = useAppSelector((state) => state.counter.value);
  const dispatch = useAppDispatch();

  const handleClick = () => {
    dispatch(incremented());
  };
  const handleClick3 = () => {
    dispatch(incremented3(3));
  };

  return (
    <div className="App">
      The current value is <strong>{count}</strong>
      <br />
      <button onClick={handleClick}>Increment</button>
      <button onClick={handleClick3}>Increment 3 </button>
    </div>
  );
}

export default App;
