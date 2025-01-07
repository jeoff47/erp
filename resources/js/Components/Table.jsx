import React from 'react'

const Table = ({columns, data,className="",...props}) => {
  return (
    <div className={className}>
      <table className='min-w-full table-auto border-collapse border border-gray-300 rounded-lg'>
        <thead>
          <tr className="bg-black">
            {columns.map((columns,index)=>(
              <th key={index} className="px-4 py-2 text-left font-semibold text-white border-b">
                {columns.header}
                </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.length>0?(
            data.map((row,rowIndex)=>(
              <tr key={rowIndex} className={`${rowIndex % 2 === 0 ? 'bg-white' : 'bg-gray-100'} 
              hover:bg-blue-50`}>
              {columns.map((column, colIndex) => (
                <td key={colIndex} className="px-4 py-2 border-b">
                  {/* Custom Render for Column */}
                  {column.render ? column.render(row[column.accessor], row) : row[column.accessor]}
                </td>
              ))}
            </tr>
            ))
          ):(
            <tr>
              <td colSpan={columns.length} className="px-4 py-2 text-center text-gray-500">
                No data available
              </td>
            </tr>) }
        </tbody>
      </table>
    </div>
  )
}

export default Table