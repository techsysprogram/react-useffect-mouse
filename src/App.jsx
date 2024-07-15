import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [checked, setchecked] = useState(false);
  const [mousePosition_1, setmousePosition_1] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (!checked) return;

    const onMouseMove = (e) => {
      setmousePosition_1({ x: e.clientX, y: e.clientY });
    }

    console.log("rendirezar");

    console.log("addEvent mousemove");
    window.addEventListener("mousemove", onMouseMove);

    return () => {
      console.log("removeEvent mousemove");
      window.removeEventListener("mousemove", onMouseMove);
    };
  }, [checked]);

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
      <pre>{JSON.stringify(mousePosition_1, null, 4)}</pre>
    </>
  );
}

export default App;
