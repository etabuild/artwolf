import {useState} from 'react'

import './App.css'
import Konva from "konva";

import Menu from "./components/Menu";
import Intro from "./components/Intro";
import {Game} from "./components/Game"
import {Vote} from "./components/Vote"
import Guess from "./components/Guess"
import Result from "./components/Result"
import {BrowserRouter, Routes} from "react-router-dom";
import {RecoilRoot} from "recoil";

export type playerData = {
    color: string;
    votesCount: number;
}
function App() {
    return (
        <RecoilRoot>
            <>
                <h1>artwolf</h1>
                <Vote></Vote>
               {/* <Game/>*/}

            </>
        </RecoilRoot>
    )
}

export default App
