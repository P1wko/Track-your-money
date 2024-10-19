import Link from "next/link";
import { HomeIcon, DocumentTextIcon } from "@heroicons/react/24/outline";

export default function Sidebar() {
    return (
      <div className="h-screen w-64 bg-gray-800 text-white flex flex-col">
        <nav className="flex-1 px-2 py-4 space-y-2">
          <Link href="/dashboard" className="flex items-center px-2 py-2  text-sm font-medium rounded-md hover:bg-gray-700">
            <HomeIcon className="h-6 w-6 mr-3" aria-hidden="true"/>
            Dashboard
          </Link>
          <Link href="/dashboard/history" className="flex items-center px-2 py-2 text-sm font-medium rounded-md hover:bg-gray-700">
            <HomeIcon className="h-6 w-6 mr-3" aria-hidden="true"/>
            History
          </Link>
          <Link href="/dashboard/analitycs" className="flex items-center px-2 py-2 text-sm font-medium rounded-md hover:bg-gray-700">
            <HomeIcon className="h-6 w-6 mr-3" aria-hidden="true"/>
            Analitycs
          </Link>
          <Link href="/dashboard/settings" className="flex items-center px-2 py-2 text-sm font-medium rounded-md hover:bg-gray-700">
            <HomeIcon className="h-6 w-6 mr-3" aria-hidden="true"/>
            Settings
          </Link>
        </nav>
      </div>
    )
}