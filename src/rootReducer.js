import { v4 as uuidv4 } from "uuid";

const INITIAL_STATE = {
  todos: [],
};

function reducer(state = INITIAL_STATE, action) {
  if (action.type === "ADD_TODO") {
    return {
      ...state,
      todos: [...state.todos, { task: action.task, id: uuidv4() }],
    };
  }
 
  return state;
}

export default reducer;