'use client'
import { useState } from "react";
import {Tabs, Tab, Card, CardBody, Checkbox, Slider, Button } from "@nextui-org/react";
import CalculateScore from "../components/calculate_score";

export default function MakeX() {
    // Red team
    const [ makeX, setMakeX ] = useState(false)
    const [ block, setBlock ] = useState(0)
    const [ cone, setCone ] = useState(0)
    const [ pinRemaining, setPinRemaining ] = useState(0)
    const [ centralDisc, setCentralDisc ] = useState(0)
    const [ shootCentralFlag, setShootCentralFlag ] = useState(0)
    const [ flag, setFlag ] = useState(0)
    const [ opponentSideFlag, setOpponentSideFlag ] = useState(0)
    // Blue team
    const [ makeX_b, setMakeX_b ] = useState(false)
    const [ block_b, setBlock_b ] = useState(0)
    const [ cone_b, setCone_b ] = useState(0)
    const [ pinRemaining_b, setPinRemaining_b ] = useState(0)
    const [ centralDisc_b, setCentralDisc_b ] = useState(0)
    const [ shootCentralFlag_b, setShootCentralFlag_b ] = useState(0)
    const [ flag_b, setFlag_b ] = useState(0)
    const [ opponentSideFlag_b, setOpponentSideFlag_b ] = useState(0)
    const [ realRedScore, setRedReal ] = useState(0)
    const [ realBlueScore, setBlueReal ] = useState(0)
    let red_score = 0
    let blue_score = 0

    const setRedScore = (k) => {
        red_score = k 
    }

    const setBlueScore = (k) => {
        blue_score = k
    }

    const calc = () => {
        setRedScore(0)
        setBlueScore(0)
        // Red calculation
        if (block == 5 || cone == 5) {
            setRedScore(100)
        }
        setRedScore(red_score + (block * 30))
        setRedScore(red_score + (cone * 30))
        setRedScore(red_score + (pinRemaining * 10))
        setRedScore(red_score + (centralDisc *  20))
        setRedScore(red_score + (shootCentralFlag* 20))
        setRedScore(red_score + (flag * 30))
        setRedScore(red_score + (opponentSideFlag * 50))
        if (makeX) {
            setRedScore(red_score + 150)
        }
        // Blue calculation
        if (block_b == 5 || cone_b == 5) {
            setBlueScore(100)
        }
        setBlueScore(blue_score + (block_b * 30))
        setBlueScore(blue_score + (cone_b * 30))
        setBlueScore(blue_score + (pinRemaining_b * 10))
        setBlueScore(blue_score + (centralDisc_b *  20))
        setBlueScore(blue_score + (shootCentralFlag_b * 20))
        setBlueScore(blue_score + (flag_b * 30))
        setBlueScore(blue_score + (opponentSideFlag_b * 50))
        if (makeX_b) {
            setBlueScore(blue_score + 150)
        }
        setRedReal(red_score)
        setBlueReal(blue_score)
    }
    return (
        <main>
            <div className="bg-zinc-950 min-w-max min-h-screen">
                <div className="px-24 pt-16 pb-4 flex space-x-1">
                    <h1 className="text-4xl font-bold text-blue-800">Make</h1>
                    <h1 className="text-4xl font-bold text-red-800">X</h1>
                    <h1 className="text-2xl">Score Calculator (23-24)</h1>
                </div>
                <div className="flex w-full flex-col px-24 dark">
                    <Tabs aria-label="Options" radius="none" size="lg">
                        <Tab key="red-team" title="Red Team">
                            <div className="space-y-4 bg-zinc-800 min-h-max outline outline-1 outline-zinc-700 p-4">
                                <h1 className="text-3xl">
                                    Red Team
                                </h1>
                                <Slider value={block} label="Block in central" onChange={setBlock} disableThumbScale={false} size="lg" step={1} maxValue={5} minValue={0} defaultValue={0} className="max-w-md light"/>
                                <Slider value={cone} label="Cone in central" onChange={setCone} disableThumbScale={false} size="lg" step={1} maxValue={5} minValue={0} defaultValue={0} className="max-w-md light"/>
                                <Slider value={pinRemaining} label="Remaining pin" onChange={setPinRemaining} disableThumbScale={false} size="lg" step={1} maxValue={10} minValue={0} defaultValue={0} className="max-w-md light"/>
                                <Slider value={centralDisc} label="Central disc" onChange={setCentralDisc} disableThumbScale={false} size="lg" step={1} maxValue={32} minValue={0} defaultValue={0} className="max-w-md light"/>
                                <Slider value={shootCentralFlag} label="Middle flag shot" onChange={setShootCentralFlag} disableThumbScale={false} size="lg" step={1} maxValue={6} minValue={0} defaultValue={0} className="max-w-md light"/>
                                <Slider value={flag}label="Flags hanged" onChange={setFlag} disableThumbScale={false} size="lg" step={1} maxValue={2} minValue={0} defaultValue={0} className="max-w-md light"/>
                                <Slider value={opponentSideFlag} label="Opponent side flags hanged" onChange={setOpponentSideFlag} disableThumbScale={false} size="lg" step={1} maxValue={2} minValue={0} defaultValue={0} className="max-w-md light"/>
                                <Checkbox size="lg" value={makeX} onValueChange={setMakeX}>
                                    MakeX Alphabetical Order
                                </Checkbox>
                            </div>
                        </Tab>
                        <Tab key="blue-team" title="Blue Team">
                        <div className="space-y-4 bg-zinc-800 min-h-max outline outline-1 outline-zinc-700 p-4">
                                <h1 className="text-3xl">
                                    Blue Team
                                </h1>
                                <Slider value={block_b} label="Block in central" onChange={setBlock_b} disableThumbScale={false} size="lg" step={1} maxValue={5} minValue={0} defaultValue={0.4} className="max-w-md light"/>
                                <Slider value={cone_b} label="Cone in central" onChange={setCone_b} disableThumbScale={false} size="lg" step={1} maxValue={5} minValue={0} defaultValue={0.4} className="max-w-md light"/>
                                <Slider value={pinRemaining_b} label="Remaining pin" onChange={setPinRemaining_b} disableThumbScale={false} size="lg" step={1} maxValue={10} minValue={0} defaultValue={0.4} className="max-w-md light"/>
                                <Slider value={centralDisc_b}label="Central disc" onChange={setCentralDisc_b} disableThumbScale={false} size="lg" step={1} maxValue={32} minValue={0} defaultValue={0.4} className="max-w-md light"/>
                                <Slider value={shootCentralFlag_b}label="Middle flag shot" onChange={setShootCentralFlag_b} disableThumbScale={false} size="lg" step={1} maxValue={6} minValue={0} defaultValue={0.4} className="max-w-md light"/>
                                <Slider value={flag_b}label="Flags hanged" onChange={setFlag_b} disableThumbScale={false} size="lg" step={1} maxValue={2} minValue={0} defaultValue={0.4} className="max-w-md light"/>
                                <Slider value={opponentSideFlag_b}label="Opponent side flags hanged" onChange={setOpponentSideFlag_b} disableThumbScale={false} size="lg" step={1} maxValue={2} minValue={0} defaultValue={0.4} className="max-w-md light"/>
                                <Checkbox size="lg" isSelected={makeX_b} onValueChange={setMakeX_b}>
                                    MakeX Alphabetical Order
                                </Checkbox>
                            </div>
                        </Tab> 
                        <Tab key="calculate-score" title="Calculate Score" onClick={calc}>
                            <div className="space-y-4 bg-zinc-800 min-h-max outline outline-1 outline-zinc-700 p-4">
                                <div className="flex min-w-max justify-center">
                                  <Button color="default" onClick={calc} size="lg">
                                        Calculate Score
                                    </Button>
                                </div>
                                <div className="flex justify-between px-48">
                                    <h1 className="text-9xl text-red-500">{realRedScore}</h1>
                                    <h1 className="text-9xl text-blue-500">{realBlueScore}</h1>
                                </div>
                            </div>
                        </Tab>
                    </Tabs>
                </div>  
            </div>
        </main>
    )
}