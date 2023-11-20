import { randomNumber } from "../../utils";

const INITIAL_STATE = {
  colors: ['white', 'black', 'red', 'green', 'blue', 'yellow'],
  index: 0,
};

export const reducer = (state = INITIAL_STATE, action: { type: string}) => {
  switch(action.type) {
    case 'NEXT_COLOR':
      return {
        ...state,
        index: state.index === 5 ? 1 : state.index +1
      }
      case 'PREVIOUS_COLOR': {
        return {
          ...state,
        index: state.index === 0 ? 5 : state.index -1
        }
      }
      case 'RANDOM_COLOR': {
        return {
          ...state,
          index: randomNumber(5)
        }
      }
    default:
  }
}