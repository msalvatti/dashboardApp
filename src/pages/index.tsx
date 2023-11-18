import { useTheme } from "../context/themeContext";

export default function Home() {
  const { isDarkTheme } = useTheme();

  return (
    <div className="flex h-full flex-col items-center">
      <div className={`flex justify-center items-center ${isDarkTheme ? "text-white" : "text-black"}`}>
        <h1 className="text-4xl font-bold">Home</h1>
      </div>
      <div className={`flex justify-center items-center text-center ${isDarkTheme ? "text-white" : "text-black"}`}>
        <h1 className="text-2xl mt-20 font-bold">Welcome to the Real-Time Dashboard Application!</h1>
      </div>
      <div className={`flex justify-center items-center text-center ${isDarkTheme ? "text-white" : "text-black"}`}>
        <h1 className="text-lg mt-20">
          This project aims to create a responsive and customizable dashboard for real-time data display using Next.js
          13, TailwindCSS, and TypeScript.
        </h1>
      </div>
    </div>
  );
}
