import 'handsontable/dist/handsontable.full.css';
import './App.css';
import { HotTable } from "@handsontable/react";
import Handsontable from 'handsontable';

// const hotData = [
//   ["", "Tesla", "Volvo", "Toyota", "Honda"],
//   ["2020", 10, 11, 12, "=(B2+B3)"],
//   ["2021", 20, 11, 14, 13],
//   ["2022", 30, 15, 12, 13],
// ];
const hotData = Handsontable.helper.createSpreadsheetData(6, 10);
function App() {
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
    <div>
      <HotTable
        data={hotData}
        colHeaders={true}
        rowHeaders={true}
        height="auto"
        licenseKey="non-commercial-and-evaluation"
      />
    </div>
  );
}

export default App;
