export default function Footer() {
    return (
        <footer className="text-white py-4">
          <div className="container mx-auto text-center transition-colors duration-700 hover:text-engineering">
            &copy; {new Date().getFullYear()} Riley Fletcher
          </div>
        </footer>
    )
}