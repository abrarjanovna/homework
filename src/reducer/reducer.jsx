import ACTION_TYPES from "../constants/ACTION_TYPES";

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_TYPES.INCREMENT_RED:
      return {
        ...state,
        red: state.red + 1,
      };
    case ACTION_TYPES.DECREMENT_RED:
      return {
        ...state,
        red: state.red - 1,
      };
    case ACTION_TYPES.INCREMENT_GREEN:
      return {
        ...state,
        green: state.green + 1,
      };
    case ACTION_TYPES.DECREMENT_GREEN:
      return {
        ...state,
        green: state.green - 1,
      }
    case ACTION_TYPES.INCREMENT_BLUE:
      return {
        ...state,
        blue: state.blue + 1,
      };
    case ACTION_TYPES.DECREMENT_BLUE:
      return {
        ...state,
        blue: state.blue - 1,
      };
    default:
      throw new Error("Invalid action type:" + action.type);
  }
};

export default reducer;
