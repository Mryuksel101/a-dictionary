const initialState = { bodyStatus: "emty", response: "" };
function searchBarReducer(state = initialState, action) {
  if (action.type === "searchinMeaning") {
    return {
      bodyStatus: "searchinMeaning"
    };
  } else if (action.type === "showMeaning") {
    return {
      bodyStatus: "showMeaning",
      response: action.payload
    };
  }
  return state;
}

export default searchBarReducer;
