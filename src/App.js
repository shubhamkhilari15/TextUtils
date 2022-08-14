// import About from "./components/About";
import { useState } from "react";
import Alert from "./components/Alert";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";

function App() {
  const [mode, setMode] = useState("light");
  const toggleDarkMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#023f40";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "WHITE";
    }
  };
  return (
    <>
      <Navbar
        title="TextUtils"
        about="About Us"
        mode={mode}
        toggleDarkMode={toggleDarkMode}
      />
    <Alert/>
      <div className="container">
        <TextForm mode={mode} />
        {/* <About/> */}
      </div>
    </>
  );
}

export default App;
