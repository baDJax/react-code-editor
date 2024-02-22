import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface CompilerSliceStateType {
  fullCode: { html: string; css: string; javascript: string };
  currentLanguage: "html" | "css" | "javascript";
}

const initialState: CompilerSliceStateType = {
  fullCode: {
    html: `<html lang="en">
<body>
    <div class="container">
        <h1>Counter App</h1>
        <div id="counter">0</div>
        <button id="incrementBtn">Increment</button>
        <button id="decrementBtn">Decrement</button>
    </div>
</body>
</html>`,
    css: `body {
  font-family: Arial, sans-serif;
  background-color: #f4f4f4;
}

.container {
  text-align: center;
  margin-top: 100px;
}

#counter {
  font-size: 36px;
  margin-bottom: 20px;
}
    
button {
  padding: 10px 20px;
  font-size: 18px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}
    
button#incrementBtn {
  background-color: #007bff;
  color: #fff;
  margin-right: 10px;
}
    
button#incrementBtn:hover {
  background-color: #0056b3;
}
    
button#decrementBtn {
  background-color: #dc3545;
  color: #fff;
}
    
button#decrementBtn:hover {
  background-color: #c82333;
}`,

    javascript: `const counter = document.getElementById('counter');
const incrementBtn = document.getElementById('incrementBtn');
const decrementBtn = document.getElementById('decrementBtn');
let count = 0;

function incrementCounter() {
    count++;
    counter.textContent = count;
}

function decrementCounter() {
    count--;
    counter.textContent = count;
}

incrementBtn.addEventListener('click', incrementCounter);
decrementBtn.addEventListener('click', decrementCounter);
`,
  },
  currentLanguage: "html",
};

const compilerSlice = createSlice({
  name: "compilerSlice",
  initialState,
  reducers: {
    updateCurrentLanguage: (
      state,
      action: PayloadAction<CompilerSliceStateType["currentLanguage"]>
    ) => {
      state.currentLanguage = action.payload;
    },
    updateCode: (state, action: PayloadAction<string>) => {
      state.fullCode[state.currentLanguage] = action.payload;
    },
  },
});

export default compilerSlice.reducer;
export const { updateCurrentLanguage, updateCode } = compilerSlice.actions;
