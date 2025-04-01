import { useNavigate } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
import { FiChevronDown, FiLogOut, FiUser } from "react-icons/fi";

const Header = () => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const [username, setUsername] = useState<string | null>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("username");
    navigate("/signin");
  };

  useEffect(() => {
    const storedUsername = localStorage.getItem("username");
    if (storedUsername) {
      setUsername(storedUsername);
    }
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="bg-gray-800 text-white px-6 py-4 flex justify-between items-center">
      <h1 className="flex items-center gap-2 text-xl font-bold">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8 text-orange-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9.75 17L3 12l6.75-5v10zm4.5 0L21 12l-6.75-5v10z"
          />
        </svg>
        <span>ARI Dashboard</span>
      </h1>
      {/* User Menu */}
      <div className="relative" ref={menuRef}>
        <div
          className="flex items-center gap-2 cursor-pointer"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <FiChevronDown
            className={`transition-transform ${menuOpen ? "rotate-180" : ""}`}
          />
          <span className="font-medium">{username}</span>

          <div className="size-8 rounded-full bg-orange-500 flex items-center justify-center text-white font-bold">
            {username?.charAt(0).toUpperCase()}
          </div>
        </div>
        {menuOpen && (
          <div className="absolute left-0 mt-2 w-40 bg-white text-gray-800 shadow-lg rounded-md z-50">
            <ul className="py-1 text-sm">
              <li>
                <button className="flex items-center w-full px-4 py-2 hover:bg-gray-100">
                  ⚙ تنظیمات
                </button>
              </li>
              <li>
                <button
                  onClick={handleLogout}
                  className="flex items-center w-full px-4 py-2 hover:bg-gray-100 text-red-600"
                >
                  <FiLogOut className="ml-2" />
                  خروج
                </button>
              </li>
            </ul>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;

// import { useNavigate } from "react-router-dom";

// const Header = () => {
//   const navigate = useNavigate();

//   const handleLogout = () => {
//     localStorage.removeItem("token");
//     navigate("/signin");
//   };

//   return (
//     <header className="bg-gray-800 text-white px-6 py-4 flex justify-between items-center">
//       <h1 className="flex items-center justify-center gap-1 text-xl font-bold">
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           className="h-10 w-10 text-orange-500 mr-2"
//           fill="none"
//           viewBox="0 0 24 24"
//           stroke="currentColor"
//         >
//           <path
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             strokeWidth={2}
//             d="M9.75 17L3 12l6.75-5v10zm4.5 0L21 12l-6.75-5v10z"
//           />
//         </svg>
//         <span>ARI Dashboard</span>
//       </h1>
//       <button
//         onClick={handleLogout}
//         className="bg-red-500 px-4 py-2 rounded hover:bg-red-600 transition"
//       >
//         خروج
//       </button>
//     </header>
//   );
// };

// export default Header;
