

const BrandsData = {
        columns: [
          { header: 'Product ID', accessor: 'id' },
          { header: 'BRAND NAME', accessor: 'name' },
          { header: 'PRODUCT COUNT', accessor: 'brandCount' },
          { header: 'ACTION', accessor: 'action' }
        ],
        data: [
          { id: 1, name: 'Product 1', brandCount: 'Adult', action: 'edit delete' },
          { id: 2, name: 'Product 2', brandCount: 'Adult and children', action: 'edit delete' },
          { id: 3, name: 'Product 3', brandCount: 'Adult and children', action: 'edit delete'}
        ]
      
}

export default BrandsData