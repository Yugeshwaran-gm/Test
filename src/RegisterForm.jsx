// import React, { useState } from "react";
// import "./Form.css";

// function Form() {
//   const [formData, setFormData] = useState({
//     name: "",
//     age: "",
//     gender: "",
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault(); // Prevent page reload
//     console.log("Form submitted:", formData);
//     alert(`Name: ${formData.name}, Age: ${formData.age}, Gender: ${formData.gender}`);
//     setFormData({ name: "", age: "", gender: "" }); // Reset form
//   };

//   return (
//     <div className="form-container">
//       <h1>Basic Form</h1>
//       <form onSubmit={handleSubmit}>
//         <div className="form-group">
//           <label htmlFor="name">Name:</label>
//           <input
//             type="text"
//             id="name"
//             name="name"
//             value={formData.name}
//             onChange={handleChange}
//             placeholder="Enter your name"
//             required
//           />
//         </div>
//         <div className="form-group">
//           <label htmlFor="age">Age:</label>
//           <input
//             type="number"
//             id="age"
//             name="age"
//             value={formData.age}
//             onChange={handleChange}
//             placeholder="Enter your age"
//             required
//             min="1"
//           />
//         </div>
//         <div className="form-group">
//           <label>Gender:</label>
//           <div>
//             <label>
//               <input
//                 type="radio"
//                 name="gender"
//                 value="Male"
//                 checked={formData.gender === "Male"}
//                 onChange={handleChange}
//                 required
//               />
//               Male
//             </label>
//           </div>
//           <div>
//             <label>
//               <input
//                 type="radio"
//                 name="gender"
//                 value="Female"
//                 checked={formData.gender === "Female"}
//                 onChange={handleChange}
//               />
//               Female
//             </label>
//           </div>
//           <div>
//             <label>
//               <input
//                 type="radio"
//                 name="gender"
//                 value="Other"
//                 checked={formData.gender === "Other"}
//                 onChange={handleChange}
//               />
//               Other
//             </label>
//           </div>
//         </div>
//         <button type="submit">Submit</button>
//       </form>
//     </div>
//   );
// }

// export default Form;

import React from 'react'

const Form = () => {
  return (
    <div>Form</div>
  )
}

export default Form