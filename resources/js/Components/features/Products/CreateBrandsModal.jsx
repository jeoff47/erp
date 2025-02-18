import React, { useState } from 'react';
import { FaPaperclip } from 'react-icons/fa';

const CreateBrandsModal = ({ isOpen, closeModal }) => {
 if (!isOpen) return null; // Only render if isOpen is true
  
    const [formData, setFormData] = useState({
        name: '',
        images: null,
    });
    const [errors, setErrors] = useState({});

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

    const handleFileChange = (event) => {
      const file = event.target.files[0];
      if (file) {
          setFormData({
              ...formData,
              images: file,
          });
      }
  };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const newErrors = {};
        Object.keys(formData).forEach((key) => {
            if (!formData[key] && key !== 'images') { // Images can be optional
                newErrors[key] = 'This field is required';
            }
        });

        // Check if images is required but not selected
        if (!formData.images) {
            newErrors.images = 'This field is required';
        }

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }

        try {
            const formDataToSend = new FormData();
            formDataToSend.append('name', formData.name);
            if (formData.images) {
                formDataToSend.append('images', formData.images);
            }

            const response = await fetch('https://your-backend-url.com/api/products', {
                method: 'POST',
                body: formDataToSend,
            });

            if (response.ok) {
                const result = await response.json();
                console.log('Brand created:', result);
                closeModal(); // Close modal after successful form submission
            } else {
                const error = await response.json();
                console.error('Error creating Brand:', error);
            }
        } catch (error) {
            console.error('Error submitting form:', error);
        }
    };
    
  return (
         <div className="fixed inset-0 flex items-center justify-center bg-gray-700 bg-opacity-50">
             <div className="custom-scrollbar max-h-[80vh] w-full overflow-y-auto rounded-md 
             bg-white p-6 sm:w-1/3 lg:w-80">
                 <h2 className="mb-4 text-xl">Create Brands</h2>
                 <form onSubmit={handleSubmit}>
                     <div>
                         {/* Row 1 */}
                         <div className="space-y-2">
                             <label className="block text-sm font-medium">Name:</label>
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
                                     {errors.name}
                                 </span>
                             )}
                         </div>
 
                         {/* Image Upload Field */}
                         <div className="space-y-2">
                             <label className="block text-sm font-medium">Images:</label>
                             <div className="flex items-center space-x-2">
                                 <input
                                     type="file"
                                     name="images"
                                     accept="image/*"
                                     onChange={handleFileChange}
                                     className="hidden"
                                 />
                                 <label
                                     htmlFor="images"
                                     className="cursor-pointer w-full py-2 px-4 text-sm text-gray-600 bg-gray-100 border border-gray-300 rounded-md flex items-center justify-center space-x-2 hover:bg-gray-200"
                                 >
                                     {/* Icon */}
                                     <FaPaperclip className="h-5 w-5 text-gray-500" />
                                     <span>Choose an image</span>
                                 </label>
                             </div>
 
                             {/* Display Image Preview */}
                             {formData.images && (
                                 <div className="mt-2">
                                     <img
                                         src={URL.createObjectURL(formData.images)} // Create a local URL for the image
                                         alt="Selected Image"
                                         className="w-full h-auto rounded-md"
                                     />
                                 </div>
                             )}
 
                             {/* Display errors */}
                             {errors.images && (
                                 <span className="text-sm text-red-500">
                                     {errors.images}
                                 </span>
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
  )
};

export default CreateBrandsModal