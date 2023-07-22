
import './App.css'


import {Vote} from "./components/Vote"

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
