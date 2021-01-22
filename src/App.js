import Counters from "./components/Counters"; 
import CounterContextProvider from "./context/CounterContext"; 
import Navbar from "./components/Navbar";


function App() {
  return (
    <CounterContextProvider>
      <Navbar />
      <h3 className="text-center">Counter App</h3>
      <Counters />
    </CounterContextProvider>
  );
}

export default App;
