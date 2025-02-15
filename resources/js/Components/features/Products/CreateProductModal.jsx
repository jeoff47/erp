import { useState } from 'react';
import ProductUnitInput from './ProductUnitInput';

import { IoMdAdd } from 'react-icons/io';
import ProductUnitModal from './ProductUnitModal';

const CreateProductModal = ({ isOpen, closeModal }) => {
    if (!isOpen) return null;

    const [formData, setFormData] = useState({
        purchaseUnit: '',
        name: '',
        shortName: '',
        baseUnit: '',
        code: '',
        category: '',
        brand: '',
        barcode: '',
        saleUnit: '',
        quantityLimitation: '',
        note: '',
        images: '',
        warehouse: '',
        supplier: '',
        status: '',
        productType: '',
        productCost: '',
        productPrice: '',
        stockAlert: '',
        orderTax: '',
        taxType: '',
        productQuantity: '',
        productType: '',
    });

    const [errors, setErrors] = useState({});
    const [isModalOpen, setIsModalOpen] = useState(isOpen); // Make sure modal state is passed correctly.

    // Handle text input changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));

        setErrors((prevErrors) => ({
            ...prevErrors,
            [name]: '', // Clear error message for that field when typing
        }));
    };

    // Handle file input changes
    const handleFileChange = (e) => {
        const file = e.target.files[0]; // Get the selected file
        if (file) {
            setFormData((prevState) => ({
                ...prevState,
                images: file, // Store the file in your state
            }));
        }
    };
    const handleChangeDropDown = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();

        const newErrors = {};
        Object.keys(formData).forEach((key) => {
            if (!formData[key]) {
                newErrors[key] = 'This field is required';
            }
        });

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }

        try {
            const response = await fetch(
                'https://your-backend-url.com/api/products',
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(formData),
                },
            );

            if (response.ok) {
                const result = await response.json();
                console.log('Product created:', result);
                closeModal(); // Close modal after successful form submission
            } else {
                const error = await response.json();
                console.error('Error creating product:', error);
            }
        } catch (error) {
            console.error('Error submitting form:', error);
        }
    };

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-700 bg-opacity-50">
            <div className="custom-scrollbar max-h-[80vh] w-full overflow-y-auto rounded-md bg-white p-6 sm:w-1/3 lg:w-3/4">
                <h2 className="mb-4 text-xl">Create Product</h2>
                <form onSubmit={handleSubmit}>
                    <div className="grid grid-cols-3 gap-4 sm:grid-cols-4 lg:grid-cols-3 xl:grid-cols-4">
                        {/* Row 1 */}
                        <div className="space-y-2">
                            <label className="block text-sm font-medium">
                                Name:
                            </label>
                            <input
                                type="text"
                                name="name"
                                placeholder="Product Name"
                                value={formData.name}
                                onChange={handleChange}
                                className={`w-full rounded-md border-2 p-2 ${errors.name ? 'border-red-500' : 'border-gray-200'}`}
                            />
                            {errors.name && (
                                <span className="text-sm text-red-500">
                                    This field is required
                                </span>
                            )}
                        </div>

                        <div className="space-y-2">
                            <label className="block text-sm font-medium">
                                Code:
                            </label>
                            <input
                                type="text"
                                name="code"
                                placeholder="Code"
                                value={formData.code}
                                onChange={handleChange}
                                className={`w-full rounded-md border-2 p-2 ${errors.code ? 'border-red-500' : 'border-gray-200'}`}
                            />
                            {errors.code && (
                                <span className="text-sm text-red-500">
                                    This field is required
                                </span>
                            )}
                        </div>

                        <div className="space-y-2">
                            <label className="block text-sm font-medium">
                                Product Category:
                            </label>
                            <input
                                type="text"
                                name="category"
                                placeholder="Product Category"
                                value={formData.category}
                                onChange={handleChange}
                                className={`w-full rounded-md border-2 p-2 ${errors.category ? 'border-red-500' : 'border-gray-200'}`}
                            />
                            {errors.category && (
                                <span className="text-sm text-red-500">
                                    This field is required
                                </span>
                            )}
                        </div>

                        {/* Row 2 */}
                        <div className="space-y-2">
                            <label className="block text-sm font-medium">
                                Brand:
                            </label>
                            <input
                                type="text"
                                name="brand"
                                placeholder="Brand"
                                value={formData.brand}
                                onChange={handleChange}
                                className={`w-full rounded-md border-2 p-2 ${errors.brand ? 'border-red-500' : 'border-gray-200'}`}
                            />
                            {errors.brand && (
                                <span className="text-sm text-red-500">
                                    This field is required
                                </span>
                            )}
                        </div>

                        <div className="space-y-2">
                            <label className="block text-sm font-medium">
                                Barcode Symbology:
                            </label>
                            <input
                                type="text"
                                name="barcode"
                                placeholder="Barcode Symbology"
                                value={formData.barcode}
                                onChange={handleChange}
                                className={`w-full rounded-md border-2 p-2 ${errors.barcode ? 'border-red-500' : 'border-gray-200'}`}
                            />
                            {errors.barcode && (
                                <span className="text-sm text-red-500">
                                    This field is required
                                </span>
                            )}
                        </div>

                        <div className="space-y-2">
                            <label className="block text-sm font-medium">
                                Sale Unit:
                            </label>
                            <input
                                type="text"
                                name="saleUnit"
                                placeholder="Sale Unit"
                                value={formData.saleUnit}
                                onChange={handleChange}
                                className={`w-full rounded-md border-2 p-2 ${errors.saleUnit ? 'border-red-500' : 'border-gray-200'}`}
                            />
                            {errors.saleUnit && (
                                <span className="text-sm text-red-500">
                                    This field is required
                                </span>
                            )}
                        </div>

                        {/* Row 3 */}

                        {/* Row 4 */}
                        <div className="space-y-2">
                            <label className="block text-sm font-medium">
                                Quantity Limitation:
                            </label>
                            <input
                                type="text"
                                name="quantityLimitation"
                                placeholder="Quantity Limitation"
                                value={formData.quantityLimitation}
                                onChange={handleChange}
                                className={`w-full rounded-md border-2 p-2 ${errors.quantityLimitation ? 'border-red-500' : 'border-gray-200'}`}
                            />
                            {errors.quantityLimitation && (
                                <span className="text-sm text-red-500">
                                    This field is required
                                </span>
                            )}
                        </div>

                        <div className="space-y-2">
                            <label className="block text-sm font-medium">
                                Note:
                            </label>
                            <input
                                type="text"
                                name="note"
                                placeholder="Note"
                                value={formData.note}
                                onChange={handleChange}
                                className={`w-full rounded-md border-2 p-2 ${errors.note ? 'border-red-500' : 'border-gray-200'}`}
                            />
                            {errors.note && (
                                <span className="text-sm text-red-500">
                                    This field is required
                                </span>
                            )}
                        </div>
                        {/* New Fields */}
                        <div className="space-y-2">
                            <label className="block text-sm font-medium">
                                Images:
                            </label>
                            <input
                                type="file"
                                name="images"
                                accept="image/*"
                                onChange={handleFileChange}
                                className={`w-full rounded-md border-2`}
                            />
                        </div>

                        <div className="space-y-2">
                            <label className="block text-sm font-medium">
                                Warehouse:
                            </label>
                            <input
                                type="text"
                                name="warehouse"
                                placeholder="Warehouse"
                                value={formData.warehouse}
                                onChange={handleChange}
                                className={`w-full rounded-md border-2 p-2 ${errors.warehouse ? 'border-red-500' : 'border-gray-200'}`}
                            />
                            {errors.warehouse && (
                                <span className="text-sm text-red-500">
                                    This field is required
                                </span>
                            )}
                        </div>

                        <div className="space-y-2">
                            <label className="block text-sm font-medium">
                                Supplier:
                            </label>
                            <input
                                type="text"
                                name="supplier"
                                placeholder="Supplier"
                                value={formData.supplier}
                                onChange={handleChange}
                                className={`w-full rounded-md border-2 p-2 ${errors.supplier ? 'border-red-500' : 'border-gray-200'}`}
                            />
                            {errors.supplier && (
                                <span className="text-sm text-red-500">
                                    This field is required
                                </span>
                            )}
                        </div>

                        <div className="space-y-2">
                            <label className="block text-sm font-medium">
                                Status:
                            </label>
                            <input
                                type="text"
                                name="status"
                                placeholder="Status"
                                value={formData.status}
                                onChange={handleChange}
                                className={`w-full rounded-md border-2 p-2 ${errors.status ? 'border-red-500' : 'border-gray-200'}`}
                            />
                            {errors.status && (
                                <span className="text-sm text-red-500">
                                    This field is required
                                </span>
                            )}
                        </div>
                        <div className="space-y-2">
                            <label className="block text-sm font-medium">
                                Manufacture Date:
                            </label>
                            <input
                                type="text"
                                name="status"
                                placeholder="Status"
                                value={formData.status}
                                onChange={handleChange}
                                className={`w-full rounded-md border-2 p-2 ${errors.status ? 'border-red-500' : 'border-gray-200'}`}
                            />
                            {errors.status && (
                                <span className="text-sm text-red-500">
                                    This field is required
                                </span>
                            )}
                        </div>
                        <div className="space-y-2">
                            <label className="block text-sm font-medium">
                                Expirary Date:
                            </label>
                            <input
                                type="text"
                                name="status"
                                placeholder="Status"
                                value={formData.status}
                                onChange={handleChange}
                                className={`w-full rounded-md border-2 p-2 ${errors.status ? 'border-red-500' : 'border-gray-200'}`}
                            />
                            {errors.status && (
                                <span className="text-sm text-red-500">
                                    This field is required
                                </span>
                            )}
                        </div>

                        <div className="space-y-2">
                            <label className="block text-sm font-medium">
                                Product Quantity:
                            </label>
                            <input
                                type="text"
                                name="productQuantity"
                                placeholder="Product Quantity"
                                value={formData.productQuantity}
                                onChange={handleChange}
                                className={`w-full rounded-md border-2 p-2 ${errors.productQuantity ? 'border-red-500' : 'border-gray-200'}`}
                            />
                            {errors.productQuantity && (
                                <span className="text-sm text-red-500">
                                    This field is required
                                </span>
                            )}
                        </div>
                        <div className="w-full">
                            <div className="relative w-full">
                                <ProductUnitInput
                                    value={formData.purchaseUnit}
                                    onChange={handleChange}
                                    className="w-full pl-10 pr-14" // Add padding to make space for the button
                                />

                                <button
                                    type="button"
                                    className="absolute bottom-full right-0 flex h-9 w-9 -translate-y-1/2 transform items-center justify-center rounded-md bg-blue-500 text-white file:py-4 hover:bg-blue-600"
                                    onClick={() => setIsModalOpen(true)}
                                >
                                    <IoMdAdd className="text-xl" />
                                </button>

                                <ProductUnitModal
                                    isOpen={isModalOpen}
                                    onClose={() => setIsModalOpen(false)}
                                    formData={formData}
                                    onChange={handleChange}
                                    onSubmit={handleSubmit}
                                />
                            </div>

                            {errors.purchaseUnit && (
                                <span className="text-sm text-red-500">
                                    This field is required
                                </span>
                            )}
                        </div>
                    </div>
                    <div>
                        <div className="space-y-2">
                            <label className="block text-sm font-medium">
                                Product Type:
                            </label>
                            <select
                                name="productType"
                                value={formData.productType}
                                onChange={handleChangeDropDown}
                                className={`w-full rounded-md border-2 p-2 ${errors.productType ? 'border-red-500' : 'border-gray-200'}`}
                            >
                                <option value="">Select Product Type</option>
                                <option value="Type 1">Single</option>
                                <option value="Type 2">Variation</option>
                            </select>
                            {errors.productType && (
                                <span className="text-sm text-red-500">
                                    This field is required
                                </span>
                            )}

                            {/* Conditionally show hidden inputs based on product type */}
                            {formData.productType === 'Type 1' && (
                                <div className="mt-4 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-2 xl:grid-cols-4">
                                    <div className="space-y-2">
                                        <label className="block text-sm font-medium">
                                            Product Cost:
                                        </label>
                                        <input
                                            type="text"
                                            name="productCost"
                                            placeholder="Product Cost"
                                            value={formData.productCost}
                                            onChange={handleChange}
                                            className={`w-full rounded-md border-2 p-2 ${errors.productCost ? 'border-red-500' : 'border-gray-200'}`}
                                        />
                                        {errors.productCost && (
                                            <span className="text-sm text-red-500">
                                                This field is required
                                            </span>
                                        )}
                                    </div>

                                    <div className="space-y-2">
                                        <label className="block text-sm font-medium">
                                            Product Price:
                                        </label>
                                        <input
                                            type="text"
                                            name="productPrice"
                                            placeholder="Product Price"
                                            value={formData.productPrice}
                                            onChange={handleChange}
                                            className={`w-full rounded-md border-2 p-2 ${errors.productPrice ? 'border-red-500' : 'border-gray-200'}`}
                                        />
                                        {errors.productPrice && (
                                            <span className="text-sm text-red-500">
                                                This field is required
                                            </span>
                                        )}
                                    </div>

                                    <div className="space-y-2">
                                        <label className="block text-sm font-medium">
                                            Stock Alert:
                                        </label>
                                        <input
                                            type="text"
                                            name="stockAlert"
                                            placeholder="Stock Alert"
                                            value={formData.stockAlert}
                                            onChange={handleChange}
                                            className={`w-full rounded-md border-2 p-2 ${errors.stockAlert ? 'border-red-500' : 'border-gray-200'}`}
                                        />
                                        {errors.stockAlert && (
                                            <span className="text-sm text-red-500">
                                                This field is required
                                            </span>
                                        )}
                                    </div>

                                    <div className="space-y-2">
                                        <label className="block text-sm font-medium">
                                            Order Tax:
                                        </label>
                                        <input
                                            type="text"
                                            name="orderTax"
                                            placeholder="Order Tax"
                                            value={formData.orderTax}
                                            onChange={handleChange}
                                            className={`w-full rounded-md border-2 p-2 ${errors.orderTax ? 'border-red-500' : 'border-gray-200'}`}
                                        />
                                        {errors.orderTax && (
                                            <span className="text-sm text-red-500">
                                                This field is required
                                            </span>
                                        )}
                                    </div>

                                    <div className="space-y-2">
                                        <label className="block text-sm font-medium">
                                            Tax Type:
                                        </label>
                                        <input
                                            type="text"
                                            name="taxType"
                                            placeholder="Tax Type"
                                            value={formData.taxType}
                                            onChange={handleChange}
                                            className={`w-full rounded-md border-2 p-2 ${errors.taxType ? 'border-red-500' : 'border-gray-200'}`}
                                        />
                                        {errors.taxType && (
                                            <span className="text-sm text-red-500">
                                                This field is required
                                            </span>
                                        )}
                                    </div>
                                </div>
                            )}

                            {formData.productType === 'Type 2' && (
                                <div className="mt-4">
                                    <label className="block text-sm font-medium">
                                        Variation Product Details:
                                    </label>
                                    <select
                                        name="variationProductDetail"
                                        value={formData.variationProductDetail}
                                        onChange={handleChange}
                                        className="w-full rounded-md border-2 p-2"
                                    >
                                        <option value="">
                                            Select Variation
                                        </option>
                                        <option value="variation1">
                                            Variation 1
                                        </option>
                                        <option value="variation2">
                                            Variation 2
                                        </option>
                                        <option value="variation3">
                                            Variation 3
                                        </option>
                                        <option value="variation4">
                                            Variation 4
                                        </option>
                                    </select>
                                </div>
                            )}
                        </div>
                    </div>
                    {/* Buttons */}
                    <div className="mt-6 flex justify-end">
                        <button
                            type="button"
                            onClick={closeModal}
                            className="mr-2 rounded-md bg-gray-300 px-4 py-2 text-sm"
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            className="rounded-md bg-blue-500 px-4 py-2 text-white"
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
