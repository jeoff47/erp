import React from 'react'

const Table = ({columns, className="",...props}) => {
  return (
    <div className={className}>
      <table className='min-w-full table-auto border-collapse border border-gray-300 rounded-lg'>
        <thead>
          <tr className="bg-gray-100">
            {columns.map((columns,index)=>(
              <th key={index} className="px-4 py-2 text-left font-semibold text-gray-700 border-b">
                {columns.header}
                </th>
            ))}
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>body</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default Table