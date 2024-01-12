// import React, { useState } from "react";

// const CreateAgentForm = () => {
//   const [agentTitle, setAgentTitle] = useState("");

//   const handleTitleChange = (e) => {
//     setAgentTitle(e.target.value);
//   };

//   const handleSaveAgent = () => {
//     // Implement logic to save the agent with the specified title
//     // You may need to make an API request to your Node.js backend here
//   };

//   return (
//     <div>
//       <h2>Create Agent</h2>
//       <label htmlFor="agent-title">Title:</label>
//       <input
//         type="text"
//         id="agent-title"
//         value={agentTitle}
//         onChange={handleTitleChange}
//       />

//       {/* Add other field options here (Edit, Radio, Checkbox, Date Picker, Range Picker) */}

//       <button onClick={handleSaveAgent}>Save Agent</button>
//     </div>
//   );
// };

// export default CreateAgentForm;

// import React, { useState } from "react";
// import "./CreateAgentForm.css"; // Replace with your actual CSS file name

// const CreateAgentForm = () => {
//   // State for agent properties
//   const [agentTitle, setAgentTitle] = useState("");
//   const [editMode, setEditMode] = useState(false);
//   const [isChecked, setIsChecked] = useState(false);
//   const [radioValue, setRadioValue] = useState("");
//   const [dateValue, setDateValue] = useState("");
//   const [rangeValue, setRangeValue] = useState(0);

//   const handleTitleChange = (e) => {
//     setAgentTitle(e.target.value);
//   };

//   const handleSaveAgent = () => {
//     // Implement logic to save the agent with the specified title and other properties
//     // You may need to make an API request to your Node.js backend here
//     console.log("Saved Agent:", {
//       title: agentTitle,
//       editMode,
//       isChecked,
//       radioValue,
//       dateValue,
//       rangeValue,
//     });
//   };

//   return (
//     <div>
//       <h2>Create Agent</h2>
//       <label htmlFor="agent-title">Title:</label>
//       <input
//         type="text"
//         id="agent-title"
//         value={agentTitle}
//         onChange={handleTitleChange}
//       />

//       {/* Edit Mode */}
//       <label htmlFor="edit-mode">Edit Mode:</label>
//       <input
//         type="checkbox"
//         id="edit-mode"
//         checked={editMode}
//         onChange={() => setEditMode(!editMode)}
//       />

//       {/* Checkbox */}
//       <label htmlFor="checkbox">Checkbox:</label>
//       <input
//         type="checkbox"
//         id="checkbox"
//         checked={isChecked}
//         onChange={() => setIsChecked(!isChecked)}
//       />

//       {/* Radio Buttons */}
//       <label htmlFor="radio">Radio:</label>
//       <input
//         type="radio"
//         id="radio-option-1"
//         name="radio-options"
//         value="Option 1"
//         checked={radioValue === "Option 1"}
//         onChange={() => setRadioValue("Option 1")}
//       />
//       <input
//         type="radio"
//         id="radio-option-2"
//         name="radio-options"
//         value="Option 2"
//         checked={radioValue === "Option 2"}
//         onChange={() => setRadioValue("Option 2")}
//       />

//       {/* Date Picker */}
//       <label htmlFor="date-picker">Date Picker:</label>
//       <input
//         type="date"
//         id="date-picker"
//         value={dateValue}
//         onChange={(e) => setDateValue(e.target.value)}
//       />

//       {/* Range Picker */}
//       <label htmlFor="range-picker">Range Picker:</label>
//       <input
//         type="range"
//         id="range-picker"
//         value={rangeValue}
//         onChange={(e) => setRangeValue(parseInt(e.target.value, 10))}
//       />

//       <button onClick={handleSaveAgent}>Save Agent</button>
//     </div>
//   );
// };

// export default CreateAgentForm;

// import React, { useState } from "react";
// import "./CreateAgentForm.css"; // Replace with your actual CSS file name

// const CreateAgentForm = () => {
//   // State for agent properties
//   const [agentTitle, setAgentTitle] = useState("");
//   const [editMode, setEditMode] = useState(false);
//   const [isChecked, setIsChecked] = useState(false);
//   const [radioValue, setRadioValue] = useState("");
//   const [dateValue, setDateValue] = useState("");
//   const [rangeValue, setRangeValue] = useState(0);

//   const handleTitleChange = (e) => {
//     setAgentTitle(e.target.value);
//   };

//   const handleSaveAgent = () => {
//     // Implement logic to save the agent with the specified title and other properties
//     // You may need to make an API request to your Node.js backend here
//     console.log("Saved Agent:", {
//       title: agentTitle,
//       editMode,
//       isChecked,
//       radioValue,
//       dateValue,
//       rangeValue,
//     });
//   };

//   return (
//     <div>
//       <h2>Create Agent</h2>
//       <ul>
//         <li>
//           <label htmlFor="agent-title">Title:</label>
//           <input
//             type="text"
//             id="agent-title"
//             value={agentTitle}
//             onChange={handleTitleChange}
//           />
//         </li>

//         <li>
//           <label htmlFor="edit-mode">Edit Mode:</label>
//           <input
//             type="checkbox"
//             id="edit-mode"
//             checked={editMode}
//             onChange={() => setEditMode(!editMode)}
//           />
//         </li>

//         <li>
//           <label htmlFor="checkbox">Checkbox:</label>
//           <input
//             type="checkbox"
//             id="checkbox"
//             checked={isChecked}
//             onChange={() => setIsChecked(!isChecked)}
//           />
//         </li>

//         <li>
//           <label htmlFor="radio">Radio:</label>
//           <input
//             type="radio"
//             id="radio-option-1"
//             name="radio-options"
//             value="Option 1"
//             checked={radioValue === "Option 1"}
//             onChange={() => setRadioValue("Option 1")}
//           />
//           <input
//             type="radio"
//             id="radio-option-2"
//             name="radio-options"
//             value="Option 2"
//             checked={radioValue === "Option 2"}
//             onChange={() => setRadioValue("Option 2")}
//           />
//         </li>

//         <li>
//           <label htmlFor="date-picker">Date Picker:</label>
//           <input
//             type="date"
//             id="date-picker"
//             value={dateValue}
//             onChange={(e) => setDateValue(e.target.value)}
//           />
//         </li>

//         <li>
//           <label htmlFor="range-picker">Range Picker:</label>
//           <input
//             type="range"
//             id="range-picker"
//             value={rangeValue}
//             onChange={(e) => setRangeValue(parseInt(e.target.value, 10))}
//           />
//         </li>
//       </ul>

//       <button onClick={handleSaveAgent}>Save Agent</button>
//     </div>
//   );
// };

// export default CreateAgentForm;

// import React, { useState } from "react";
// import "./CreateAgentForm.css"; // Replace with your actual CSS file name

// const CreateAgentForm = () => {
//   // State for agent properties
//   const [agentTitle, setAgentTitle] = useState("");
//   const [editMode, setEditMode] = useState(false);
//   const [isChecked, setIsChecked] = useState(false);
//   const [radioValue, setRadioValue] = useState("");
//   const [dateValue, setDateValue] = useState("");
//   const [rangeValue, setRangeValue] = useState(0);
//   const [checkboxOptions, setCheckboxOptions] = useState([]);
//   const [newCheckboxOption, setNewCheckboxOption] = useState("");

//   const handleTitleChange = (e) => {
//     setAgentTitle(e.target.value);
//   };

//   const handleSaveAgent = () => {
//     // Implement logic to save the agent with the specified title and other properties
//     // You may need to make an API request to your Node.js backend here
//     console.log("Saved Agent:", {
//       title: agentTitle,
//       editMode,
//       isChecked,
//       radioValue,
//       dateValue,
//       rangeValue,
//       checkboxOptions,
//     });
//   };

//   const handleAddCheckbox = () => {
//     setCheckboxOptions([
//       ...checkboxOptions,
//       { id: Date.now(), option: "Option 1" },
//     ]);
//   };

//   const handleAddOption = () => {
//     setCheckboxOptions([
//       ...checkboxOptions,
//       { id: Date.now(), option: newCheckboxOption },
//     ]);
//     setNewCheckboxOption("");
//   };

//   return (
//     <div>
//       <h2>Create Agent</h2>
//       <ul>
//         <li>
//           <label htmlFor="agent-title">Title:</label>
//           <input
//             type="text"
//             id="agent-title"
//             value={agentTitle}
//             onChange={handleTitleChange}
//           />
//         </li>

//         <li>
//           <label htmlFor="edit-mode">Edit Mode:</label>
//           <input
//             type="checkbox"
//             id="edit-mode"
//             checked={editMode}
//             onChange={() => setEditMode(!editMode)}
//           />
//         </li>

//         <li>
//           <label htmlFor="checkbox">Checkbox:</label>
//           <input
//             type="checkbox"
//             id="checkbox"
//             checked={isChecked}
//             onChange={() => setIsChecked(!isChecked)}
//           />
//         </li>

//         {isChecked && (
//           <li>
//             <label>Checkbox Options:</label>
//             {/* <button onClick={handleAddCheckbox}>Add Checkbox</button> */}
//             <ul>
//               {checkboxOptions.map((option) => (
//                 <li key={option.id}>{option.option}</li>
//               ))}
//               <li>
//                 <input
//                   type="text"
//                   value={newCheckboxOption}
//                   onChange={(e) => setNewCheckboxOption(e.target.value)}
//                 />
//                 <button onClick={handleAddOption}>Add Option</button>
//               </li>
//             </ul>
//           </li>
//         )}

//         <li>
//           <label htmlFor="radio">Radio:</label>
//           <input
//             type="radio"
//             id="radio-option-1"
//             name="radio-options"
//             value="Option 1"
//             checked={radioValue === "Option 1"}
//             onChange={() => setRadioValue("Option 1")}
//           />
//           <input
//             type="radio"
//             id="radio-option-2"
//             name="radio-options"
//             value="Option 2"
//             checked={radioValue === "Option 2"}
//             onChange={() => setRadioValue("Option 2")}
//           />
//         </li>

//         <li>
//           <label htmlFor="date-picker">Date Picker:</label>
//           <input
//             type="date"
//             id="date-picker"
//             value={dateValue}
//             onChange={(e) => setDateValue(e.target.value)}
//             afd
//           />
//         </li>

//         <li>
//           <label htmlFor="range-picker">Range Picker:</label>
//           <input
//             type="range"
//             id="range-picker"
//             value={rangeValue}
//             onChange={(e) => setRangeValue(parseInt(e.target.value, 10))}
//           />
//         </li>
//       </ul>

//       <button onClick={handleSaveAgent}>Save Agent</button>
//     </div>
//   );
// };

// export default CreateAgentForm;

// import React, { useState } from "react";
// import "./CreateAgentForm.css"; // Replace with your actual CSS file name

// const CreateAgentForm = () => {
//   // State for agent properties
//   const [agentTitle, setAgentTitle] = useState("");
//   const [editMode, setEditMode] = useState(false);
//   const [isChecked, setIsChecked] = useState(false);
//   const [radioValue, setRadioValue] = useState("");
//   const [dateValue, setDateValue] = useState("");
//   const [rangeValue, setRangeValue] = useState(0);
//   const [checkboxOptions, setCheckboxOptions] = useState([]);
//   const [newCheckboxOption, setNewCheckboxOption] = useState("");

//   const handleTitleChange = (e) => {
//     setAgentTitle(e.target.value);
//   };

//   const handleSaveAgent = () => {
//     // Implement logic to save the agent with the specified title and other properties
//     // You may need to make an API request to your Node.js backend here
//     console.log("Saved Agent:", {
//       title: agentTitle,
//       editMode,
//       isChecked,
//       radioValue,
//       dateValue,
//       rangeValue,
//       checkboxOptions,
//     });
//   };

//   const handleAddCheckbox = () => {
//     setCheckboxOptions([
//       ...checkboxOptions,
//       { id: Date.now(), option: "Option 1" },
//     ]);
//   };

//   const handleAddOption = () => {
//     setCheckboxOptions([
//       ...checkboxOptions,
//       { id: Date.now(), option: newCheckboxOption },
//     ]);
//     setNewCheckboxOption("");
//   };

//   const renderDynamicForm = () => {
//     if (isChecked) {
//       // Render dynamic form for Checkbox
//       return (
//         <div>
//           <h3>Checkbox Options:</h3>
//           <ul>
//             {checkboxOptions.map((option) => (
//               <li key={option.id}>{option.option}</li>
//             ))}
//             <li>
//               <input
//                 type="text"
//                 value={newCheckboxOption}
//                 onChange={(e) => setNewCheckboxOption(e.target.value)}
//               />
//               <button onClick={handleAddOption}>Add Option</button>
//             </li>
//           </ul>
//         </div>
//       );
//     }
//   };

//   return (
//     <div>
//       <h2>Create Agent</h2>
//       <div className="form-container">
//         <ul className="form-fields">
//           <li>
//             <label htmlFor="agent-title">Title:</label>
//             <input
//               type="text"
//               id="agent-title"
//               value={agentTitle}
//               onChange={handleTitleChange}
//             />
//           </li>

//           {/* Add other static fields here */}

//           <li>
//             <label htmlFor="checkbox">Checkbox:</label>
//             <input
//               type="checkbox"
//               id="checkbox"
//               checked={isChecked}
//               onChange={() => setIsChecked(!isChecked)}
//             />
//           </li>
//         </ul>

//         <div className="dynamic-form">{renderDynamicForm()}</div>
//       </div>

//       <button onClick={handleSaveAgent}>Save Agent</button>
//     </div>
//   );
// };

// export default CreateAgentForm;

// import React, { useState } from "react";
// import "./CreateAgentForm.css"; // Replace with your actual CSS file name

// // New component to display a default form message
// const DefaultFormMessage = () => {
//   return (
//     <div className="default-form-message">
//       <p>Hello! This is the default form message.</p>
//     </div>
//   );
// };

// const CreateAgentForm = () => {
//   // State for agent properties
//   const [agentTitle, setAgentTitle] = useState("");
//   const [editMode, setEditMode] = useState(false);
//   const [isChecked, setIsChecked] = useState(false);
//   const [radioValue, setRadioValue] = useState("");
//   const [dateValue, setDateValue] = useState("");
//   const [rangeValue, setRangeValue] = useState(0);
//   const [checkboxOptions, setCheckboxOptions] = useState([]);
//   const [newCheckboxOption, setNewCheckboxOption] = useState("");

//   const handleTitleChange = (e) => {
//     setAgentTitle(e.target.value);
//   };

//   const handleSaveAgent = () => {
//     // Implement logic to save the agent with the specified title and other properties
//     // You may need to make an API request to your Node.js backend here
//     console.log("Saved Agent:", {
//       title: agentTitle,
//       editMode,
//       isChecked,
//       radioValue,
//       dateValue,
//       rangeValue,
//       checkboxOptions,
//     });
//   };

//   const handleAddCheckbox = () => {
//     setCheckboxOptions([
//       ...checkboxOptions,
//       { id: Date.now(), option: "Option 1" },
//     ]);
//   };

//   const handleAddOption = () => {
//     setCheckboxOptions([
//       ...checkboxOptions,
//       { id: Date.now(), option: newCheckboxOption },
//     ]);
//     setNewCheckboxOption("");
//   };

//   const renderDynamicForm = () => {
//     if (isChecked) {
//       // Render dynamic form for Checkbox
//       return (
//         <div>
//           <h3>Checkbox Options:</h3>
//           <ul>
//             {checkboxOptions.map((option) => (
//               <li key={option.id}>{option.option}</li>
//             ))}
//             <li>
//               <input
//                 type="text"
//                 value={newCheckboxOption}
//                 onChange={(e) => setNewCheckboxOption(e.target.value)}
//               />
//               <button onClick={handleAddOption}>Add Option</button>
//             </li>
//           </ul>
//         </div>
//       );
//     } else {
//       // Render default form message
//       return <DefaultFormMessage />;
//     }
//   };

//   return (
//     <div>
//       <h2>Create Agent</h2>
//       <div className="form-container">
//         <ul className="form-fields">
//           <li>
//             <label htmlFor="agent-title">Title:</label>
//             <input
//               type="text"
//               id="agent-title"
//               value={agentTitle}
//               onChange={handleTitleChange}
//             />
//           </li>

//           {/* Add other static fields here */}

//           <li>
//             <label htmlFor="checkbox">Checkbox:</label>
//             <input
//               type="checkbox"
//               id="checkbox"
//               checked={isChecked}
//               onChange={() => setIsChecked(!isChecked)}
//             />
//           </li>
//         </ul>

//         <div className="dynamic-form">{renderDynamicForm()}</div>
//       </div>

//       <button onClick={handleSaveAgent}>Save Agent</button>
//     </div>
//   );
// };

// export default CreateAgentForm;

// import React, { useState } from "react";
// import "./CreateAgentForm.css"; // Replace with your actual CSS file name

// // New component to display a default form message
// const DefaultFormMessage = () => {
//   return (
//     <div className="default-form-message">
//       <p>Hello! This is the default form message.</p>
//     </div>
//   );
// };

// const CreateAgentForm = () => {
//   // ... (previous code remains the same)
//   const [agentTitle, setAgentTitle] = useState("");
//   const [editMode, setEditMode] = useState(false);
//   const [isChecked, setIsChecked] = useState(false);
//   const [radioValue, setRadioValue] = useState("");
//   const [dateValue, setDateValue] = useState("");
//   const [rangeValue, setRangeValue] = useState(0);
//   const [checkboxOptions, setCheckboxOptions] = useState([]);
//   const [newCheckboxOption, setNewCheckboxOption] = useState("");

//   const handleTitleChange = (e) => {
//     setAgentTitle(e.target.value);
//   };

//   const handleSaveAgent = () => {
//     // Implement logic to save the agent with the specified title and other properties
//     // You may need to make an API request to your Node.js backend here
//     console.log("Saved Agent:", {
//       title: agentTitle,
//       editMode,
//       isChecked,
//       radioValue,
//       dateValue,
//       rangeValue,
//       checkboxOptions,
//     });
//   };

//   const handleAddCheckbox = () => {
//     setCheckboxOptions([
//       ...checkboxOptions,
//       { id: Date.now(), option: "Option 1" },
//     ]);
//   };

//   const handleAddOption = () => {
//     setCheckboxOptions([
//       ...checkboxOptions,
//       { id: Date.now(), option: newCheckboxOption },
//     ]);
//     setNewCheckboxOption("");
//   };

//   const renderDynamicForm = () => {
//     if (isChecked) {
//       // Render dynamic form for Checkbox
//       return (
//         <div>
//           <h3>Checkbox Options:</h3>
//           <ul>
//             {checkboxOptions.map((option) => (
//               <li key={option.id}>{option.option}</li>
//             ))}
//             <li>
//               <input
//                 type="text"
//                 value={newCheckboxOption}
//                 onChange={(e) => setNewCheckboxOption(e.target.value)}
//               />
//               <button onClick={handleAddOption}>Add Option</button>
//             </li>
//           </ul>
//         </div>
//       );
//     } else {
//       // Render default form message
//       return <DefaultFormMessage />;
//     }
//   };
//   return (
//     <div className="create-agent-form-container">
//       <div className="left-side">
//         {/* Default Form Message */}
//         {isChecked ? null : <DefaultFormMessage />}
//       </div>

//       <div className="right-side">
//         {/* Create Agent Form */}
//         <h2>Create Agent</h2>
//         <ul className="form-fields">
//           <li>
//             <label htmlFor="agent-title">Title:</label>
//             <input
//               type="text"
//               id="agent-title"
//               value={agentTitle}
//               onChange={handleTitleChange}
//             />
//           </li>

//           {/* Add other static fields here */}

//           <li>
//             <label htmlFor="checkbox">Checkbox:</label>
//             <input
//               type="checkbox"
//               id="checkbox"
//               checked={isChecked}
//               onChange={() => setIsChecked(!isChecked)}
//             />
//           </li>

//           {/* Additional dynamic fields */}
//           {isChecked && (
//             <li>
//               <h3>Checkbox Options:</h3>
//               <ul>
//                 {checkboxOptions.map((option) => (
//                   <li key={option.id}>{option.option}</li>
//                 ))}
//                 <li>
//                   <input
//                     type="text"
//                     value={newCheckboxOption}
//                     onChange={(e) => setNewCheckboxOption(e.target.value)}
//                   />
//                   <button onClick={handleAddOption}>Add Option</button>
//                 </li>
//               </ul>
//             </li>
//           )}
//         </ul>

//         <button onClick={handleSaveAgent}>Save Agent</button>
//       </div>
//     </div>
//   );
// };

// export default CreateAgentForm;

// import React, { useState } from "react";
// import "./CreateAgentForm.css"; // Replace with your actual CSS file name

// // New component to display a default form message
// const DefaultFormMessage = () => {
//   return (
//     <div className="default-form-message">
//       <p>Hello! This is the default form message.</p>
//     </div>
//   );
// };

// const CheckboxOptions = ({
//   options,
//   onAddOption,
//   newOption,
//   onChangeNewOption,
// }) => {
//   return (
//     <div>
//       <h3>Checkbox Options:</h3>
//       <ul>
//         {options.map((option) => (
//           <li key={option.id}>{option.option}</li>
//         ))}
//         <li>
//           <input
//             type="text"
//             value={newOption}
//             onChange={(e) => onChangeNewOption(e.target.value)}
//           />
//           <button onClick={onAddOption}>Add Option</button>
//         </li>
//       </ul>
//     </div>
//   );
// };

// const CreateAgentForm = () => {
//   // State for agent properties
//   const [agentTitle, setAgentTitle] = useState("");
//   const [editMode, setEditMode] = useState(false);
//   const [isChecked, setIsChecked] = useState(false);
//   const [radioValue, setRadioValue] = useState("");
//   const [dateValue, setDateValue] = useState("");
//   const [rangeValue, setRangeValue] = useState(0);
//   const [checkboxOptions, setCheckboxOptions] = useState([]);
//   const [newCheckboxOption, setNewCheckboxOption] = useState("");

//   const handleTitleChange = (e) => {
//     setAgentTitle(e.target.value);
//   };

//   const handleSaveAgent = () => {
//     // Implement logic to save the agent with the specified title and other properties
//     // You may need to make an API request to your Node.js backend here
//     console.log("Saved Agent:", {
//       title: agentTitle,
//       editMode,
//       isChecked,
//       radioValue,
//       dateValue,
//       rangeValue,
//       checkboxOptions,
//     });
//   };

//   const handleAddCheckbox = () => {
//     setCheckboxOptions([
//       ...checkboxOptions,
//       { id: Date.now(), option: "Option 1" },
//     ]);
//   };

//   const handleAddOption = () => {
//     setCheckboxOptions([
//       ...checkboxOptions,
//       { id: Date.now(), option: newCheckboxOption },
//     ]);
//     setNewCheckboxOption("");
//   };

//   return (
//     <div className="create-agent-form-container">
//       <div className="left-side">
//         {/* Default Form Message */}
//         <DefaultFormMessage />
//       </div>

//       <div className="right-side">
//         {/* Create Agent Form */}
//         <h2>Create Agent</h2>
//         <ul className="form-fields">
//           <li>
//             <label htmlFor="agent-title">Title:</label>
//             <input
//               type="text"
//               id="agent-title"
//               value={agentTitle}
//               onChange={handleTitleChange}
//             />
//           </li>

//           {/* Add other static fields here */}

//           <li>
//             <label htmlFor="checkbox">Checkbox:</label>
//             <input
//               type="checkbox"
//               id="checkbox"
//               checked={isChecked}
//               onChange={() => setIsChecked(!isChecked)}
//             />
//           </li>

//           {/* Additional dynamic fields */}
//           {isChecked && (
//             <li>
//               <CheckboxOptions
//                 options={checkboxOptions}
//                 onAddOption={handleAddOption}
//                 newOption={newCheckboxOption}
//                 onChangeNewOption={setNewCheckboxOption}
//               />
//             </li>
//           )}
//         </ul>

//         <button onClick={handleSaveAgent}>Save Agent</button>
//       </div>
//     </div>
//   );
// };

// export default CreateAgentForm;

// import React, { useState } from "react";
// import "./CreateAgentForm.css"; // Replace with your actual CSS file name

// // New component to display a default form message
// const DefaultFormMessage = ({
//   isChecked,
//   checkboxOptions,
//   onAddOption,
//   onCancelOption,
//   newCheckboxOption,
//   onChangeNewCheckboxOption,
// }) => {
//   return (
//     <>
//       <div className="default-form-message">
//         <p>Hello! This is the default form message.</p>

//         {isChecked && (
//           <div>
//             <h3>Checkbox :</h3>
//             {/* <button onClick={handleAddCheckbox}>Add Checkbox</button> */}
//             <ul>
//               {checkboxOptions.map((option) => (
//                 <li key={option.id}>{option.option}</li>
//               ))}
//               <li>
//                 <input
//                   type="text"
//                   value={newCheckboxOption}
//                   onChange={(e) => onChangeNewCheckboxOption(e.target.value)}
//                 />
//                 <button onClick={onAddOption}>Add Option</button>
//                 <button onClick={onCancelOption}>Cancel</button>
//               </li>
//             </ul>
//           </div>
//         )}
//         <div></div>
//       </div>
//     </>
//   );
// };

// const CreateAgentForm = () => {
//   // State for agent properties
//   const [agentTitle, setAgentTitle] = useState("");
//   const [editMode, setEditMode] = useState(false);
//   const [isChecked, setIsChecked] = useState(false);
//   const [radioValue, setRadioValue] = useState("");
//   const [dateValue, setDateValue] = useState("");
//   const [rangeValue, setRangeValue] = useState(0);
//   const [checkboxOptions, setCheckboxOptions] = useState([]);
//   const [newCheckboxOption, setNewCheckboxOption] = useState("");

//   const handleTitleChange = (e) => {
//     setAgentTitle(e.target.value);
//   };

//   const handleSaveAgent = () => {
//     // Implement logic to save the agent with the specified title and other properties
//     // You may need to make an API request to your Node.js backend here
//     console.log("Saved Agent:", {
//       title: agentTitle,
//       editMode,
//       isChecked,
//       radioValue,
//       dateValue,
//       rangeValue,
//       checkboxOptions,
//     });
//   };

//   const handleAddCheckbox = () => {
//     setCheckboxOptions([
//       ...checkboxOptions,
//       { id: Date.now(), option: "Option 1" },
//     ]);
//   };

//   const handleAddOption = () => {
//     setCheckboxOptions([
//       ...checkboxOptions,
//       { id: Date.now(), option: newCheckboxOption },
//     ]);
//     setNewCheckboxOption("");
//   };

//   const handleCancelOption = () => {
//     setNewCheckboxOption(""); // Clear the new checkbox option
//     setIsChecked(false); // Uncheck the checkbox
//   };
//   return (
//     <div className="create-agent-form-container">
//       <div className="left-side">
//         {/* Default Form Message */}
//         <DefaultFormMessage
//           isChecked={isChecked}
//           checkboxOptions={checkboxOptions}
//           onCancelOption={handleCancelOption}
//           onAddOption={handleAddOption}
//           newCheckboxOption={newCheckboxOption}
//           onChangeNewCheckboxOption={setNewCheckboxOption}
//         />
//       </div>

//       <div className="right-side">
//         {/* Create Agent Form */}
//         <h2>Choose fields</h2>
//         <ul className="form-fields">
//           {/* Add other static fields here */}

//           <li>
//             <label htmlFor="checkboxdd">Checkbox</label>
//             <input
//               style={{ visibility: "hidden" }}
//               type="checkbox"
//               id="checkboxdd"
//               checked={isChecked}
//               onChange={() => setIsChecked(!isChecked)}
//             />
//           </li>
//         </ul>

//         <button onClick={handleSaveAgent}>Save </button>
//         <button onClick={handleSaveAgent}>cancel</button>
//       </div>
//     </div>
//   );
// };

// export default CreateAgentForm;

// import React, { useState } from "react";
// import "./CreateAgentForm.css"; // Replace with your actual CSS file name

// const DefaultFormMessage = ({
//   fieldType,
//   isChecked,
//   checkboxOptions,
//   onAddOption,
//   onCancelOption,
//   newCheckboxOption,
//   onChangeNewCheckboxOption,
// }) => {
//   return (
//     <>
//       <div className="default-form-message">
//         <p>Hello! This is the default form message.</p>

//         {fieldType === "checkbox" && (
//           <div>
//             <h3>Checkbox :</h3>
//             <ul>
//               {checkboxOptions.map((option) => (
//                 <li key={option.id}>{option.option}</li>
//               ))}
//               <li>
//                 <input
//                   type="text"
//                   value={newCheckboxOption}
//                   onChange={(e) => onChangeNewCheckboxOption(e.target.value)}
//                 />
//                 <button onClick={onAddOption}>Add Option</button>
//                 <button onClick={onCancelOption}>Cancel</button>
//               </li>
//             </ul>
//           </div>
//         )}

//         {/* Add other conditions for different field types */}
//         {/* For example, fieldType === "text" and render text input */}
//         {fieldType === "text" && (
//           <div>
//             <h3>Text Field:</h3>
//             <input type="text" placeholder="Enter text" />
//           </div>
//         )}
//       </div>
//     </>
//   );
// };

// const CreateAgentForm = () => {
//   const [fieldType, setFieldType] = useState("checkbox"); // Default field type
//   const [agentTitle, setAgentTitle] = useState("");
//   const [isChecked, setIsChecked] = useState(false);
//   const [radioValue, setRadioValue] = useState("");
//   const [dateValue, setDateValue] = useState("");
//   const [rangeValue, setRangeValue] = useState(0);
//   const [checkboxOptions, setCheckboxOptions] = useState([]);
//   const [newCheckboxOption, setNewCheckboxOption] = useState("");

//   const handleTitleChange = (e) => {
//     setAgentTitle(e.target.value);
//   };

//   const handleSaveAgent = () => {
//     console.log("Saved Agent:", {
//       title: agentTitle,
//       isChecked,
//       radioValue,
//       dateValue,
//       rangeValue,
//       checkboxOptions,
//     });
//   };

//   const handleAddCheckbox = () => {
//     setCheckboxOptions([
//       ...checkboxOptions,
//       { id: Date.now(), option: "Option 1" },
//     ]);
//   };

//   const handleAddOption = () => {
//     setCheckboxOptions([
//       ...checkboxOptions,
//       { id: Date.now(), option: newCheckboxOption },
//     ]);
//     setNewCheckboxOption("");
//   };

//   const handleCancelOption = () => {
//     setNewCheckboxOption("");
//     setIsChecked(false);
//   };

//   return (
//     <div className="create-agent-form-container">
//       <div className="left-side">
//         {/* Default Form Message */}
//         <DefaultFormMessage
//           fieldType={fieldType}
//           isChecked={isChecked}
//           checkboxOptions={checkboxOptions}
//           onCancelOption={handleCancelOption}
//           onAddOption={handleAddOption}
//           newCheckboxOption={newCheckboxOption}
//           onChangeNewCheckboxOption={setNewCheckboxOption}
//         />
//       </div>

//       <div className="right-side">
//         {/* Create Agent Form */}
//         <h2>Choose fields</h2>
//         <ul className="form-fields">
//           {/* Add other static fields here */}

//           <li>
//             <label htmlFor="checkbox">Checkbox</label>
//             <input
//               type="checkbox"
//               id="checkbox"
//               checked={fieldType === "checkbox"}
//               onChange={() => setFieldType("checkbox")}
//             />
//           </li>
//           <li>
//             <label htmlFor="text">Text</label>
//             <input
//               type="checkbox"
//               id="text"
//               checked={fieldType === "text"}
//               onChange={() => setFieldType("text")}
//             />
//           </li>
//         </ul>

//         <button onClick={handleSaveAgent}>Save</button>
//         <button onClick={handleCancelOption}>Cancel</button>
//       </div>
//     </div>
//   );
// };

// export default CreateAgentForm;

import React, { useState } from "react";
import "./CreateAgentForm.css"; // Replace with your actual CSS file name
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheckSquare,
  faSquare,
  faCheckCircle,
  faCircle,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";

const DefaultFormMessage = ({
  fieldType,
  isChecked,
  checkboxOptions,

  onCancelOption,
  onDeleteOption,
  onAddOption,
  newCheckboxOption,
  onChangeNewCheckboxOption,
}) => {
  return (
    <>
      <div className="default-form-message">
        <p>Hello! This is the default form message.</p>

        {/* {fieldType === "checkbox" && (
          <div>
            <h3>Checkbox :</h3>
            <ul>
              {checkboxOptions.map((option) => (
                <li key={option.id}>{option.option}</li>
              ))}
              <li>
                <input
                  type="text"
                  value={newCheckboxOption}
                  onChange={(e) => onChangeNewCheckboxOption(e.target.value)}
                />
                <button onClick={onAddOption}>Add Option</button>
                <button onClick={onCancelOption}>Cancel</button>
              </li>
            </ul>
          </div>
        )} */}

        {fieldType === "checkbox" && (
          <div>
            <h3>Checkbox :</h3>
            <ul>
              {checkboxOptions.map((option) => (
                <li key={option.id}>
                  {option.option}
                  <button onClick={() => onDeleteOption(option.id)}>
                    <FontAwesomeIcon icon={faTrash} />
                  </button>
                </li>
              ))}
              <li>
                <input
                  type="text"
                  value={newCheckboxOption}
                  onChange={(e) => onChangeNewCheckboxOption(e.target.value)}
                />
                <button onClick={onAddOption}>Add Option</button>
                <button onClick={onCancelOption}>Cancel</button>
              </li>
            </ul>
          </div>
        )}

        {fieldType === "Title" && (
          <div>
            <h3>Text Field:</h3>
            <input type="text" placeholder="Enter text" />
          </div>
        )}

        {fieldType === "text" && (
          <div>
            <h3>Text Field:</h3>
            <input type="text" placeholder="Enter text" />
          </div>
        )}

        {fieldType === "multipleCheckbox" && (
          <div>
            <h3>Multiple Checkbox :</h3>
            <ul>
              {checkboxOptions.map((option) => (
                <li key={option.id}>{option.option}</li>
              ))}
              <li>
                <input
                  type="text"
                  value={newCheckboxOption}
                  onChange={(e) => onChangeNewCheckboxOption(e.target.value)}
                />
                <button onClick={onAddOption}>Add Option</button>
                <button onClick={onCancelOption}>Cancel</button>
              </li>
            </ul>
          </div>
        )}
        {fieldType === "datePicker" && (
          <div>
            <h3>Date Picker:</h3>
            <input type="date" />
          </div>
        )}

        {fieldType === "rangePicker" && (
          <div>
            <h3>Range Picker:</h3>
            <input type="range" />
          </div>
        )}

        {fieldType === "radioOption" && (
          <div>
            <h3>Radio Option:</h3>
            <ul>
              {checkboxOptions.map((option) => (
                <li key={option.id}>{option.option}</li>
              ))}
              <li>
                <input
                  type="text"
                  value={newCheckboxOption}
                  onChange={(e) => onChangeNewCheckboxOption(e.target.value)}
                />
                <button onClick={onAddOption}>Add Option</button>
                <button onClick={onCancelOption}>Cancel</button>
              </li>
            </ul>
          </div>
        )}
      </div>
    </>
  );
};

const CreateAgentForm = () => {
  const [fieldType, setFieldType] = useState("checkbox"); // Default field type
  const [agentTitle, setAgentTitle] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  const [checkboxOptions, setCheckboxOptions] = useState([]);
  const [newCheckboxOption, setNewCheckboxOption] = useState("");

  const handleTitleChange = (e) => {
    setAgentTitle(e.target.value);
  };

  const handleDeleteOption = (optionId) => {
    setCheckboxOptions(
      checkboxOptions.filter((option) => option.id !== optionId)
    );
  };
  const handleSaveAgent = () => {
    console.log("Saved Agent:", {
      title: agentTitle,
      isChecked,
      checkboxOptions,
    });
  };

  const handleAddCheckbox = () => {
    setCheckboxOptions([
      ...checkboxOptions,
      { id: Date.now(), option: "Option 1" },
    ]);
  };

  const handleAddOption = () => {
    setCheckboxOptions([
      ...checkboxOptions,
      { id: Date.now(), option: newCheckboxOption },
    ]);
    setNewCheckboxOption("");
  };

  const handleCancelOption = () => {
    setNewCheckboxOption("");
    setIsChecked(false);
  };

  return (
    <div className="create-agent-form-container">
      <div className="left-side">
        {/* Default Form Message */}
        <DefaultFormMessage
          fieldType={fieldType}
          isChecked={isChecked}
          onDeleteOption={handleDeleteOption}
          checkboxOptions={checkboxOptions}
          onCancelOption={handleCancelOption}
          onAddOption={handleAddOption}
          newCheckboxOption={newCheckboxOption}
          onChangeNewCheckboxOption={setNewCheckboxOption}
        />
      </div>

      <div className="right-side">
        {/* Create Agent Form */}
        <h2>Choose fields</h2>
        <ul className="form-fields">
          {/* Add other static fields here */}

          <li>
            <label htmlFor="checkbox">Checkbox</label>
            <i
              style={{ visibility: "hidden" }}
              nput
              type="checkbox"
              id="checkbox"
              checked={fieldType === "checkbox"}
              onChange={() => setFieldType("checkbox")}
            />
          </li>
          <li>
            <label htmlFor="text">Text</label>
            <input
              style={{ visibility: "hidden" }}
              type="checkbox"
              id="text"
              checked={fieldType === "text"}
              onChange={() => setFieldType("text")}
            />
          </li>
          <li>
            <label htmlFor="multipleCheckbox">Multiple Checkbox</label>
            <input
              style={{ visibility: "hidden" }}
              type="checkbox"
              id="multipleCheckbox"
              checked={fieldType === "multipleCheckbox"}
              onChange={() => setFieldType("multipleCheckbox")}
            />
          </li>
          <li>
            <label htmlFor="datePicker">Date Picker</label>
            <input
              style={{ visibility: "hidden" }}
              type="checkbox"
              id="datePicker"
              checked={fieldType === "datePicker"}
              onChange={() => setFieldType("datePicker")}
            />
          </li>
          <li>
            <label htmlFor="rangePicker">Range Picker</label>
            <input
              style={{ visibility: "hidden" }}
              type="checkbox"
              id="rangePicker"
              checked={fieldType === "rangePicker"}
              onChange={() => setFieldType("rangePicker")}
            />
          </li>
          <li>
            <label htmlFor="radioOption">Radio Option</label>
            <input
              style={{ visibility: "hidden" }}
              type="checkbox"
              id="radioOption"
              checked={fieldType === "radioOption"}
              onChange={() => setFieldType("radioOption")}
            />
          </li>
        </ul>

        <button onClick={handleSaveAgent}>Save</button>
        <button onClick={handleCancelOption}>Cancel</button>
      </div>
    </div>
  );
};

export default CreateAgentForm;
