import * as actiontypes from ".actiontypes";

const initial_state = { counter: 0 };

const reducer = (state = initial_state, action) => {
  switch (action.type) {
    case actiontypes.INCREASE_ONE:
      return {
        ...state,
        counter: state.counter + 1,
      };
    case actiontypes.INCREASE_FIVE:
      return {
        ...state,
        counter: state.counter + 5,
      };
    case actiontypes.RESET:
      return {
        ...state,
        counter: 0,
      };
    case actiontypes.DECREASE_FIVE:
      return {
        ...state,
        counter: state.counter - 5,
      };
    case actiontypes.ONE:
      return {
        ...state,
        counter: state.counter - 1,
      };
    default:
      return state;
  }
};
export default reducer;
