import React from "react";
import CodeMirror from "@uiw/react-codemirror";
import { tags as t } from "@lezer/highlight";
import { tokyoNightStormInit } from "@uiw/codemirror-theme-tokyo-night-storm";
import { loadLanguage } from "@uiw/codemirror-extensions-langs";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { updateCode } from "@/redux/slices/compilerSlice";

function App() {
  const currentLanguage = useSelector(
    (state: RootState) => state.compilerSlice.currentLanguage
  );
  const fullCode = useSelector(
    (state: RootState) => state.compilerSlice.fullCode
  );
  const dispatch = useDispatch();

  const onChange = React.useCallback((value: string) => {
    // setValue(value);
    dispatch(updateCode(value));
  }, []);
  return (
    <CodeMirror
      value={fullCode[currentLanguage]}
      theme={tokyoNightStormInit({
        settings: {
          caret: "#c6c6c6",
          fontFamily: "monospace",
        },
        styles: [{ tag: t.comment, color: "#6272a4" }],
      })}
      extensions={[loadLanguage(currentLanguage)!]}
      height="calc(100vh - 120px)"
      onChange={onChange}
    />
  );
}
export default App;
