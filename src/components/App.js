import React, { useState } from "react";
import "./App.css"; // Assuming your CSS file is named App.css
import ShoppingList from "./components/ShoppingList"; // Adjust the import according to your file structure

const items = [
  { id: 1, name: "Apples", category: "Produce" },
  { id: 2, name: "Milk", category: "Dairy" },
  { id: 3, name: "Cake", category: "Dessert" },
  // Add more items as needed
];

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleDarkModeToggle = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  return (
    <div className={`App ${isDarkMode ? "dark" : "light"}`}>
      <header>
        <h1>Grocery List</h1>
        <button onClick={handleDarkModeToggle}>
          {isDarkMode ? "Light Mode" : "Dark Mode"}
        </button>
      </header>
      <ShoppingList items={items} />
    </div>
  );
}

export default App;
