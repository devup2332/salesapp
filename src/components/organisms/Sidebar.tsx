import { FaChartColumn } from "react-icons/fa6";
import { FaCube } from "react-icons/fa";
import { FaMoneyBill } from "react-icons/fa";
import { FaTableList } from "react-icons/fa6";
import { FaUserAlt } from "react-icons/fa";
import { IoSettingsSharp } from "react-icons/io5";
import { MdSpaceDashboard } from "react-icons/md";
import { IoExitSharp } from "react-icons/io5";
import { twMerge } from "tailwind-merge";
import { useLocation, useNavigate } from "react-router-dom";

const itemsDashboard = [
  {
    label: "Dashboard",
    path: "/dashboard",
    Icon: MdSpaceDashboard,
  },
  {
    label: "Ventas",
    path: "/sales",
    Icon: FaMoneyBill,
  },
  {
    label: "Productos",
    path: "/products",
    Icon: FaCube,
  },
  {
    label: "Reportes",
    path: "/reports",
    Icon: FaTableList,
  },
  {
    label: "Perfil",
    path: "/profile",
    Icon: FaUserAlt,
  },
  {
    label: "Configuracion",
    path: "/settings",
    Icon: IoSettingsSharp,
  },
  {
    label: "Salir",
    Icon: IoExitSharp,
  },
];

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
        open ? "w-72" : "w-16"
      )}
    >
      <div className="flex items-center px-5 mb-40 gap-12 justify-between w-fit">
        <div>
          <FaChartColumn className="w-6 h-6" />
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
              item.label === "Salir" && "text-red-600"
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
