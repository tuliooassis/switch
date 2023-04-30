import { useEffect, useRef } from "react";
import "./Switch.css";

export const Switch = ({ state, color, disabled }) => {
  const checkboxRef = useRef();

  useEffect(() => {
    checkboxRef.current.checked = state === "grid" ? true : false;
  }, [state]);

  return (
    <label className={color}>
      <input
        ref={checkboxRef}
        checked={state === "grid" ? true : false}
        className="checkbox"
        type="checkbox"
        disabled={disabled}
      />
      <span className="check">
        <span className="inner-check">
          <span className="square">
            <span className="line"></span>
            <span className="line"></span>
            <span className="line"></span>
            <span className="line"></span>
          </span>

          <span className="square-block">
            <span className="line"></span>
            <span className="line"></span>
            <span className="line"></span>
            <span className="line"></span>
          </span>
        </span>
      </span>
    </label>
  );
};
