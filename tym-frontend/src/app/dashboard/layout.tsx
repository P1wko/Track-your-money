import Footer from "./footer";
import Nav from "./navbar";

export default function DashboardLayout({children} : Readonly<{children : React.ReactNode}>) {
    return (
        <div>
            <Nav />
            <main>{children}</main>
            <Footer />
        </div>
    )
}