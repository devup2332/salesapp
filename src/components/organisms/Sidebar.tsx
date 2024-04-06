import { twMerge } from "tailwind-merge";
import { useLocation, useNavigate } from "react-router-dom";
import { itemsDashboard } from "../../utils/dataSidebar";
import LogoIcon from "../atoms/LogoIcon";

interface SideBarProps {
  open: boolean;
  setOpen: (open: boolean) => void;
}
const Sidebar = ({ open }: SideBarProps) => {
  const location = useLocation();
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };
  return (
    <div
      className={twMerge(
        "duration-300 py-5 bg-[#0f1316] min-w-16 text-white h-screen overflow-hidden transition-all",
        open ? "w-72" : "w-16",
      )}
    >
      <div className="flex items-center px-5 mb-40 gap-12 justify-between w-fit">
        <div>
          <LogoIcon className="text-white fill-current"/>
        </div>
        <p className="text-2xl font-bold">Salesapp</p>
      </div>

      <ul className="w-72">
        {itemsDashboard.map((item, index) => (
          <li
            key={index}
            onClick={() => {
              if (item.label === "Salir") return logout();
              navigate(item.path!);
            }}
            className={twMerge(
              "cursor-pointer w-full pl-5 pr-24 py-4 flex items-center gap-9 hover:text-primary-color transition-colors",
              item.path === location.pathname && "bg-white text-black",
              item.label === "Salir" && "text-red-600",
            )}
          >
            <item.Icon className="w-5 h-5" />
            <span>{item.label}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
