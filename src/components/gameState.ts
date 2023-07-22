import {atom} from "recoil"
import {playerData} from "../App.tsx";

export const playerDataState = atom<playerData[]>({
    key: 'playerDataState',
    default: [
        {
            color: "red",
            votesCount: 0
        },
        {
            color: "green",
            votesCount: 0
        },
        {
            color: "#245",
            votesCount: 0
        }
    ]
})