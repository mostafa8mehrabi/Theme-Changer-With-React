import "./App.css";
import useDarkMode from "./useDarkmode";

function App() {
  const [theme, toggleTheme] = useDarkMode();

  return (
    <div
      className="App"
      style={{
        background: theme === "dark" ? "#212121" : "#fff",
        transition: "0.2s all",
      }}
    >
      <button
        type="button"
        onClick={toggleTheme}
        style={{
          background: theme === "dark" ? "#D61C4E" : "#F24C4C",
          transition: "0.5s all",
        }}
      >
        Switch Theme
      </button>
    </div>
  );
}

export default App;
