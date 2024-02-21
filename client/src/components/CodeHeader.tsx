import { ArrowUpRightFromSquare, Save } from "lucide-react";
import { Button } from "./ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useDispatch, useSelector } from "react-redux";
import { updateCurrentLanguage, CompilerSliceStateType } from "@/redux/slices/compilerSlice";
import { RootState } from "@/redux/store";

const CodeHeader = () => {
  const dispatch = useDispatch();
  const currentLanguage = useSelector(
    (state: RootState) => state.compilerSlice.currentLanguage
  );
  return (
    <div className="code-header h-[60px] p-2 w-full flex justify-between items-center gap-1">
      <div className="code-header-buttons flex justify-center items-center gap-2">
        <Button variant="save" className="flex gap-1">
          <Save size={16} />
          Save
        </Button>
        <Button variant="secondary" className="flex gap-1">
          <ArrowUpRightFromSquare size={16} />
          Share
        </Button>
      </div>
      <div className="language-container flex justify-center items-center gap-2">
        <p>Select Language: </p>
        <Select
          defaultValue={currentLanguage}
          onValueChange={(val) => dispatch(updateCurrentLanguage(val as CompilerSliceStateType['currentLanguage']))}
        >
          <SelectTrigger className="w-[120px] bg-gray-800 focus:ring-0">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="html">HTML</SelectItem>
            <SelectItem value="css">CSS</SelectItem>
            <SelectItem value="javascript">JavaScript</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
};
export default CodeHeader;
