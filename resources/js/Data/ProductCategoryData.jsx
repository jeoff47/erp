
const ProductCategoryData = {
    columns: [
      { header: 'Product ID', accessor: 'id' },
      { header: 'Product Category', accessor: 'ProductCategoryName' },
      { header: 'Product Count', accessor: 'CountNumber' },
      { header: 'Action', accessor: 'Action' }
    ],
    product: [
      { id: 1, ProductCategoryName: 'Product 1', CountNumber: '$10', Action: 'Category 1' },
      { id: 2, ProductCategoryName: 'Product 2', CountNumber: '$15', Action: 'Category 2' }
    ]
  };
  
  export default ProductCategoryData;