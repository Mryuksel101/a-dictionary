import { searchWord } from "./actions/searchBarActions";
function handleChange(event, set) {
  set(event.target.value);
}

function handleKeyDown(event, word, dispatch) {
  console.log(event.key);
  if (event.key === "Enter") {
    console.log("basilan:" + word);
    dispatch(searchWord());
  }
}

export { handleChange, handleKeyDown };
