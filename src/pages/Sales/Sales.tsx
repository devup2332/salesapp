import MainLayout from "../../layouts/MainLayout";
import CustomInput from "../../components/atoms/CustomInput";
import CustomSelect from "../../components/atoms/CustomSelect";
import CustomButton from "../../components/atoms/CustomButton";
import { IoMdAdd } from "react-icons/io";
import { FaRegEye } from "react-icons/fa";
import { FaPencilAlt } from "react-icons/fa";
import { FaTrashAlt } from "react-icons/fa";
import {
	Chip,
	Pagination,
	Table,
	TableBody,
	TableCell,
	TableColumn,
	TableHeader,
	TableRow,
} from "@nextui-org/react";
import { IDataTableSales, dataTableSales } from "../../utils/dataTable";
import { useStore } from "../../store";
import { useEffect, useState } from "react";

const fechas = [
	{
		value: 0,
		label: "Ultimas 24 horas",
	},
	{
		value: 1,
		label: "Ultimos 7 dias",
	},
	{
		value: 2,
		label: "Ultimo mes",
	},
	{
		value: 3,
		label: "Ultimo año",
	},
];

const estados = [
	{
		value: 0,
		label: "Todos",
	},
	{
		value: 1,
		label: "En proceso",
	},
	{
		value: 2,
		label: "Completado",
	},
	{
		value: 3,
		label: "Cancelado",
	},
];

enum colorsBadgeOptions {
	success = "success",
	cancelled = "danger",
	pending = "warning",
}

const SalesPage = () => {
	const [page, setPage] = useState(1);
	const [items, setItems] = useState<IDataTableSales[]>([]);
	const theme = useStore((state) => state.theme);
	const rowsPerPage = 10;
	const pages = Math.ceil(dataTableSales.length / rowsPerPage);

	useEffect(() => {
		const start = (page - 1) * rowsPerPage;
		const end = start + rowsPerPage;
		setItems(dataTableSales.slice(start, end));
	}, [page]);

	return (
		<MainLayout>
			<div className="grid gap-5 w-full">
				<div className="flex justify-between">
					<div className="flex gap-5 w-7/12">
						<CustomInput label="Responsable" type="text" />
						<CustomSelect label="Rango de venta" data={fechas} />
						<CustomSelect label="Estado" data={estados} />
					</div>
					<CustomButton color="primary" className="w-40 bg-primary-color">
						<IoMdAdd className="w-5 h-5" /> Nueva Venta
					</CustomButton>
				</div>
				<Table
					selectionMode="multiple"
					bottomContent={
						<div className="w-full flex justify-center">
							<Pagination
								isCompact
								showControls
								color="primary"
								page={page}
								total={pages}
								onChange={(page) => setPage(page)}
							/>
						</div>
					}
					classNames={{
						wrapper: theme === "dark" ? "bg-secondary-background" : "",
					}}
				>
					<TableHeader>
						<TableColumn>#</TableColumn>
						<TableColumn>Responsable</TableColumn>
						<TableColumn>Fecha</TableColumn>
						<TableColumn>Estado</TableColumn>
						<TableColumn>Acciones</TableColumn>
					</TableHeader>
					<TableBody>
						{items.map((item, index) => {
							return (
								<TableRow key={item.id}>
									<TableCell>{index + 1}</TableCell>
									<TableCell>{item.author}</TableCell>
									<TableCell>{item.date}</TableCell>
									<TableCell>
										<Chip
											size="md"
											color={colorsBadgeOptions[item.state]}
											className=""
										>
											{item.state}
										</Chip>
									</TableCell>
									<TableCell className="flex gap-3">
										<CustomButton
											isIconOnly
											variant="flat"
											className="w-10 h-10 "
											color="primary"
										>
											<FaRegEye className="w-5 h-5 text-foreground-color" />
										</CustomButton>
										<CustomButton
											isIconOnly
											variant="flat"
											className="w-10 h-10 "
											color="primary"
										>
											<FaPencilAlt className="w-5 h-5 text-foreground-color" />
										</CustomButton>
										<CustomButton
											isIconOnly
											variant="flat"
											className="w-10 h-10 "
											color="danger"
										>
											<FaTrashAlt className="w-5 h-5 text-danger" />
										</CustomButton>
									</TableCell>
								</TableRow>
							);
						})}
					</TableBody>
				</Table>
			</div>
		</MainLayout>
	);
};

export default SalesPage;
