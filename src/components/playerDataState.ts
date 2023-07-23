import {atom} from "recoil"
import {PlayerData} from "../App.tsx";

export const playerDataState = atom<PlayerData[]>({
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
