import Card from "../components/card";

export default function Projects() {
    return (
        <div className="min-h-screen min-w-max max-w-screen-[1920] space-y-5 bg-zinc-900">
            <h1 className="flex justify-center text-6xl pt-8 pb-0">my projects</h1>
            <div className="grid px-24 py-24 gap-4 grid-cols-2">
                <Card name="MakeX Score Calculator" langs="JavaScript React Next.js" link={"/makex"} about="A score calculator for MakeX Challenger 2024."></Card>
                <Card name="piyaphat.xyz" langs="JavaScript React Next.js" link={"/"} about="Website for personal usages."></Card>
            </div>
        </div>
    )    
}