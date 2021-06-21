import { Button } from "./components/Button"

function App() {
  console.log(process.env.REACT_APP_API_KEY);
  return (
    <div>
      <Button />
      <Button />
    </div>
  );
}

export default App;
