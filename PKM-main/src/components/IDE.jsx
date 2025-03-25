// import { useState, useEffect } from "react";
// import Editor from "@monaco-editor/react";

// const LANGUAGE_MAP = {
//   python: 71,
//   javascript: 63,
//   cpp: 54,
//   java: 62,
// };

// const API_KEY = "";
// const SUBMISSION_URL = "https://judge0-ce.p.rapidapi.com/submissions";
// const RESULT_URL = "https://judge0-ce.p.rapidapi.com/submissions/";

// export default function IDE() {
//   const [code, setCode] = useState("print(\"Hello, World!\")");
//   const [language, setLanguage] = useState("python");
//   const [theme, setTheme] = useState("vs-dark");
//   const [input, setInput] = useState("");
//   const [output, setOutput] = useState("");
//   const [status, setStatus] = useState("Waiting...");

//   const executeCode = async () => {
//     setStatus("Processing...");
//     setOutput("Running...");

//     if (!LANGUAGE_MAP[language]) {
//       setOutput("Unsupported Language!");
//       return;
//     }

//     const payload = {
//       source_code: code,
//       language_id: LANGUAGE_MAP[language],
//       stdin: input,
//       redirect_stderr_to_stdout: true,
//     };

//     try {
//       const response = await fetch(SUBMISSION_URL, {
//         method: "POST",
//         headers: {
//           "X-RapidAPI-Host": "judge0-ce.p.rapidapi.com",
//           "X-RapidAPI-Key": API_KEY,
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(payload),
//       });
//       const data = await response.json();
//       if (response.status === 201) {
//         getExecutionResult(data.token);
//       } else {
//         setOutput("Error: Could not submit code!");
//       }
//     } catch (error) {
//       setOutput("Error: Failed to connect to API.");
//     }
//   };

//   const getExecutionResult = async (token) => {
//     while (true) {
//       try {
//         const response = await fetch(`${RESULT_URL}${token}?base64_encoded=true`, {
//           headers: {
//             "X-RapidAPI-Host": "judge0-ce.p.rapidapi.com",
//             "X-RapidAPI-Key": API_KEY,
//           },
//         });
//         const result = await response.json();

//         if (result.status && [1, 2].includes(result.status.id)) {
//           await new Promise((resolve) => setTimeout(resolve, 1000));
//         } else {
//           setOutput(result.stdout ? atob(result.stdout) : "Error: " + (result.stderr ? atob(result.stderr) : result.message));
//           setStatus("Done");
//           break;
//         }
//       } catch (error) {
//         setOutput("Error fetching result.");
//         break;
//       }
//     }
//   };

//   return (
//     <div className="p-4 bg-gray-900 text-white min-h-screen">
//         <br></br>
//         <br></br>
//       <div className="flex justify-between mb-4">
//         <select value={language} onChange={(e) => setLanguage(e.target.value)} className="p-2 bg-gray-700 rounded">
//           <option value="cpp">C++</option>
//           <option value="java">Java</option>
//           <option value="python">Python</option>
//           <option value="javascript">JavaScript</option>
//         </select>
//         <select value={theme} onChange={(e) => setTheme(e.target.value)} className="p-2 bg-gray-700 rounded">
//           <option value="vs-dark">Dark</option>
//           <option value="light">Light</option>
//           <option value="hc-black">High Contrast</option>
//         </select>
//       </div>

//       <Editor height="400px" language={language} theme={theme} value={code} onChange={setCode} className="border rounded" />

//       <textarea value={input} onChange={(e) => setInput(e.target.value)} placeholder="Custom Input..." className="w-full bg-gray-800 p-2 mt-4 rounded" />

//       <button onClick={executeCode} className="bg-green-500 hover:bg-green-700 px-4 py-2 mt-4 rounded">Run</button>

//       <div className="mt-4 p-2 bg-gray-800 rounded">
//         <h3>Output:</h3>
//         <pre>{output}</pre>
//       </div>
//       <div className="mt-2">Status: {status}</div>
//     </div>
//   );
// }

import { useState, useEffect } from "react";
import Editor from "@monaco-editor/react";

const LANGUAGE_MAP = {
  python: 71,
  javascript: 63,
  cpp: 54,
  java: 62,
};

const API_KEY = "";
const SUBMISSION_URL = "https://judge0-ce.p.rapidapi.com/submissions";
const RESULT_URL = "https://judge0-ce.p.rapidapi.com/submissions/";

export default function IDE() {
  const [code, setCode] = useState('print("Hello, World!")');
  const [language, setLanguage] = useState("python");
  const [theme, setTheme] = useState("vs-dark");
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [status, setStatus] = useState("Waiting...");

  const executeCode = async () => {
    setStatus("Processing...");
    setOutput("Running...");

    if (!LANGUAGE_MAP[language]) {
      setOutput("Unsupported Language!");
      return;
    }

    const payload = {
      source_code: code,
      language_id: LANGUAGE_MAP[language],
      stdin: input,
      redirect_stderr_to_stdout: true,
    };

    try {
      const response = await fetch(SUBMISSION_URL, {
        method: "POST",
        headers: {
          "X-RapidAPI-Host": "judge0-ce.p.rapidapi.com",
          "X-RapidAPI-Key": API_KEY,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });
      const data = await response.json();
      if (response.status === 201) {
        getExecutionResult(data.token);
      } else {
        setOutput("Error: Could not submit code!");
      }
    } catch (error) {
      setOutput("Error: Failed to connect to API.");
    }
  };

  const getExecutionResult = async (token) => {
    while (true) {
      try {
        const response = await fetch(
          `${RESULT_URL}${token}?base64_encoded=true`,
          {
            headers: {
              "X-RapidAPI-Host": "judge0-ce.p.rapidapi.com",
              "X-RapidAPI-Key": API_KEY,
            },
          }
        );
        const result = await response.json();

        if (result.status && [1, 2].includes(result.status.id)) {
          await new Promise((resolve) => setTimeout(resolve, 1000));
        } else {
          setOutput(
            result.stdout
              ? atob(result.stdout)
              : "Error: " +
                  (result.stderr ? atob(result.stderr) : result.message)
          );
          setStatus("Done");
          break;
        }
      } catch (error) {
        setOutput("Error fetching result.");
        break;
      }
    }
  };

  // Function to submit code to backend
  const handleSubmit = async () => {
    try {
      const token = localStorage.getItem("token"); // ✅ Get stored token
      if (!token) {
        alert("No token found. Please log in again.");
        return;
      }

      // ✅ Create a blob from the code string and form a file
      const blob = new Blob([code], { type: "text/plain" });
      const file = new File([blob], "code.java", { type: "text/plain" });

      const formData = new FormData();
      formData.append("javaFile", file); // ✅ Ensure field name matches multer config

      const response = await fetch(
        "http://localhost:5000/api/assignments/submit",
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${token}`, // ✅ Auth header (NO Content-Type for FormData)
          },
          body: formData, // ✅ Send FormData, not JSON
        }
      );

      const result = await response.json();
      console.log("Response from submit:", result);

      if (response.status === 401) {
        alert("Invalid token. Please log in again.");
      } else {
        alert(result.message || "Code submitted successfully!");
      }
    } catch (error) {
      console.error("Error submitting code:", error);
      alert("Failed to submit code.");
    }
  };

  return (
    <div className="p-4 bg-gray-900 text-white min-h-screen">
      <br />
      <br />
      <div className="flex justify-between mb-4">
        <select
          value={language}
          onChange={(e) => setLanguage(e.target.value)}
          className="p-2 bg-gray-700 rounded"
        >
          <option value="cpp">C++</option>
          <option value="java">Java</option>
          <option value="python">Python</option>
          <option value="javascript">JavaScript</option>
        </select>
        <select
          value={theme}
          onChange={(e) => setTheme(e.target.value)}
          className="p-2 bg-gray-700 rounded"
        >
          <option value="vs-dark">Dark</option>
          <option value="light">Light</option>
          <option value="hc-black">High Contrast</option>
        </select>
      </div>

      <Editor
        height="400px"
        language={language}
        theme={theme}
        value={code}
        onChange={setCode}
        className="border rounded"
      />

      <textarea
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Custom Input..."
        className="w-full bg-gray-800 p-2 mt-4 rounded"
      />

      <button
        onClick={executeCode}
        className="bg-green-500 hover:bg-green-700 px-4 py-2 mt-4 rounded"
      >
        Run
      </button>

      {/* New Submit Button */}
      <button
        onClick={handleSubmit}
        className="bg-blue-500 hover:bg-blue-700 px-4 py-2 mt-4 ml-2 rounded"
      >
        Submit
      </button>

      <div className="mt-4 p-2 bg-gray-800 rounded">
        <h3>Output:</h3>
        <pre>{output}</pre>
      </div>
      <div className="mt-2">Status: {status}</div>
    </div>
  );
}
