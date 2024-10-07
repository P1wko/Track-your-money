import Link from "next/link";

export default function Nav() {
    return (
        <nav className="bg-blue-800">
            <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
                <div className="relative flex items-center justify-between h-16">
                <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
        <div className="flex-shrink-0">
          <a href="/" className="text-white font-bold text-lg">Logo</a>
        </div>
        <div className="hidden sm:block sm:ml-6">
          <div className="flex space-x-4">
            <a href="/" className="text-gray-300 hover:bg-blue-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Home</a>
            <a href="/about" className="text-gray-300 hover:bg-blue-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Profile</a>
            <a href="/services" className="text-gray-300 hover:bg-blue-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Settings</a>
            <a href="/contact" className="text-gray-300 hover:bg-blue-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Help</a>
          </div>
        </div>
                </div>
            </div>
            </div>
        </nav>
    )
}