const initial = {
  name: "",
  images: null,
};

export default function postReducer(state = initial, action) {
  switch (action.type) {
    case "POST_NAME":
      return {
        ...state,
        name: action.name,
      };
    case "POST_IMAGES":
      return {
        ...state,
        images: action.images,
      };
    case "POST_UPDATE":
      return {
        ...state,
        images: action.payload.media,
        name: action.payload.name,
      };
    default:
      return {
        ...state,
      };
  }
}
