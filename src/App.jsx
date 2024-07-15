import { useState, useEffect } from "react";
import "./App.css";

function App() {
  console.log("rendirezar")

  const [count, setCount] = useState(0);

  const [checked, setchecked] = useState(false);

  useEffect(() => {
    // effect , osea despues del effect te muestra el valor actual
    console.log(
      "%c effect " + count,
      "background: blue; color: white; padding: 2px;"
    );
    document.title = "actions: " + count;
    return () => {
      // cleanup , osea antes del effect te muestra el valor anterior
      console.log(
        "%c cleanup " + count,
        "background: yellow; color: black; padding: 2px;"
      );
      document.title = "React App";
    };
  }, [count]); // si no le pasas el array vacio se ejecuta cada vez que se renderiza el componente

  return (
    <>
      <div>
        <label htmlFor="">
        my checkbox
          <input
            type="checkbox"
            className="checkbox-primary checkbox"
            value={checked}
            onChange={(e) => setchecked(e.target.checked)}
          />
        </label>
      </div>

      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
    </>
  );
}

export default App;
