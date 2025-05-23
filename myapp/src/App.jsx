import "./App.css";
import Axiosing from "./components/Axiosing";
import Fetching from "./components/Fetching";
import FetchingAsync from "./components/FetchingAsync";

function App() {
  return (
    <>
      <h1>hello myapp</h1>
      <Fetching />
      {/* <FetchingAsync/> */}
      <Axiosing/>
    </>
  );
}

export default App;
