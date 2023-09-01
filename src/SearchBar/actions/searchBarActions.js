const searchWord = () => {
  return { type: "searchinMeaning" };
};
const setMeaning = (response) => {
  return {
    type: "showMeaning",
    payload: response
  };
};

export { searchWord, setMeaning };
