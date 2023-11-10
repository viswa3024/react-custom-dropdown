import { useState } from "react";
import SelectComponent from "./SelectComponent";
import "./styles.css";

const options = [
  { key: 1, value: "Test 1" },
  { key: 2, value: "Test 2" },
  { key: 3, value: "Test 3" },
  { key: 4, value: "Test 4" },
  { key: 5, value: "Test 2" },
  { key: 6, value: "Test 3" },
  { key: 7, value: "Test 4" },
  { key: 8, value: "Test 3" },
  { key: 9, value: "Test 4" },
  { key: 10, value: "Test 2" },
  { key: 11, value: "Test 3" },
  { key: 12, value: "Test 4" },
  { key: 13, value: "Test 3" },
  { key: 14, value: "Test 4" },
  { key: 15, value: "Test 2" },
  { key: 16, value: "Test 3" },
  { key: 17, value: "Test 4" },
  { key: 18, value: "Test 3" },
  { key: 19, value: "Test 4" },
  { key: 20, value: "Test 2" },
  { key: 21, value: "Test 3" },
  { key: 22, value: "Test 4" },
  { key: 23, value: "Test 3" },
  { key: 24, value: "Test 4" },
  { key: 25, value: "Test 2" },
  { key: 26, value: "Test 3" },
  { key: 27, value: "Test 4" },
  { key: 28, value: "Test 3" },
  { key: 29, value: "Test 4" },
  { key: 30, value: "Test 2" },
  { key: 31, value: "Test 3" },
  { key: 32, value: "Test 4" },
  { key: 33, value: "Test 3" },
  { key: 34, value: "Test 4" },
  { key: 35, value: "Test 2" },
  { key: 36, value: "Test 3" },
  { key: 37, value: "Test 4" },
  { key: 38, value: "Test 3" },
  { key: 39, value: "Test 4" },
  { key: 40, value: "Test 2" },
  { key: 41, value: "Test 3" },
  { key: 42, value: "Test 4" },
  { key: 43, value: "Test 3" },
  { key: 44, value: "Test 4" },
  { key: 45, value: "Test 2" },
  { key: 46, value: "Test 3" },
  { key: 47, value: "Test 4" },
  { key: 48, value: "Test 3" },
  { key: 49, value: "Test 4" },
  { key: 50, value: "Test 2" },
  { key: 51, value: "Test 3" },
  { key: 52, value: "Test 4" }
];

function App() {

  const [selectedOption, setSelectedOption] = useState("");


  return (
    <div className="App">
      <h1>Custom Dropdown</h1>
      <SelectComponent
        options={options}
        onChange={(item) => setSelectedOption(item)}
        selectedKey={selectedOption}
        placeholder={"type to search"}
      />
    </div>
  );
}

export default App;
