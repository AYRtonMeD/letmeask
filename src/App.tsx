import { Home } from "./pages/Home";

function App() {
  console.log(process.env.REACT_APP_API_KEY);
  return (
    <Home />
  );
}

export default App;
