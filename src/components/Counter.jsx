import { useDispatch, useSelector } from "react-redux";
import {
  decrement,
  increment,
  incrementByValue,
} from "../redux/features/counter/counterSlice";

const Counter = () => {
  const { count } = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  // console.log(count);

  return (
    <div>
      <button
        className="bg-green-500 p-3 rounded-lg text-white font-bold mb-4"
        onClick={() => dispatch(increment())}
      >
        Increment
      </button>
      <br />
      <button
        className="bg-green-500 p-3 rounded-lg text-white font-bold mb-4"
        onClick={() => dispatch(incrementByValue(3))}
      >
        Increment By 3
      </button>
      <div className="text-xl font-semibold">{count}</div>
      <button
        className="bg-red-500 p-3 rounded-lg text-white font-bold mt-4"
        onClick={() => dispatch(decrement())}
      >
        Decrement
      </button>
    </div>
  );
};

export default Counter;
