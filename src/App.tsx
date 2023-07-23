import './App.css'


import {Vote} from "./components/Vote"

import {useRecoilValue} from "recoil";
import {gameState} from "./components/gameState.ts";
import {Menu} from "./components/Menu.tsx";
import {CheckTheme} from "./components/CheckTheme.tsx";
import {Game} from "./components/Game.tsx";
import {Guess} from "./components/Guess.tsx";
import {Result} from "./components/Result.tsx";

export type PlayerData = {
    color: string;
    votesCount: number;
}

const titleStyle = () => {
    return ({
            fontFamily: "'Geologica',sans-serif",
            background: "#000",
            color: "#fff",
            padding: "10px",
            margin: "auto auto",
            width: "fit-content"
        }
    )
}


function App() {
    const currentGameState = useRecoilValue(gameState)

    const mainComponent = () => {

        switch (currentGameState) {
            case "Menu" : {
                return <Menu/>
            }
            case "CheckTheme": {
                return <CheckTheme/>
            }
            case "Game": {
                return <Game/>
            }
            case "Vote": {
                return <Vote/>
            }
            case "Guess": {
                return <Guess/>
            }
            case "Result": {
                return <Result/>
            }
        }


    }
    return (

        <>
            <h1 id={"title"} style={titleStyle()}>artwolf</h1>
            {mainComponent()}
        </>
    )
}

export default App
