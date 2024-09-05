export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="py-4 text-center bottom-0 left-0 w-full">
            <p className="text-sm">
                © {currentYear} Riley Fletcher. Last updated 9/5/24.
            </p>
        </footer>
    )
}