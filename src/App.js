import "./App.css";
import Dashboard from "./components/Dashboard";
import Review from "./components/Review";
import Arating from "./components/Arating";
import Visitors from "./components/Visitors";
import Analysis from "./components/Analysis";

function App() {
  return (
    <div className="App">
      <Dashboard />
      <Review />
      <Arating />
      <Analysis />
      <Visitors />
    </div>
  );
}

export default App;
