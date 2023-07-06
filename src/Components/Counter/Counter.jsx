import { useEffect } from "react";
import "./counter.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
const Counter = (props) => {
  const add = () => {
    const newTab = [...props.count];
    newTab.splice(props.index, 1, props.value + 1);
    props.setCount(newTab);
  };
  const sub = () => {
    const newTab = [...props.count];
    newTab.splice(props.index, 1, props.value - 1);
    props.setCount(newTab);
  };

  const reset = () => {
    const newTab = [...props.count];
    newTab.splice(props.index, 1, 0);
    props.setCount(newTab);
  };

  return (
    <section>
      <div className="counter">
        {props.value !== 0 ? (
          <button onClick={sub} className={props.value === 0 ? "hidden" : ""}>
            <FontAwesomeIcon icon={faMinus} />
          </button>
        ) : (
          <button className="ghost"></button>
        )}
        <div>{props.value}</div>
        <button onClick={add}>
          <FontAwesomeIcon icon={faPlus} />
        </button>
      </div>
      <button onClick={reset}>Reset</button>
    </section>
  );
};

export default Counter;
