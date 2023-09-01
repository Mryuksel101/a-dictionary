import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setMeaning } from "../../SearchBar/actions/searchBarActions.js";
function SearchinMeaning(props) {
  const dispatch = useDispatch();
  useEffect(() => {
    fetch("https://sozluk.gov.tr/gts?ara=kelime").then((response) => {
      console.log(response.json());
      dispatch(setMeaning("deneme"));
    });
  });
  return <h1> Kelime aranıyor </h1>;
}

export default SearchinMeaning;
