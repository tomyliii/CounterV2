import "./counters.css";
import Counter from "../Counter/Counter";
import { useEffect } from "react";
const Counters = (props) => {
  const nbOfCounter = [...props.count];
  const addCounter = () => {
    nbOfCounter.push(0);

    props.setCount(nbOfCounter);
  };
  const removeCounter = () => {
    nbOfCounter.pop();

    props.setCount(nbOfCounter);
  };

  return (
    <main>
      <section>
        <button
          onClick={addCounter}
          className={props.count.length === 3 ? "hidden" : ""}
        >
          Add counter
        </button>
        <button
          onClick={removeCounter}
          className={props.count.length === 1 ? "hidden" : ""}
        >
          Remove counter
        </button>
      </section>
      <section>
        {nbOfCounter.map((counter, index) => {
          return (
            <Counter
              key={index}
              index={index}
              setCount={props.setCount}
              value={counter}
              count={props.count}
            />
          );
        })}
      </section>
    </main>
  );
};

export default Counters;
