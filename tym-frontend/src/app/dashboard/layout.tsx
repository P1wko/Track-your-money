import Footer from "./footer";
import Nav from "./sidebar";

export default function DashboardLayout({children} : Readonly<{children : React.ReactNode}>) {
    return (
        <div className="flex">
            <Nav />
            <main className="w-full">{children}</main>
        </div>
    )
}