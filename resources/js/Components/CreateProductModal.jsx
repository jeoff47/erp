import React, { useState } from "react";

const CreateProductModal = ({ isOpen, closeModal }) => {
  if (!isOpen) return null;

  const [formData, setFormData] = useState({
    name: "",
    code: "",
    category: "",
    brand: "",
    barcode: "",
    saleUnit: "",
    purchaseUnit: "",
    quantityLimitation: "",
    note: "",
    images: "",
    warehouse: "",
    supplier: "",
    status: "",
    productType: "",
    productCost: "",
    productPrice: "",
    stockAlert: "",
    orderTax: "",
    taxType: "",
    productQuantity: "",
  });

  const [errors, setErrors] = useState({});
  const handleFileChange = (e) => {
    const file = e.target.files[0]; // Get the selected file
    if (file) {
      // Process the file (e.g., upload, preview, etc.)
      setFormData((prevState) => ({
        ...prevState,
        images: file, // Store the file in your state
      }));
    }
  };
  

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));

    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: "",
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newErrors = {};
    Object.keys(formData).forEach((key) => {
      if (!formData[key]) {
        newErrors[key] = "This field is required";
      }
    });

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    try {
      const response = await fetch("https://your-backend-url.com/api/products", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const result = await response.json();
        console.log("Product created:", result);
        closeModal();
      } else {
        const error = await response.json();
        console.error("Error creating product:", error);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-700 bg-opacity-50">
      <div className="bg-white p-6 rounded-md w-full sm:w-1/3 lg:w-3/4">
        <h2 className="text-xl mb-4">Create Product</h2>
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 sm:grid-cols-1 scroll  lg:grid-cols-4 gap-4">
            {/* Row 1 */}
            <div className="space-y-2">
              <label className="block font-medium text-sm">Name:</label>
              <input
                type="text"
                name="name"
                placeholder="Product Name"
                value={formData.name}
                onChange={handleChange}
                className={`border-2 p-2 rounded-md w-full ${errors.name ? "border-red-500" : "border-gray-200"}`}
              />
              {errors.name && <span className="text-red-500 text-sm">This field is required</span>}
            </div>

            <div className="space-y-2">
              <label className="block font-medium text-sm">Code:</label>
              <input
                type="text"
                name="code"
                placeholder="Code"
                value={formData.code}
                onChange={handleChange}
                className={`border-2 p-2 rounded-md w-full ${errors.code ? "border-red-500" : "border-gray-200"}`}
              />
              {errors.code && <span className="text-red-500 text-sm">This field is required</span>}
            </div>

            <div className="space-y-2">
              <label className="block font-medium text-sm">Product Category:</label>
              <input
                type="text"
                name="category"
                placeholder="Product Category"
                value={formData.category}
                onChange={handleChange}
                className={`border-2 p-2 rounded-md w-full ${errors.category ? "border-red-500" : "border-gray-200"}`}
              />
              {errors.category && <span className="text-red-500 text-sm">This field is required</span>}
            </div>

            {/* Row 2 */}
            <div className="space-y-2">
              <label className="block font-medium text-sm">Brand:</label>
              <input
                type="text"
                name="brand"
                placeholder="Brand"
                value={formData.brand}
                onChange={handleChange}
                className={`border-2 p-2 rounded-md w-full ${errors.brand ? "border-red-500" : "border-gray-200"}`}
              />
              {errors.brand && <span className="text-red-500 text-sm">This field is required</span>}
            </div>

            <div className="space-y-2">
              <label className="block font-medium text-sm">Barcode Symbology:</label>
              <input
                type="text"
                name="barcode"
                placeholder="Barcode Symbology"
                value={formData.barcode}
                onChange={handleChange}
                className={`border-2 p-2 rounded-md w-full ${errors.barcode ? "border-red-500" : "border-gray-200"}`}
              />
              {errors.barcode && <span className="text-red-500 text-sm">This field is required</span>}
            </div>

            <div className="space-y-2">
              <label className="block font-medium text-sm">Sale Unit:</label>
              <input
                type="text"
                name="saleUnit"
                placeholder="Sale Unit"
                value={formData.saleUnit}
                onChange={handleChange}
                className={`border-2 p-2 rounded-md w-full ${errors.saleUnit ? "border-red-500" : "border-gray-200"}`}
              />
              {errors.saleUnit && <span className="text-red-500 text-sm">This field is required</span>}
            </div>

            {/* Row 3 */}
            <div className="space-y-2">
              <label className="block font-medium text-sm">Purchase Unit:</label>
              <input
                type="text"
                name="purchaseUnit"
                placeholder="Purchase Unit"
                value={formData.purchaseUnit}
                onChange={handleChange}
                className={`border-2 p-2 rounded-md w-full ${errors.purchaseUnit ? "border-red-500" : "border-gray-200"}`}
              />
              {errors.purchaseUnit && <span className="text-red-500 text-sm">This field is required</span>}
            </div>

            <div className="space-y-2">
              <label className="block font-medium text-sm">Quantity Limitation:</label>
              <input
                type="text"
                name="quantityLimitation"
                placeholder="Quantity Limitation"
                value={formData.quantityLimitation}
                onChange={handleChange}
                className={`border-2 p-2 rounded-md w-full ${errors.quantityLimitation ? "border-red-500" : "border-gray-200"}`}
              />
              {errors.quantityLimitation && <span className="text-red-500 text-sm">This field is required</span>}
            </div>

            <div className="space-y-2">
              <label className="block font-medium text-sm">Note:</label>
              <input
                type="text"
                name="note"
                placeholder="Note"
                value={formData.note}
                onChange={handleChange}
                className={`border-2 p-2 rounded-md w-full ${errors.note ? "border-red-500" : "border-gray-200"}`}
              />
              {errors.note && <span className="text-red-500 text-sm">This field is required</span>}
            </div>

            {/* New Fields */}
            <div className="space-y-2">
  <label className="block font-medium text-sm">Images:</label>
  <input
    type="file"
    name="images"
    accept="image/*" // This ensures only image files are selectable
    onChange={handleFileChange} // You can handle the file change here
    className={`border-2 p-2 rounded-md w-full ${errors.images ? "border-red-500" : "border-gray-200"}`}
  />
  {errors.images && <span className="text-red-500 text-sm">This field is required</span>}
</div>

            <div className="space-y-2">
              <label className="block font-medium text-sm">Warehouse:</label>
              <input
                type="text"
                name="warehouse"
                placeholder="Warehouse"
                value={formData.warehouse}
                onChange={handleChange}
                className={`border-2 p-2 rounded-md w-full ${errors.warehouse ? "border-red-500" : "border-gray-200"}`}
              />
              {errors.warehouse && <span className="text-red-500 text-sm">This field is required</span>}
            </div>

            <div className="space-y-2">
              <label className="block font-medium text-sm">Supplier:</label>
              <input
                type="text"
                name="supplier"
                placeholder="Supplier"
                value={formData.supplier}
                onChange={handleChange}
                className={`border-2 p-2 rounded-md w-full ${errors.supplier ? "border-red-500" : "border-gray-200"}`}
              />
              {errors.supplier && <span className="text-red-500 text-sm">This field is required</span>}
            </div>

            <div className="space-y-2">
              <label className="block font-medium text-sm">Status:</label>
              <input
                type="text"
                name="status"
                placeholder="Status"
                value={formData.status}
                onChange={handleChange}
                className={`border-2 p-2 rounded-md w-full ${errors.status ? "border-red-500" : "border-gray-200"}`}
              />
              {errors.status && <span className="text-red-500 text-sm">This field is required</span>}
            </div>

            <div className="space-y-2">
              <label className="block font-medium text-sm">Product Type:</label>
              <input
                type="text"
                name="productType"
                placeholder="Product Type"
                value={formData.productType}
                onChange={handleChange}
                className={`border-2 p-2 rounded-md w-full ${errors.productType ? "border-red-500" : "border-gray-200"}`}
              />
              {errors.productType && <span className="text-red-500 text-sm">This field is required</span>}
            </div>

            <div className="space-y-2">
              <label className="block font-medium text-sm">Product Cost:</label>
              <input
                type="text"
                name="productCost"
                placeholder="Product Cost"
                value={formData.productCost}
                onChange={handleChange}
                className={`border-2 p-2 rounded-md w-full ${errors.productCost ? "border-red-500" : "border-gray-200"}`}
              />
              {errors.productCost && <span className="text-red-500 text-sm">This field is required</span>}
            </div>

            <div className="space-y-2">
              <label className="block font-medium text-sm">Product Price:</label>
              <input
                type="text"
                name="productPrice"
                placeholder="Product Price"
                value={formData.productPrice}
                onChange={handleChange}
                className={`border-2 p-2 rounded-md w-full ${errors.productPrice ? "border-red-500" : "border-gray-200"}`}
              />
              {errors.productPrice && <span className="text-red-500 text-sm">This field is required</span>}
            </div>

            <div className="space-y-2">
              <label className="block font-medium text-sm">Stock Alert:</label>
              <input
                type="text"
                name="stockAlert"
                placeholder="Stock Alert"
                value={formData.stockAlert}
                onChange={handleChange}
                className={`border-2 p-2 rounded-md w-full ${errors.stockAlert ? "border-red-500" : "border-gray-200"}`}
              />
              {errors.stockAlert && <span className="text-red-500 text-sm">This field is required</span>}
            </div>

            <div className="space-y-2">
              <label className="block font-medium text-sm">Order Tax:</label>
              <input
                type="text"
                name="orderTax"
                placeholder="Order Tax"
                value={formData.orderTax}
                onChange={handleChange}
                className={`border-2 p-2 rounded-md w-full ${errors.orderTax ? "border-red-500" : "border-gray-200"}`}
              />
              {errors.orderTax && <span className="text-red-500 text-sm">This field is required</span>}
            </div>

            <div className="space-y-2">
              <label className="block font-medium text-sm">Tax Type:</label>
              <input
                type="text"
                name="taxType"
                placeholder="Tax Type"
                value={formData.taxType}
                onChange={handleChange}
                className={`border-2 p-2 rounded-md w-full ${errors.taxType ? "border-red-500" : "border-gray-200"}`}
              />
              {errors.taxType && <span className="text-red-500 text-sm">This field is required</span>}
            </div>

            <div className="space-y-2">
              <label className="block font-medium text-sm">Product Quantity:</label>
              <input
                type="text"
                name="productQuantity"
                placeholder="Product Quantity"
                value={formData.productQuantity}
                onChange={handleChange}
                className={`border-2 p-2 rounded-md w-full ${errors.productQuantity ? "border-red-500" : "border-gray-200"}`}
              />
              {errors.productQuantity && <span className="text-red-500 text-sm">This field is required</span>}
            </div>
          </div>

          {/* Buttons */}
          <div className="flex justify-end mt-6">
            <button
              type="button"
              onClick={closeModal}
              className="bg-gray-300 text-sm px-4 py-2 rounded-md mr-2"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded-md"
            >
              Create
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateProductModal;
