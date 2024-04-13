import CustomCard from "../../components/atoms/Card";
import { Avatar } from "@nextui-org/react";
import { MdSpaceDashboard } from "react-icons/md";
import { FaMoneyBill } from "react-icons/fa";
import { FaBell } from "react-icons/fa";
import { FaArrowUpRightDots } from "react-icons/fa6";
import { FaCube } from "react-icons/fa";
import { PiUsersThreeFill } from "react-icons/pi";

import { barchartdata, chartdata, user, usersSales } from "../../data";
import { AreaChart, BarChart } from "@tremor/react";
import MainLayout from "../../layouts/MainLayout";

	const dataFormatter = (number: number) =>
	`$${Intl.NumberFormat("us").format(number).toString()}`;

const DashboardPage = () => {
	return (
		<MainLayout>
			<div className="grid h-[calc(100%-9rem)] max-h-[900px] grid-cols-10 gap-10 grid-rows-2">
				<CustomCard className="grid col-start-1 col-end-3">
					<Avatar src={user.image} className="w-32 h-32 justify-self-center" />
					<div className="grid gap-1 h-fit justify-self-center">
						<div className="flex gap-5 items-center">
							<MdSpaceDashboard />
							27
						</div>
						<div className="flex gap-5 items-center">
							<FaMoneyBill />
							270
						</div>
						<div className="flex gap-5 items-center">
							<FaBell />
							132
						</div>
					</div>
					<div className="self-end">
						<h2 className="text-3xl mb-3 text-center text-foreground">
							{user.first_name}
						</h2>
						<h3 className="text-center text-foreground/30">{user.type}</h3>
					</div>
				</CustomCard>
				<div className="grid grid-cols-2 col-start-3 col-end-7 gap-10">
					<CustomCard>
						<h1 className="mb-6">Ventas del mes</h1>
						<div className="grid grid-cols-2 items-center gap-10">
							<h2 className="text-5xl font-bold text-primary-color">3500</h2>
							<FaArrowUpRightDots className="w-8 h-8 justify-self-end" />
						</div>
					</CustomCard>
					<CustomCard>
						<h1 className="mb-6">Total de productos</h1>
						<div className="grid grid-cols-2 items-center gap-10">
							<h2 className="text-5xl font-bold text-primary-color">457</h2>
							<FaCube className="w-8 h-8 justify-self-end" />
						</div>
					</CustomCard>
					<CustomCard>
						<h1 className="mb-6">Total de usuarios</h1>
						<div className="grid grid-cols-2 items-center gap-10">
							<h2 className="text-5xl font-bold text-primary-color">125</h2>
							<PiUsersThreeFill className="w-8 h-8 justify-self-end" />
						</div>
					</CustomCard>
				</div>
				<CustomCard className="col-start-7 col-end-11">
					<BarChart
						data={barchartdata}
						index="name"
						categories={["Number of threatened species"]}
						colors={["blue"]}
						valueFormatter={dataFormatter}
						yAxisWidth={48}
						onValueChange={(v) => console.log(v)}
						className="h-full"
					/>
				</CustomCard>
				<CustomCard className="col-start-1 col-end-7">
					<AreaChart
						className="h-full"
						data={chartdata}
						index="date"
						categories={["SemiAnalysis", "The Pragmatic Engineer"]}
						colors={["purple", "rose"]}
						yAxisWidth={60}
						valueFormatter={dataFormatter}
						onValueChange={(v) => console.log(v)}
					/>
				</CustomCard>
				<CustomCard className="col-start-7 col-end-11 overflow-y-scroll">
					<h1 className="text-xl mb-6">Ventas Recientes</h1>
					{usersSales.map((user, index) => {
						return (
							<div className="grid grid-cols-6 py-3 gap-10" key={index}>
								<Avatar src={user.userImage} className="w-14 h-14" />
								<div className="col-start-2 col-end-4">
									<h2 className="">{user.userName}</h2>
								</div>
								<h2 className="text-foreground text-sm col-start-4 col-end-6">
									{user.date}
								</h2>
								<p className="col-start-6 col-end-7 justify-self-end text-green-500">
									S/. {user.cost}
								</p>
							</div>
						);
					})}
				</CustomCard>
			</div>
		</MainLayout>
	);
};

export default DashboardPage;
