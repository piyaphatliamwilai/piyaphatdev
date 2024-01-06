import { dir } from "console";
import Link from "next/link";

export default function Navbar() {
    return (
        <div className="flex w-[100%] px-24 py-4 bg-black bg-opacity-55">
            <h1 className="text-2xl">piyaphatliamwilai</h1>
            <div className="py-1 fixed right-24 space-x-2">
                <Link legacyBehavior={true} href={"/makex"}>
                    <a className="hover:font-bold">makex</a>
                </Link>
            </div>
        </div>
    )
}