import Link from "next/link";

export default function Blog() {
    return (
        <div className="mt-10">
            <ul className="text-center text-xl">
                <li>
                    <Link href="/making-a-site" 
                            className="text-dblue font-bold mr-4 transition-all duration-700 hover:text-red">The process of making this website.</Link>July 6th, 2024
                    <Link href="/hello-world" 
                        className="text-dblue font-bold mr-4 transition-all duration-700 hover:text-red">A first post.</Link>July 3rd, 2024
                </li>
            </ul>
        </div>
    );
}