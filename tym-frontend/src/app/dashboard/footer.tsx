import Link from "next/link"

const NAME = "Michał Pawłowski"
const EMAIL = "miminios20611@gmail.com"

export default function Footer() {
    return (
        <footer>
            <p>{NAME}</p>
            <p>E-mail:<Link href="mailto:miminios20611@gmail.com">{EMAIL}</Link></p>
        </footer>
    )
}