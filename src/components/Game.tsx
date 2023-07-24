import {Layer, Rect, Stage, Line} from "react-konva";
import Konva from "konva";
import KonvaEventObject = Konva.KonvaEventObject;
import {useState} from "react";
import './Game.css'
import {useRecoilValue, useSetRecoilState} from "recoil";
import {playerDataState} from "./playerDataState.ts";
import {gameState} from "./gameState.ts";

export const Game = () => {
    type lineData = {
        points: number[]
        color: string
    }
    /*
        const colors :string[]= ["red","blue", "green","yellow","purple"]
    */
    const loopNum = 3;
    const playerData = useRecoilValue(playerDataState)
    const  setCurrentGameState = useSetRecoilState(gameState)
    const [drawCount, setDrawCount] = useState<number>(0)
    const [drawLine, setDrawLine] = useState<lineData>()
    const [lines, setLines] = useState<lineData[]>([])
    const [drawLineState, setDrawLineState] = useState<boolean>(false)
    const playerNum = playerData.length;

    const startLine = (e: KonvaEventObject<any>) => {

        setDrawCount(drawCount + 1)
        setDrawLineState(true)
        setDrawLine({
                points: [e.target.getStage()!.getPointerPosition()!.x, e.target.getStage()!.getPointerPosition()!.y],
                color: playerData[drawCount % playerNum].color
            }
        )
    }

    const moveLine = (e: KonvaEventObject<any>) => {
        if (drawLineState) {
            setDrawLine({
                points: [...drawLine!.points, e.target.getStage()!.getPointerPosition()!.x, e.target.getStage()!.getPointerPosition()!.y],
                color: drawLine!.color
            })
        }
    }

    const endLine = () => {

        setDrawLine(
            undefined
        )

        setLines([...lines, {points: drawLine!.points, color: drawLine!.color}])
        setDrawLineState(false)
        console.log(lines)
        if (drawCount / playerNum == loopNum) {
            setCurrentGameState("Vote")
        }

    }
    const deleteLine = () => {
        setLines([])
    }

    return (
        <div className="root">
            <h1>
                Game
            </h1>
            <button onClick={deleteLine}>Delete</button>
            <Stage width={500} height={500} id={"stage"}
                   onMouseDown={(e) => startLine(e)}
                   onMouseMove={(e) => moveLine(e)}
                   onMouseUp={endLine}
                   onTouchStart={(e) => startLine(e)}
                   onTouchMove={(e) => moveLine(e)}
                   onTouchEnd={endLine}>
                <Layer>
                    <Rect stroke='black' strokeWidth={4} x={5} y={5} width={490} height={490}/>

                    {[...lines, drawLine].map((line, index) => (
                        <Line
                            key={index}
                            points={line?.points}

                            stroke={line?.color}
                            lineCap="round"
                            tension={0.1}

                            strokeWidth={10}
                            draggable={false}
                        />
                    ))}
                </Layer>
            </Stage>
        </div>
    )

}