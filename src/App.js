import readXlsxFile from 'read-excel-file'
import './App.css';
import React, { useRef, useState } from 'react'

function App() {
  const ref = useRef(null)
  const [rows, setRows] = useState([])
  const handleChange = async (event) => {
    const file = ref.current.files[0]
    readXlsxFile(file).then(rows => {
      console.log(rows)
      setRows(rows)
    })
  }
  return (
    <div className="App">
      <input
        name="file"
        type="file"
        ref={ref}
        onChange={handleChange}
      />
      {
        rows.length > 0 &&
        <table>
          <tbody>
            {
              rows.map(row => (
                <tr>
                  {
                    row.map(field => (
                      <td>{field}</td>
                    ))
                  }
                </tr>
              ))
            }
          </tbody>
        </table>
      }
    </div>
  );
}

export default App;
