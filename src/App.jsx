import { useState } from "react";
import "./App.css";
import Header from "./Components/Header/Header";
import Counters from "./Components/Counters/Counters";
import Footer from "./Components/Footer/Footer";

function App() {
  const [count, setCount] = useState([0]);

  return (
    <>
      <Header />
      <Counters count={count} setCount={setCount} />
      <Footer />
    </>
  );
}

export default App;
