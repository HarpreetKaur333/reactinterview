import { useState } from "react";

function ThemeToggleApp() {
  // Step 1: State for theme
  const [theme, setTheme] = useState("light"); // Default theme is 'light'

  // Step 2: Function to toggle theme
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  // Step 3: Dynamic styles based on theme
  const appStyles = {
    backgroundColor: theme === "light" ? "#ffffff" : "#333333", // Light: White, Dark: Dark Gray
    color: theme === "light" ? "#000000" : "#ffffff", // Light: Black text, Dark: White text
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    transition: "all 0.3s ease", // Smooth transition for theme change
  };

  return (
    <div style={appStyles}>
      <h1>{theme === "light" ? "Light Theme" : "Dark Theme"}</h1>
      <button onClick={toggleTheme}>
        Switch to {theme === "light" ? "Dark" : "Light"} Theme
      </button>
    </div>
  );
}

export default ThemeToggleApp;
