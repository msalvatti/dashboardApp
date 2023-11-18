import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAdjust, faHome, faDashboard, faBars } from "@fortawesome/free-solid-svg-icons";
import { useTheme } from "../context/themeContext";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const { isDarkTheme, setIsDarkTheme } = useTheme();
  const router = useRouter();

  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const toggleTheme = () => {
    setIsDarkTheme((prevState) => !prevState);
  };

  const menuItems = [
    {
      href: "/",
      title: "Home",
      icon: faHome,
    },
    {
      href: "/dashboard",
      title: "Dashboard",
      icon: faDashboard,
    },
  ];

  return (
    <div className={`min-h-screen flex flex-col ${isDarkTheme ? "dark" : ""}`}>
      <header
        className={`sticky top-0 h-14 flex justify-center items-center font-semibold uppercase ${
          isDarkTheme ? "bg-gray-dark-800 text-white" : "bg-gray-dark-100  text-gray-dark-700"
        }`}
      >
        <title>Real-Time Dashboard Application</title>
        <button
          className={`fixed right-4 p-2 rounded-full cursor-pointer ${
            isDarkTheme ? "text-gray-dark-300" : "text-gray-dark-700"
          }`}
          onClick={toggleTheme}
        >
          <FontAwesomeIcon icon={faAdjust} size="lg" />
        </button>
        <button
          className={`fixed left-4 p-2 rounded-full cursor-pointer ${
            isDarkTheme ? "text-gray-dark-300" : "text-gray-dark-700"
          }`}
          onClick={toggleSidebar}
        >
          <FontAwesomeIcon icon={faBars} size="lg" />
        </button>
      </header>
      <div className={`flex flex-col md:flex-row flex-1 ${isDarkTheme ? "bg-gray-dark-800" : "bg-gray-dark-100"}`}>
        {isSidebarOpen && (
          <aside className={`w-full md:w-60 ${isDarkTheme ? "bg-gray-dark-900" : "bg-gray-dark-200"} rounded-lg`}>
            <nav>
              <ul>
                {menuItems.map(({ href, title, icon }) => (
                  <li className="m-2" key={title}>
                    <Link href={href}>
                      <div
                        className={`flex p-2 rounded cursor-pointer text-sm
                          ${
                            isDarkTheme
                              ? router.asPath !== href
                                ? "hover:bg-gray-dark-800 hover:text-gray-dark-500 transition-colors duration-300"
                                : "hover:bg-blue-300 hover:text-blue-800 transition-colors duration-300"
                              : router.asPath !== href
                              ? "hover:bg-gray-dark-300 hover:text-gray-dark-900 transition-colors duration-300"
                              : "hover:bg-blue-300 hover:text-blue-800 transition-colors duration-300"
                          } 
                          ${
                            isDarkTheme
                              ? router.asPath === href
                                ? "bg-blue-300 text-blue-800"
                                : "bg-gray-dark-900 text-gray-dark-400"
                              : router.asPath === href
                              ? "bg-blue-200 text-blue-500"
                              : "bg-gray-dark-200 text-gray-dark-600"
                          }`}
                      >
                        <FontAwesomeIcon icon={icon} className="mr-2 mt-1" /> {title}
                      </div>
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </aside>
        )}

        <main className={`flex-1 ${isDarkTheme ? "bg-gray-dark-800" : "bg-gray-dark-100"}`}>{children}</main>
      </div>
    </div>
  );
}
