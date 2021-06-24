import { NewRoom } from "./pages/NewRoom";
import { Home } from "./pages/Home";

function App() {
  console.log(process.env.REACT_APP_API_KEY);
  return (
    <NewRoom />
  );
}

export default App;
