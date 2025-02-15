import React, { useState } from 'react';

const CreateBaseUnitModal = ({ isOpen, closeModal }) => {
  if (!isOpen) return null; // Only render if isOpen is true
    
  const [formData, setFormData] = useState({
    name: '',
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

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newErrors = {};
    Object.keys(formData).forEach((key) => {
      if (!formData[key]) { // Validate if fields are empty
        newErrors[key] = 'This field is required';
      }
    });

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    try {
      const formDataToSend = new FormData();
      formDataToSend.append('name', formData.name);

      const response = await fetch('https://your-backend-url.com/api/products', {
        method: 'POST',
        body: formDataToSend,
      });

      if (response.ok) {
        const result = await response.json();
        console.log('Base unit created:', result);
        closeModal(); // Close modal after successful form submission
      } else {
        const error = await response.json();
        console.error('Error creating Base unit:', error);
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-700 bg-opacity-50">
      <div className="custom-scrollbar max-h-[80vh] w-full overflow-y-auto rounded-md bg-white p-6 sm:w-1/3 lg:w-80">
        <h2 className="mb-4 text-xl">Create Base unit</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <div className="space-y-2">
              <label className="block text-sm font-medium">Name:</label>
              <input
                type="text"
                name="name"
                placeholder="Base unit Name"
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

export default CreateBaseUnitModal;
