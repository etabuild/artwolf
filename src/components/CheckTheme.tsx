/*
const [checkCount, setCheckCount] = useState<number>(0)
*/
import {useRecoilValue, useSetRecoilState} from "recoil";
import {gameState} from "./gameState.ts";
import {useEffect, useState} from "react";
import {playerDataState} from "./playerDataState.ts";
/*
import {theme} from "../data/theme.js";
*/

export const CheckTheme = () => {
    const setGameState = useSetRecoilState(gameState)
    const playerData = useRecoilValue(playerDataState)
    const [currentPlayerIndex, setCurrentPlayerIndex] = useState(0)
    /*    const decideTheme = () =>{

        }*/
    useEffect(() => {
        setCurrentPlayerIndex(0)
        /*
                decideTheme()
        */
    }, [])
    return (
        <>


            <h2>確認画面</h2>

            <button onClick={() => {
                setGameState("Menu")
            }}>戻る
            </button>
            <p>{currentPlayerIndex + 1}番目の人のお題</p>
            <button onClick={() => {
                console.log(currentPlayerIndex)
                console.log(playerData.length)
                currentPlayerIndex<playerData.length-1? setCurrentPlayerIndex(currentPlayerIndex + 1): setGameState("Game")


            }}>
                次の人へ
            </button>
        </>
    )
}