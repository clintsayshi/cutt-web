const initialState = {
  loggedin: false,
  modal: false,
  signup: {
    username: null,
    password: null,
    status: false,
  },
};

export default function actionsReducer(state = initialState, action) {
  switch (action.type) {
    case "MODAL_OPEN":
      return {
        ...state,
        modal: action.payload,
      };
    case "SIGN_UP":
      return {
        ...state,
        signup: action.payload,
      };
    default:
      return { ...state };
  }
}
