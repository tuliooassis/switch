import { useState } from "react";
import "./App.css";
import { Switch } from "./Switch";

function App() {
  const [value, setValue] = useState("list");
  const [disabled, setDisabled] = useState(false);
  const [theme, setTheme] = useState("white");

  return (
    <div className="App">
      <header className="App-header">
        <div
          style={{ height: "100px", display: "flex", flexDirection: "column" }}
        >
          <label>
            Checked?
            <input
              type="checkbox"
              onChange={(event) =>
                setValue(event.target.checked ? "grid" : "list")
              }
            />
          </label>

          <label>
            Disabled?
            <input
              type="checkbox"
              onChange={(event) => setDisabled(event.target.checked)}
            />
          </label>

          <label>
            Dark/White? (TODO)
            <input
              type="checkbox"
              onChange={(event) =>
                setTheme(event.target.checked ? "dark" : "white")
              }
            />
          </label>
        </div>

        <Switch state={value} color={theme} disabled={disabled} />
      </header>
    </div>
  );
}

export default App;
