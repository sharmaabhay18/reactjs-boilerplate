import Types from "utils/types";

export default (state = {}, action) => {
  switch (action.type) {
    case Types.TEST_ACTION:
      return {
        result: action.payload,
      };
    default:
      return state;
  }
};
