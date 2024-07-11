import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import './App.css'

const data=[
  {
  id:1,
  name: 'Bruno',
  code: 2024,
  category: 'SEG-AUTOMOTIVE'
},
{
  id:2,
  name: 'Bruno',
  code: 2024,
  category: 'SEG-AUTOMOTIVE'
}
]

function App() {
  const [count, setCount] = useState(0)
  const [bruno, setBruno] = useState(data);
  const columns = [
    {field: 'code', header: 'Code'},
    {field: 'name', header: 'Name'},
    {field: 'category', header: 'Category'},
];
  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Calculadora</h1>
      <div className="card bg-white">
            <DataTable value={bruno} tableStyle={{ minWidth: '50rem' }}>
            {columns.map((col, i) => (
                    <Column key={col.field} field={col.field} header={col.header} />
                ))}
            </DataTable>
        </div>

      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
    </>
  )
}

export default App
