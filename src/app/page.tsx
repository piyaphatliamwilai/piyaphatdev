import Navbar from "./components/navbar";
import Hero from "./components/hero";

export default function Home() {
  return (
    <main>
      <div className="flex min-h-screen flex-col bg-slate-900">
        <Navbar></Navbar>
        <Hero></Hero>
      </div>
  </main>
  )
}
