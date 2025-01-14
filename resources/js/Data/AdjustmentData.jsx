

const AdjustmentData = {
    columns: [
        { header: 'REFERENCE', accessor: 'id' },
        { header: 'WAREHOUSE', accessor: 'name' },
        { header: ' TOTAL PRODUCT', accessor: 'TotalProduct' },
        { header: ' CREATED ON', accessor: 'CreatedOn' },
        { header: 'ACTION', accessor: 'action' }
      ],
      data: [
        { id: 1, name: 'Warehouse 1', Totalproduct: '1', CreatedOn: '16:00 24-09-2025', action: 'view edit delete' },
        { id: 1, name: 'Warehouse 2', Totalproduct: '2', CreatedOn: '16:00 24-09-2025', action: 'view edit delete' },
        { id: 1, name: 'Warehouse 3', Totalproduct: '3', CreatedOn: '16:00 24-09-2025', action: 'view edit delete' },
      ]
}

export default AdjustmentData