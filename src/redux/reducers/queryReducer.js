import { QUERY } from "../actions";

const initialState = {
  content: [],
};

const queryReducer = (state = initialState, action) => {
  switch (action.type) {
    case QUERY:
      return {
        ...state,
        content: action.payload,
      };
    default:
      return state;
  }
};

export default queryReducer;
