const initialState = {
  loggedin: false,
  modal: false,
};

export default function actionsReducer(state = initialState, action) {
  switch (action.type) {
    case "MODAL_OPEN":
      return {
        ...state,
        modal: action.payload,
      };
    default:
      return { ...state };
  }
}
