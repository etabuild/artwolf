import {useRecoilState, useSetRecoilState} from "recoil";
import {playerDataState} from "./playerDataState.ts";
import {PlayerData} from "../App.tsx";
import {gameState} from "./gameState.ts";

export const Menu = () => {
    const playerColors = ["red", "blue", "green", "orange", "purple"]
    const playerNum = [4, 5]

    const [playerData, setPlayerData] = useRecoilState<PlayerData[]>(playerDataState)
    const setGameState = useSetRecoilState(gameState)
    return (
        <>
            <h2>設定</h2>
            <p>人数選択</p>
            <div>
                {playerNum.map((num) => {
                    return <button key={num - 4} onClick={() => {

                        const data: PlayerData[] = []
                        playerColors.map((color, index) => {
                            if(num>index){
                                data.push({color: color, votesCount: 0})

                            }
                        })
                        console.log(num)
                        setPlayerData(data)

                    }}>{num}</button>
                })}
            </div>
            <p>テーマ</p>
            <button onClick={()=>{
                console.log(playerData)

                setGameState("CheckTheme")
            }}>次へ</button>
        </>
    )
}