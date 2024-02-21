import React from "react";
import CodeMirror from "@uiw/react-codemirror";
import { tags as t } from "@lezer/highlight";
import { tokyoNightStormInit } from "@uiw/codemirror-theme-tokyo-night-storm";
import { loadLanguage } from "@uiw/codemirror-extensions-langs";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";

function App() {
  const [value, setValue] = React.useState("<div>Your code here</div>");
  const onChange = React.useCallback((val: any) => {
    setValue(val);
  }, []);
  const currentLanguage = useSelector(
    (state: RootState) => state.compilerSlice.currentLanguage
  );
  return (
    <CodeMirror
      theme={tokyoNightStormInit({
        settings: {
          caret: "#c6c6c6",
          fontFamily: "monospace",
        },
        styles: [{ tag: t.comment, color: "#6272a4" }],
      })}
      value={value}
      height="100vh"
      extensions={[loadLanguage(currentLanguage)!]}
      onChange={onChange}
    />
  );
}
export default App;
