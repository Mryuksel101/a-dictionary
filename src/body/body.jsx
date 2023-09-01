import { useSelector } from "react-redux";
import SearchinMeaning from "./components/searchinMeaning.jsx";
function Body() {
  const bodyStatus = useSelector((state) => state.bodyStatus);
  const response = useSelector((state) => state.response);
  if (bodyStatus === "") {
    return <h1> Hoş Geldin </h1>;
  } else if (bodyStatus === "searchinMeaning") {
    return <SearchinMeaning />;
  } else if (bodyStatus === "showMeaning") {
    return <h1> Kelime bulundu {response} </h1>;
  }
}

export default Body;
