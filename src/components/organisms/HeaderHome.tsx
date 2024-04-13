import { FaBell } from "react-icons/fa";
import { FaMoon } from "react-icons/fa";
import { Avatar } from "@nextui-org/react";
import { user } from "../../data";
import { MdOutlineArrowForwardIos } from "react-icons/md";
import { MdOutlineArrowBackIos } from "react-icons/md";
import { useStore } from "../../store";
import { FaSun } from "react-icons/fa";
import { useLocation } from "react-router-dom";
import { itemsDashboard } from "../../utils/dataSidebar";

interface HeaderHomeProps {
  setOpen: (open: boolean) => void;
  open: boolean;
}

const HeaderHome = ({ setOpen, open }: HeaderHomeProps) => {
	const sidebarOpen = localStorage.getItem("sidebarOpen");
	const location = useLocation();
	const { setTheme, theme } = useStore((state) => state);
	return (
		<header className="h-28 flex justify-between w-full">
			<div className="flex gap-5 items-center">
				<button
					onClick={() => {
						setOpen(!open);
						localStorage.setItem("sidebarOpen", open ? "0" : "1");
					}}
				>
					{sidebarOpen === "0" ? (
						<MdOutlineArrowForwardIos className="w-5 h-5" />
					) : (
						<MdOutlineArrowBackIos className="w-5 h-5" />
					)}
				</button>
				<h1 className="text-2xl">
					{location.pathname !== "/dashboard" ? (
						itemsDashboard.find((item) => item.path === location.pathname)
							?.label
					) : (
						<>
              Bienvenido <span className="font-bold">{user.first_name}</span>
						</>
					)}
				</h1>
			</div>
			<div className="flex gap-6 items-center">
				<button>
					<FaBell className="w-5 h-5" />
				</button>
				<button
					onClick={() => {
						localStorage.setItem("theme", theme === "light" ? "dark" : "light");
						setTheme(theme === "light" ? "dark" : "light");
					}}
				>
					{theme === "light" ? (
						<FaMoon className="w-5 h-5" />
					) : (
						<FaSun className="w-5 h-5" />
					)}
				</button>
				<Avatar src={user.image} />
			</div>
		</header>
	);
};

export default HeaderHome;
