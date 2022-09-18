import { useEffect, useState } from "react";

export default function FunctionalComp() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const [name, setName] = useState("");

  // It runs On every render
  useEffect(() => {
    console.log('It re-rendered');
  });

  // It runs On first render/mount only - componentDidMount Alternative

  useEffect(() => {
    console.log('It re-render on first mount/render only');
  }, []);

  // It runs On first render + Whenever dependency changes!- componentDidUpdate Alternative

    useEffect(() => {
      console.log(`The name changed:${name}`);

    }, [name]);

  // Follow the same rules,except this handles the unmounting on a component! - componentWillUnmount Alternative

  useEffect(() => {
    // window.addEventListener("resize", updateWindowWidth);
    // console.log(`The name changed:${name}`);
    window.removeEventListener("resize",updateWindowWidth);

    return () => {
      // When component unmounts,this cleanup code runs...
      // Cleanup...
      console.log("We unmounted");

      //   window.removeEventListener("resize", updateWindowWidth);
    };
  });

  const updateWindowWidth = () => {
    setWindowWidth(window.innerWidth);
  };

  return (
    <div className="App">
      <center>
        <h1>The useEffect hook</h1>
        <h2>The window width is :{windowWidth}</h2>

        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter a name"
        />
      </center>
    </div>
  );
}
