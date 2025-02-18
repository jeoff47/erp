import React, { useState } from 'react';

const CreateUnitsModal = ({ isOpen, closeModal }) => {
  // Only render if isOpen is true
  if (!isOpen) return null;

  const [formData, setFormData] = useState({
    name: '',
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false); // To track submission state

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
    setIsSubmitting(true); // Set submitting state to true

    const newErrors = {};
    Object.keys(formData).forEach((key) => {
      if (!formData[key]) {
        newErrors[key] = 'This field is required';
      }
    });

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setIsSubmitting(false); // Reset submitting state on error
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
        console.log('Unit created:', result);
        closeModal(); // Close modal after successful form submission
      } else {
        const error = await response.json();
        console.error('Error creating unit:', error);
        setErrors((prevErrors) => ({
          ...prevErrors,
          server: 'Failed to create unit. Please try again later.',
        }));
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setErrors((prevErrors) => ({
        ...prevErrors,
        server: 'An error occurred. Please try again later.',
      }));
    } finally {
      setIsSubmitting(false); // Reset submitting state after try block
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-700 bg-opacity-50">
      <div className="custom-scrollbar max-h-[80vh] w-full overflow-y-auto rounded-md bg-white p-6 sm:w-1/3 lg:w-80">
        <h2 className="mb-4 text-xl">Create Units</h2>
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

            {/* Display server-side errors */}
            {errors.server && (
              <div className="mt-2 text-sm text-red-500">
                {errors.server}
              </div>
            )}
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
              disabled={isSubmitting} // Disable the submit button when submitting
            >
              {isSubmitting ? 'Creating...' : 'Create'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateUnitsModal;
