import "./header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStopwatch } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  return (
    <header>
      <div>
        <FontAwesomeIcon icon={faStopwatch} style={{ color: "#5442c0" }} />
      </div>
      <h1>Counter V2</h1>
    </header>
  );
};

export default Header;
