import { RootState } from "@/redux/store";
import { useSelector } from "react-redux";

const RenderCode = () => {
  const fullCode = useSelector(
    (state: RootState) => state.compilerSlice.fullCode
  );
  const combinedCode = `<html><style>${fullCode.css}</style><body>${fullCode.html}</body><script>${fullCode.javascript}</script></body></html>`;
  const iframeCode = `data: text/html; charset=utf-8, ${encodeURIComponent(
    combinedCode
  )}`;
  return (
    <div>
      <iframe className="w-full h-[calc(100dvh-60px)]" src={iframeCode} />
    </div>
  );
};
export default RenderCode;
