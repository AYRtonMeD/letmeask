import { Home } from "./pages/home";

function App() {
  console.log(process.env.REACT_APP_API_KEY);
  return (
    <Home />
  );
}

export default App;
