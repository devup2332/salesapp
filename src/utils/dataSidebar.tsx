import { FaUserAlt } from "react-icons/fa";
import { FaCube, FaMoneyBill, FaTableList } from "react-icons/fa6";
import { IoExitSharp, IoSettingsSharp } from "react-icons/io5";
import { MdSpaceDashboard } from "react-icons/md";

export const itemsDashboard = [
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
