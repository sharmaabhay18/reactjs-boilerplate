import Types from "utils/types";

export const exampleAction = () => (dispatch) => {
  dispatch({
    type: Types.TEST_ACTION,
    payload: "result",
  });
};
