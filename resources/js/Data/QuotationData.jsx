
const QuotationData = {
    columns: [
        { header: 'REFERENCE', accessor: 'reference' },
        { header: 'CUDTOMER', accessor: 'customerName' },
        { header: 'WAREHOUSE', accessor: 'warehouseName' },
        { header: 'Status', accessor: 'status' },
        { header: 'GRAND TOTAL', accessor: 'grandtotal' },
        { header: ' CREATED ON', accessor: 'CreatedOn' },
        { header: 'ACTION', accessor: 'action' }
      ],
      data: [
        { reference: 11111, customerName:'john', warehouse: 'Warehouse 1',status:'pending', grandtotal: '1', CreatedOn: '16:00 24-09-2025', action: 'view downloadpdf createSale edit delete' },
        { reference: 11111, customerName:'john', warehouse: 'Warehouse 1',status:'pending', grandtotal: '1', CreatedOn: '16:00 24-09-2025', action: 'view downloadpdf createSale edit delete' },
        { reference: 11111, customerName:'john', warehouse: 'Warehouse 1',status:'pending', grandtotal: '1', CreatedOn: '16:00 24-09-2025', action: 'view downloadpdf createSale edit delete' },
      ]
}


export default QuotationData