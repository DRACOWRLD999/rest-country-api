import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "REST COUNTRIES API",
  description: "A simple app to get information about countries",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="bg-zinc-50 h-max">
        <nav className="flex flex-row  justify-between p-5 bg-white h-16 ">
          <h1 className="ml-8 text-black font-bold text-xl">Where in the world?</h1>
            <button className="text-black font-bold">
              <div className="flex items-center">
                <img src="/moon.svg" alt="moon icon" className="w-5 h-5 mr-2"/>
                <span className="text-sm mr-8">Dark Mode</span>
              </div>
            </button>
          </nav>
        {children}
        </div>
        </body>
    </html>
  );
}
