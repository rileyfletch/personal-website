import Link from "next/link";

export default function Blog() {
    return (
        <div className="flex justify-center mt-10">
            <ul className="text-xl space-y-4">
                <li>
                    <Link href="/hello-world" 
                            className="text-dblue font-bold mr-4 transition-all duration-700 hover:text-red">A first post.</Link>July 3rd, 2024
                </li>
            </ul>
        </div>
    );
}