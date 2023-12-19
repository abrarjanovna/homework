import { useReducer } from "react";
import "../index.css";
import ACTION_TYPES from "../constants/ACTION_TYPES";
import reducer from "../reducer/reducer";

const initialState = {
  red: 0,
  green: 0,
  blue: 0,
};

const Main = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  // console.log(state);
  const { red, green, blue } = state;
  return (
    <div className="container">
      <div
        className="main"
        style={{ backgroundColor: `rgb(${red}, ${green},${blue})` }}
      ></div>
      <div className="box">
        <div>
          <p> RED: {red}</p>
          <button
            className="btn red"
            onClick={() => dispatch({ type: ACTION_TYPES.INCREMENT_RED })}
          >
            +
          </button>
          <button
            className="btn red"
            onClick={() => dispatch({ type: ACTION_TYPES.DECREMENT_RED })}
          >
            -
          </button>
        </div>
        <div>
          <p> GREEN: {green}</p>
          <button
            className="btn green"
            onClick={() => dispatch({ type: ACTION_TYPES.INCREMENT_GREEN })}
          >
            +
          </button>
          <button
            className="btn green"
            onClick={() => dispatch({ type: ACTION_TYPES.DECREMENT_GREEN })}
          >
            -
          </button>
        </div>
        <div>
          <p> BLUE: {blue}</p>
          <button
            className="btn blue"
            onClick={() => dispatch({ type: ACTION_TYPES.INCREMENT_BLUE })}
          >
            +
          </button>
          <button
            className="btn blue"
            onClick={() => dispatch({ type: ACTION_TYPES.DECREMENT_BLUE })}
          >
            -
          </button>
        </div>
      </div>
    </div>
  );
};

export default Main;
