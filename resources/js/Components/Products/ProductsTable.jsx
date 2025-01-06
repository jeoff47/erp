import { ProductData } from "@/Data/ProductData"; // assuming ProductData is an array of products

const ProductsTable = () => {
  return (
    <div>
      <table className="w-full table-auto border-collapse border border-gray-200 rounded-2xl">
        <thead>
          <tr className="bg-black">
            <th className="px-4 py-2 text-left font-semibold text-white border-b">PRODUCT</th>
            <th className="px-4 py-2 text-left font-semibold text-white border-b">NAME</th>
            <th className="px-4 py-2 text-left font-semibold text-white border-b">CODE</th>
            <th className="px-4 py-2 text-left font-semibold text-white border-b">BRAND</th>
            <th className="px-4 py-2 text-left font-semibold text-white border-b">PRICE</th>
            <th className="px-4 py-2 text-left font-semibold text-white border-b">PRODUCT UNIT</th>
          </tr>
        </thead>
        <tbody>
          {ProductData.map((product, index) => (
            <tr
              key={index}
              className={`${
                index % 2 === 0 ? "bg-white" : "bg-blue-100"
              } hover:bg-blue-50`}
            >
              <td className="px-4 py-2 border-b">{product.ProductImage}</td>
              <td className="px-4 py-2 border-b">{product.ProductName}</td>
              <td className="px-4 py-2 border-b">{product.ProductCode}</td>
              <td className="px-4 py-2 border-b">{product.ProductBrand}</td>
              <td className="px-4 py-2 border-b">{product.ProductPrice}</td>
              <td className="px-4 py-2 border-b">{product.ProductUnit}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductsTable;
