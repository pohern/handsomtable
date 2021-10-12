import 'handsontable/dist/handsontable.full.css';
import './App.css';
import React, { useState } from 'react';
import { HyperFormula } from "hyperformula";
import Handsontable from 'handsontable';
import { RendererComponent } from "./rendererComponent";
import { HotTable, HotColumn } from "@handsontable/react";
const options = {
  precisionRounding: 4,
  licenseKey: "gpl-v3",
};
// const hotData = [
//   ["", "Tesla", "Volvo", "Toyota", "Honda"],
//   ["2020", 10, 11, 12, 12],
//   ["2021", 20, 11, 14, 13],
//   ["2022", 30, 15, 12, 13],
// ];
// const hotData = [
//   ["10.26", null, "Sum", "=SUM(A:A)"],
//   ["20.12", null, "Average", "=AVERAGE(A:A)"],
//   ["30.01", null, "Median", "=MEDIAN(A:A)"],
//   ["40.29", null, "MAX", "=MAX(A:A)"],
//   ["50.18", null, "MIN", "=MIN(A1:A5)"],
// ];
const hotData=[['1', '3', '5', '=SUM(A1:C1)']]
const hfInstance = HyperFormula.buildFromArray(hotData, options);
const mySum = hfInstance.getCellValue({ col: 3, row: 0, sheet: 0 });
console.log(mySum);
// const hotData = Handsontable.helper.createSpreadsheetData(6, 10);
function App() {
  
  // const [settings, setSettings] = useState(() => {
  //   const initialState = {
  //     data: Handsontable.helper.createSpreadsheetData(15, 20),
  //     height: 220,
  //     licenseKey: "non-commercial-and-evaluation",
  //   };

  //   return initialState;
  // });

  // const handleChange = (setting, states) => (event) => {
  //   setSettings((prevState) => ({
  //     ...prevState,
  //     [setting]: states[event.target.checked ? 1 : 0],
  //   }));
  // };
  return (
    <>
      <p>{hotData[0]}</p>
    </>
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
    // <div>
    //   <div className="controllers">
    //     <label>
    //       <input
    //         onChange={handleChange("fixedRowsTop", [0, 2])}
    //         type="checkbox"
    //       />
    //       Add fixed rows
    //     </label>
    //     <br />

    //     <label>
    //       <input
    //         onChange={handleChange("fixedColumnsLeft", [0, 2])}
    //         type="checkbox"
    //       />
    //       Add fixed columns
    //     </label>
    //     <br />

    //     <label>
    //       <input
    //         onChange={handleChange("rowHeaders", [false, true])}
    //         type="checkbox"
    //       />
    //       Enable row headers
    //     </label>
    //     <br />

    //     <label>
    //       <input
    //         onChange={handleChange("colHeaders", [false, true])}
    //         type="checkbox"
    //       />
    //       Enable column headers
    //     </label>
    //     <br />
    //   </div>

    //   <HotTable root="hot" settings={settings} />
    // </div>
    // <HotTable data={hotData} licenseKey="non-commercial-and-evaluation">
    //   <HotColumn width={250}>
    //     <RendererComponent hot-renderer />
    //   </HotColumn>
    // </HotTable>
  );
}

export default App;
