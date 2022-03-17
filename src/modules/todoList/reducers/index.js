
   
import { ADDTODO, DELETETODO } from "../actions";

export default function todoList(state = [], action) {
  switch (action.type) {
    case ADDTODO:
      console.log(action);
      return [
        ...state,
        {
          id: action.id,
          title: action.title,
          description: action.description
        }
      ];
    case DELETETODO:
      const nextState = state.filter(todo => todo.id !== action.id);
      return nextState;
    default:
      return state;
  }
}