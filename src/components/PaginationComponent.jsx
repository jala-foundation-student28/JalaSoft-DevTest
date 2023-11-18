import { useState } from "react";
import { useContext } from "react";
import { MainContext } from "./context/MainContext";
const PaginationComponent = () => {
  // use CONTEXT to access to the pagination functions
  const { hanldePage1, hanldePage2 } = useContext(MainContext);
  // set active on 1 as default for pagination action
  const [activeset, setActiveset] = useState(1);
  return (
    <nav aria-label="...">
      <ul className="pagination pagination-lg">
        <li
          className={`page-item ${activeset == 1 ? "active" : ""}`}
          aria-current="page"
        >
          <button
            onClick={() => hanldePage1(setActiveset)}
            className="page-link"
          >
            1
          </button>
        </li>
        <li className={`page-item ${activeset == 2 ? "active" : ""}`}>
          <button
            onClick={() => hanldePage2(setActiveset)}
            className="page-link"
          >
            2
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default PaginationComponent;
