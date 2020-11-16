import React from 'react';
import ReactTable from 'react-table-6';
import 'react-table-6/react-table.css';

function Table() {
  const data = [{
    name: 'Ayaan',
    age: 26
  }, {
    name: 'Ahana',
    age: 22
  }, {
    name: 'Peter',
    age: 40
  }, {
    name: 'Virat',
    age: 30
  }, {
    name: 'Rohit',
    age: 32
  }, {
    name: 'Dhoni',
    age: 37
  }]
  const columns = [
 {
    Header: 'DATE',
    accessor: 'date'
  }, {
    Header: 'CUSTOMER NAME',
    accessor: 'customer name'
  },
  {
    Header: 'LEAD ORIGIN',
    accessor: 'lead origin'
  },
  {
    Header: 'SALESPERSON',
    accessor: 'salesperson'
  },
  {
    Header: 'LICENSE',
    accessor: 'license'
  },
  {
    Header: 'PRIVACY',
    accessor: 'privacy'
  },
  {
    Header: 'TEST DRIVE',
    accessor: 'test drive'
  },
  {
    Header: 'TRADE',
    accessor: 'trade'
  },
  {
    Header: 'VEHICLE',
    accessor: 'vehicle'
  },
  {
    Header: 'DEAL TYPE',
    accessor: 'deal type'
  },
  {
    Header: 'CREDIT',
    accessor: 'credit'
  }
]
  return (
    <div>
      <ReactTable
        data={data}
        columns={columns}
        defaultPageSize={2}
        pageSizeOptions={[3, 6]}
      />
    </div>
  )
}

export default Table
