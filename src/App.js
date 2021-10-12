import 'handsontable/dist/handsontable.full.css';
import './App.css';
import React, { useState } from 'react';
import { HotTable } from "@handsontable/react";
import Handsontable from 'handsontable';

// const hotData = [
//   ["", "Tesla", "Volvo", "Toyota", "Honda"],
//   ["2020", 10, 11, 12, "=(B2+B3)"],
//   ["2021", 20, 11, 14, 13],
//   ["2022", 30, 15, 12, 13],
// ];
// const hotData = Handsontable.helper.createSpreadsheetData(6, 10);
function App() {
  const [settings, setSettings] = useState(() => {
    const initialState = {
      data: Handsontable.helper.createSpreadsheetData(15, 20),
      height: 220,
      licenseKey: "non-commercial-and-evaluation",
    };

    return initialState;
  });

  const handleChange = (setting, states) => (event) => {
    setSettings((prevState) => ({
      ...prevState,
      [setting]: states[event.target.checked ? 1 : 0],
    }));
  };
  return (
    // <div id="hot-app">
    //   <HotTable
    //     data={hotData}
    //     colHeaders={true}
    //     rowHeaders={true}
    //     width="600"
    //     height="300"
    //   />
    // </div>
    // <div>
    //   <HotTable
    //     data={hotData}
    //     colHeaders={true}
    //     rowHeaders={true}
    //     height="auto"
    //     licenseKey="non-commercial-and-evaluation"
    //   />
    // </div>
    <div>
      <div className="controllers">
        <label>
          <input
            onChange={handleChange("fixedRowsTop", [0, 2])}
            type="checkbox"
          />
          Add fixed rows
        </label>
        <br />

        <label>
          <input
            onChange={handleChange("fixedColumnsLeft", [0, 2])}
            type="checkbox"
          />
          Add fixed columns
        </label>
        <br />

        <label>
          <input
            onChange={handleChange("rowHeaders", [false, true])}
            type="checkbox"
          />
          Enable row headers
        </label>
        <br />

        <label>
          <input
            onChange={handleChange("colHeaders", [false, true])}
            type="checkbox"
          />
          Enable column headers
        </label>
        <br />
      </div>

      <HotTable root="hot" settings={settings} />
    </div>
  );
}

export default App;
