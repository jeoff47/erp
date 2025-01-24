const VariationData =  {
      columns: [
        { header: 'Product ID', accessor: 'id' },
        { header: 'VARIATION NAME', accessor: 'name' },
        { header: 'VARIATION TYPE', accessor: 'variationType' },
        { header: 'ACTION', accessor: 'action' }
      ],
      data: [
        { id: 1, name: 'Product 1', variationType: 'Adult', action: ['edit', 'delete'] },
        { id: 2, name: 'Product 2', variationType: 'Adult and children', action: ['edit', 'delete'] },
        { id: 3, name: 'Product 3', variationType: 'Adult and children', action: ['edit', 'delete']}
      ]
};
  
  export default VariationData;
  