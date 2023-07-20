import {Link} from "react-router-dom";
import {Layer, Rect, Stage, Line} from "react-konva";
import Konva from "konva";
import KonvaEventObject = Konva.KonvaEventObject;
import {useState} from "react";

export const Game = () => {
    type lineData = {
        points: number[]
        color: string
    }

    const [drawLine, setDrawLine] = useState<lineData>()
    const [lines, setLines] = useState<lineData[]>([])
    const [drawLineState, setDrawLineState] = useState<boolean>(false)

    const startLine = (e: KonvaEventObject<any>) => {
        setDrawLineState(true)
        setDrawLine({
                points: [e.target.getStage()!.getPointerPosition()!.x, e.target.getStage()!.getPointerPosition()!.y],
                color: "#fff"
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

        setLines([...lines, {points: drawLine!.points, color: "#fff"}])
        setDrawLineState(false)

    }
    return (
        <div id="root">
            <h1>
                Game
            </h1>
            <Stage width={500} height={500} id={"stage"}
                   onMouseDown={(e) => startLine(e)}
                   onMouseMove={(e) => moveLine(e)}
                   onMouseUp={endLine}
                   onTouchStart={(e) => startLine(e)}
                   onTouchMove={(e) => moveLine(e)}
                   onTouchEnd={endLine}>
                <Layer>

                    {[...lines, drawLine].map((line, index) => (
                        <Line
                            key={index}
                            points={line?.points}
                            fill="black"
                            stroke="white"
                            lineCap="round"

                            strokeWidth={5}
                            draggable={true}
                        />
                    ))}
                </Layer>
            </Stage>
        </div>
    )

}