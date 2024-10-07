import Link from "next/link";

export default function Nav() {
    return (
        <nav>
            <ul>
                <li><Link href="/">Home</Link></li>
                <li><Link href="/">Account</Link></li>
                <li><Link href="/">Settings</Link></li>
            </ul>
        </nav>
    )
}