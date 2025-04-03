import {
  FaCloudSun,
  FaMoneyBillWave,
  FaTasks,
  FaCalendarAlt,
  FaHome,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const menuItems = [
    { icon: <FaHome />, label: "خانه", path: "/home" },
    { icon: <FaMoneyBillWave />, label: "مدیریت بودجه", path: "/budget" },
    { icon: <FaTasks />, label: "تسک‌ها", path: "/tasks" },
    { icon: <FaCalendarAlt />, label: "تقویم", path: "/calendar" },
    { icon: <FaCloudSun />, label: "آب و هوا", path: "/weather" },
  ];

  return (
    <aside className="w-56 bg-white border-l border-gray-200 h-screen shadow-md p-4">
      <nav className="flex flex-col gap-4">
        {menuItems.map((item, index) => (
          <Link
            key={index}
            to={item.path}
            className="flex items-center justify-start gap-2 p-2 text-gray-700 hover:bg-gray-100 rounded transition-all font-medium"
          >
            <span className="text-xl font-bold">{item.icon}</span>
            <span>{item.label}</span>
          </Link>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;
