import Link from "next/link"

const NAME = "Michał Pawłowski"
const EMAIL = "miminios20611@gmail.com"

export default function Footer() {
    return (
        <footer className="bg-blue-800 text-gray-300 py-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between">
                    <div>
                        <p>{NAME}</p>
                        <p>E-mail:<Link href="mailto:miminios20611@gmail.com">{EMAIL}</Link></p>
                    </div>
                    <div>
                        <h2 className="text-lg font-semibold text-white">Follow me</h2>
                        <div className="mt-4 flex space-x-4">
                            <a href="#" className="hover:text-white">Facebook</a>
                            <a href="#" className="hover:text-white">Twitter</a>
                            <a href="#" className="hover:text-white">Instagram</a>
                            <a href="#" className="hover:text-white">LinkedIn</a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}