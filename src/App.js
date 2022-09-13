import readXlsxFile from 'read-excel-file'
import './App.css';
import React, { useRef, useState } from 'react'

function App() {
  const ref = useRef(null)
  const [data, setData] = useState({ rows: [], errors: [] })

  const map = {
    'name': 'name',
    'age': 'age',
    'address': 'address'
  }

  const handleChange = async (event) => {
    const file = ref.current.files[0]
    readXlsxFile(file, { map }).then(rows => {
      setData(rows)
    })
  }

  const Row = ({ row }) =>
  (
    <tr>
      <td>{row.name}</td>
      <td>{row.age}</td>
      <td>{row.address}</td>
    </tr>
  )
  return (
    <div className="App">
      <input
        name="file"
        type="file"
        ref={ref}
        onChange={handleChange}
      />

      <table>
        <tbody>
          {
            data.rows.map(row => <Row key={row.name} row={row} />)
          }
        </tbody>
      </table>
    </div>
  );
}

export default App;
