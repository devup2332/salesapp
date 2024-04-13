import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import SalesPage from "./pages/Sales/Sales";
import ProductsPage from "./pages/Products/Products";
import DashboardPage from "./pages/Dashboard/Dashboard";
import LoginPage from "./pages/Login/Login";
import ReportsPage from "./pages/Reports/Reports";

export const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
	},
	{
		path: "dashboard",
		element: <DashboardPage />,
	},
	{
		path: "sales",
		element: <SalesPage />,
	},
	{
		path: "products",
		element: <ProductsPage />,
	},
	{
		path: "reports",
		element: <ReportsPage />,
	},
	{
		path: "login",
		element: <LoginPage />,
	},
]);
