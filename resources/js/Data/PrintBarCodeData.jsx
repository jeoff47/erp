

const PrintBarCodeData = {
    columns: [
      
        { header: 'PRODUCT', accessor: 'name' },
        { header: 'QTY', accessor: 'qty' },
        { header: 'ACTION', accessor: 'action' }
      ],
      data: [
        { name: 'Base Unit 1', qty:4, action: 'Edit or delete' },
        { name: 'Base Unit 2', qty:4, action: 'Edit or delete' },
        { name: 'Base Unit 3', qty:4, action: 'Edit or delete' }
      ]
};

export default PrintBarCodeData