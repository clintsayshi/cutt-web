const initial = {
  posts: [],
};

const postsReducer = (state = initial, action) => {
  switch (action.type) {
    case "ADD_POST":
      return {
        ...state,
        posts: [action.payload, ...state.posts],
      };
    default:
      return {
        ...state,
      };
  }
};

export default postsReducer;
