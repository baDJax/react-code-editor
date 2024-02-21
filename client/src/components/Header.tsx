import { Link } from "react-router-dom";
import { Button } from "./ui/button";
// import { ModeToggle } from "./mode-toggle";

const Header = () => {
  return (
    <nav className="w-full h-[60px] bg-gray-900 text-white p-3 flex justify-between items-center">
      <Link to="/">
        <h2 className="font-bold">Online Code Editor</h2>
      </Link>
      <ul className="flex gap-2">
        <li>
          <Link to="/compiler">
            <Button variant="secondary">Compiler</Button>
          </Link>
        </li>
        {/* <li>
          <ModeToggle />
        </li> */}
      </ul>
    </nav>
  );
};
export default Header;
