import React, { useEffect, useState } from "react";
import Sidebar from "../components/organisms/Sidebar";
import { twMerge } from "tailwind-merge";
import HeaderHome from "../components/organisms/HeaderHome";
import { useStore } from "../store";

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
	const boolState = localStorage.getItem("sidebarOpen");
	const themeState = localStorage.getItem("theme");
	const { theme, setTheme } = useStore((state) => state);
	const [open, setOpen] = useState(
		boolState ? (boolState === "1" ? true : false) : false,
	);
	useEffect(() => {
		if (themeState) {
			setTheme(themeState);
		} else {
			setTheme("light");
		}
	}, []);
	return (
		<div
			id="main-container"
			className={twMerge(
				"flex h-screen font-Montserrat bg-main-background text-foreground-color",
				theme,
			)}
		>
			<Sidebar open={open} setOpen={setOpen} />
			<div
				className={twMerge(
					"transition-width overflow-y-auto  m-auto h-screen px-5",
					open ? "w-[calc(100%-18rem)]" : "w-[calc(100%-4rem)]",
				)}
			>
				<div className="max-w-[1920px] m-auto">
					<HeaderHome setOpen={setOpen} open={open} />
					{children}
				</div>
			</div>
		</div>
	);
};

export default MainLayout;
