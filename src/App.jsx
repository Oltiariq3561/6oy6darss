
// 1 SHAKL 


import React, { useState } from "react";

function App() {
  const [number, setNumber] = useState("");
  const [numberData, setNumberData] = useState("");

  function handleClickNumber(e) {
    e.preventDefault();

    if (number == 3) {
      setNumberData("Uchburchak");
      return;
    } else if (number == 4) {
      setNumberData("To'rtburchak");
      return;
    } else if (number == 5) {
      setNumberData("Beshburchak");
      return;
    } else {
      alert("Bunday shakl mavjud emas");
    }
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-md rounded-lg p-6 w-96">
        <h1 className="text-2xl font-bold text-center text-gray-800 mb-4">
          Shaklni aniqlash
        </h1>
        <input
          value={number}
          onChange={(e) => setNumber(e.target.value)}
          type="number"
          placeholder="Raqam kiriting"
          className="border border-gray-300 rounded-lg w-full py-2 px-4 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          onClick={handleClickNumber}
          className="bg-blue-500 text-white font-bold py-2 px-4 rounded-lg w-full hover:bg-blue-600 transition duration-200"
        >
          Shaklni top
        </button>
        <h1 className="mt-4 text-xl font-semibold text-center text-gray-700">
          {numberData}
        </h1>
      </div>
    </div>
  );
}

export default App;





// 2  PAROL 

// import React, { useState } from "react";

// function App() {
//   const [number1, setNumber1] = useState("");
//   const [number2, setNumber2] = useState("");
//   const [numberData, setNumberData] = useState("");

//   function handleClickNumber(e) {
//     e.preventDefault();

//     if (number1 == number2) {
//       setNumberData("Parol mos keldi");
//       return; 
//     } else if (number1 != number2) {
//       setNumberData("Parol mos kelmadi");
//       return;
//     }
//   }

//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
//       <div className="bg-white shadow-md rounded-lg p-6 w-96">
//         <h1 className="text-2xl font-bold text-center text-gray-800 mb-4">
//           Shaklni aniqlash
//         </h1>
//         <input
//           value={number1}
//           onChange={(e) => setNumber1(e.target.value)}
//           type="number"
//           placeholder="Raqam kiriting"
//           className="border border-gray-300 rounded-lg w-full py-2 px-4 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
//         />

//         <input
//           value={number2}
//           onChange={(e) => setNumber2(e.target.value)}
//           type="number"
//           placeholder="Raqam kiriting"
//           className="border border-gray-300 rounded-lg w-full py-2 px-4 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
//         />
//         <button
//           onClick={handleClickNumber}
//           className="bg-blue-500 text-white font-bold py-2 px-4 rounded-lg w-full hover:bg-blue-600 transition duration-200"
//         >
//           Shaklni top
//         </button>
//         <h1 className="mt-4 text-xl font-semibold text-center text-gray-700">
//           {numberData}
//         </h1>
//       </div>
//     </div>
//   );
// }

// export default App;


// 3-masala

// import React, { useState } from "react";

// function App() {
//   const [selectedItems, setSelectedItems] = useState([]);

//   const mevalar = ["Olma", "Banan", "Apelsin"];

//   function handleCheckboxChange(e) {
//     const value = e.target.value;
//     if (selectedItems.includes(value)) {
//       setSelectedItems(selectedItems.filter((meva) => meva !== value));
//     } 
//     else {
//       setSelectedItems([...selectedItems, value]);
//     }
//   }

//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
//       <div className="bg-white shadow-md rounded-lg p-6 w-96">
//         <h1 className="text-2xl font-bold text-center text-gray-800 mb-4">
//           Mevalarni tanlang
//         </h1>
//         <div className="space-y-3">
//           {mevalar.map((meva) => (
//             <label key={meva} className="flex items-center space-x-2">
//               <input
//                 type="checkbox"
//                 value={meva}
//                 onChange={handleCheckboxChange}
//                 className="form-checkbox h-5 w-5 text-blue-600"
//               />
//               <span className="text-gray-700">{meva}</span>
//             </label>
//           ))}
//         </div>
//         <div className="mt-4">
//           {selectedItems.length > 0 ? (
//             <ul className="list-disc list-inside text-gray-600 mt-2">
//               {selectedItems.map((meva) => (
//                 <li key={meva}>{meva}</li>
//               ))}
//             </ul>
//           ) : (   
//           <p></p> 
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }
// export default App;


// 5 MASALA 
// import React, { useState } from "react";

// function App() {
//   const [email, setEmail] = useState("");
//   const [emailMessage, setEmailMessage] = useState("");

//   function handleClickEmail(e) {
//     e.preventDefault();
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

//     if (emailRegex.test(email)) {
//       setEmailMessage("Email to'g'ri");
//     } else {
//       setEmailMessage("Email noto'g'ri formatda");
//     }
//   }

//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
//       <div className="bg-white shadow-md rounded-lg p-6 w-96">
//         <h1 className="text-2xl font-bold text-center text-gray-800 mb-4">
//           Emailni tekshirish
//         </h1>
//         <input
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           type="email"
//           placeholder="Email kiriting"
//           className="border border-gray-300 rounded-lg w-full py-2 px-4 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
//         />
//         <button
//           onClick={handleClickEmail}
//           className="bg-blue-500 text-white font-bold py-2 px-4 rounded-lg w-full hover:bg-blue-600 transition duration-200"
//         >
//           Tekshirish
//         </button>
//         <h1
//           className={`mt-4 text-xl font-semibold text-center ${
//             emailMessage === "Email to'g'ri"
//           }`}
//         >
//           {emailMessage}
//         </h1>
//       </div>
//     </div>
//   );
// }

// export default App;

// 6 MASALA 

// import React, { useState } from "react";

// function App() {
//   const [value1, setValue1] = useState("");
//   const [value2, setValue2] = useState("");
//   function handleSwapValues(e) {
//     e.preventDefault();
//     const temp = value1;
//     setValue1(value2);
//     setValue2(temp);
//   }

//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
//       <div className="bg-white shadow-md rounded-lg p-6 w-96">
//         <h1 className="text-2xl font-bold text-center text-gray-800 mb-4">
//           Qiymatlarni almashtirish
//         </h1>
//         <input
//           value={value1}
//           onChange={(e) => setValue1(e.target.value)}
//           type="text"
//           placeholder="1-qiymatni kiriting"
//           className="border border-gray-300 rounded-lg w-full py-2 px-4 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
//         />
//         <input
//           value={value2}
//           onChange={(e) => setValue2(e.target.value)}
//           type="text"
//           placeholder="2-qiymatni kiriting"
//           className="border border-gray-300 rounded-lg w-full py-2 px-4 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
//         />
//         <button
//           onClick={handleSwapValues}
//           className="bg-blue-500 text-white font-bold py-2 px-4 rounded-lg w-full hover:bg-blue-600 transition duration-200"
//         >
//           Qiymatlarni almashtirish
//         </button>
//       </div>
//     </div>
//   );
// }

// export default App;
