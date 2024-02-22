import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import CodeEditor from '../components/CodeEditor'
import CodeHeader from "@/components/CodeHeader";
import RenderCode from "@/components/RenderCode";

const Compiler = () => {
  return (
    <ResizablePanelGroup direction="horizontal">
      <ResizablePanel className="h-[calc(100dvh-60px)] min-w-[400px]">
        <CodeHeader />
        <CodeEditor />
      </ResizablePanel>
      <ResizableHandle />
      <ResizablePanel className="h-[calc(100dvh-60px)] min-w-[400px]">
        <RenderCode />
      </ResizablePanel>
    </ResizablePanelGroup>
  );
};
export default Compiler;
