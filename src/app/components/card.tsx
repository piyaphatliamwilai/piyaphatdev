'use client'

import Link from "next/link"

export default function Card({
    name, langs, link, about
}: {
    name: string,
    langs: string,
    link: string,
    about: string
}) {
    return (
        <div className="h-max bg-white bg-opacity-5 outline outline-1 outline-zinc-600 p-8 space-y-3">
            <h1 className="text-3xl font-bold">{name}</h1>
            <h2 className="text-zinc-300 text-l">Language: {langs}</h2>
            <h2 className="text-zinc-300 text-l">{about}</h2>
            <div className="w-max h-max bg-green-900 outline outline-1 px-4 py-2 outline-green-950">
                <Link href={link}>
                    <h1>View Project</h1>
                </Link>
            </div>
        </div>
    )
}