import Adjustments from "./Pages/adjustments/Adjustments";
import Currencies from "./Pages/currencies/Currencies";
import Dashboard from "./Pages/Dashboard";
import Expenses from "./Pages/expenses/Expenses";
import ExpensesCategories from "./Pages/expenses/ExpensesCategories";
import Customers from "./Pages/people/Customers";
import Suppliers from "./Pages/people/Suppliers";
import User from "./Pages/people/User";
import BaseUnit from "./Pages/products/BaseUnit";
import Brands from "./Pages/products/Brands";
import PrintBarCode from "./Pages/products/PrintBarCode";
import ProductCategories from "./Pages/products/ProductCategories";
import Products from "./Pages/products/Products";
import Units from "./Pages/products/Units";
import Quotations from "./Pages/quotation/Quotations";
import Reports from "./Pages/reports/Reports";
import RolesAndPermission from "./Pages/rolesAndPermission/RolesAndPermission";
import Sales from "./Pages/sales/Sales";
import SalesReturn from "./Pages/sales/SalesReturn";
import Settings from "./Pages/settings/Settings";
import WareHouse from "./Pages/warehouse/Warehouse";
import Transfers from "./Pages/transfers/Transfers";
import Purchases from "./Pages/purchases/purchases";
import PurchasesReturn from "./Pages/purchases/PurchasesReturn";
import { MdDashboard} from "react-icons/md";
import { GiBoxUnpacking } from "react-icons/gi";
import { FaBox, FaFileInvoice } from "react-icons/fa";
import { FaBarcode } from "react-icons/fa6";
import { TbPackages } from "react-icons/tb";
export const route = [
  {
    path: "Dashboard",
    element: <Dashboard />,
    permission: "",
    icon: <MdDashboard />
  },
  {
    path: "Products",
    icon:<FaBox />,
    subMenu: [
      {
        path:"Products",
        element: <Products />,
        icon:<FaBox />,
        permission: ""
      },
      {
        path: "Product Categories",
        element: <ProductCategories />,
        icon:<GiBoxUnpacking />,
        permission: ""
      },
      {
        path: "Base Unit",
        element: <BaseUnit />,
        icon:<TbPackages />,
        permission: ""
      },
      {
        path: "Brands",
        element: <Brands />,
        permission: ""
      },
      {
        path: "Print BarCode",
        element: <PrintBarCode />,
        icon:<FaBarcode />,
        permission: ""
      },
      {
        path: "Units",
        element: <Units />,
        permission: ""
      }
    ]
  },
  {
    path: "Quotations",
    element: <Quotations />,
    icon:<FaFileInvoice />,
    permission: ""
  },
  {
    path: "Adjustments",
    element: <Adjustments />,
    icon:<FaFileInvoice />,
    permission: ""
  },
  {
    path: "Currencies",
    element: <Currencies />,
    permission: ""
  },
  {
    path: "Expenses",
    element: <Expenses />,
    permission: "",
    subMenu: [
      {
        path: "Expenses Categories",
        element: <ExpensesCategories />,
        permission: ""
      }
    ]
  },
  {
    path: "People",
    subMenu: [
      {
        path: "Customers",
        element: <Customers />,
        permission: ""
      },
      {
        path: "Suppliers",
        element: <Suppliers />,
        permission: ""
      },
      {
        path: "User",
        element: <User />,
        permission: ""
      }
    ]
  },
  {
    path: "Purchases",
    element: <Purchases />,
    permission: "",
    subMenu: [
      {
        path: "Purchases Return",
        element: <PurchasesReturn />,
        permission: ""
      }
    ]
  },
  {
    path: "Reports",
    element: <Reports />,
    permission: ""
  },
  {
    path: "Role / Permission",
    element: <RolesAndPermission />,
    permission: ""
  },
  {
    path: "Sales",
    element: <Sales />,
    permission: "",
    subMenu: [
      {
        path: "Sales Return",
        element: <SalesReturn />,
        permission: ""
      }
    ]
  },
  {
    path: "Settings",
    element: <Settings />,
    permission: ""
  },
  {
    path: "Transfers",
    element: <Transfers />,
    permission: ""
  },
  {
    path: "WareHouse",
    element: <WareHouse />,
    permission: ""
  }
];
export default route