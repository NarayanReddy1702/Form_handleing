import React, { useState } from 'react'

const Update = () => {
    
        
      const [formData, setFormData] = useState({
        username: '',
        password: '',
        image: '',
      });
     
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value,
        });
      };
    
    
      const handleSubmit = (e) => {
        e.preventDefault();
       userData({...formData})
        // Add logic for form submission, such as sending the data to a server
      };


  return (
    <div className='w-full h-screen flex items-center justify-center'>
    <div className="max-w-sm mx-auto p-6 bg-white border rounded-lg shadow-md">
     <h2 className="text-2xl font-semibold text-center mb-4">Form</h2>

     <form onSubmit={handleSubmit} className="space-y-4">
       {/* Username Input */}
       <div>
         <label htmlFor="username" className="block text-sm font-medium text-gray-700">
           Username
         </label>
         <input
           type="text"
           id="username"
           name="username"
           value={formData.username}
           onChange={handleChange}
           required
           className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
         />
       </div>

       {/* Password Input */}
       <div>
         <label htmlFor="password" className="block text-sm font-medium text-gray-700">
           Password
         </label>
         <input
           type="password"
           id="password"
           name="password"
           value={formData.password}
           onChange={handleChange}
           required
           className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
         />
       </div>

       {/* Image Upload Input */}
       <div>
         <label htmlFor="image" className="block text-sm font-medium text-gray-700">
           Upload Image
         </label>
         <input
           type="text"
           id="image"
           name="image"
           value={formData.image}
           onChange={handleChange}
           accept="image/*"
           className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
         />
       </div>

       {/* Submit Button */}
       <div>
         <button
           type="submit"
           className="w-full py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
         >
           Submit
         </button>
       </div>
     </form>
   </div>
  </div>
  )
}

export default Update