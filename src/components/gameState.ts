import {atom} from "recoil";


export type GameState = "Menu"|"CheckTheme"|"Game"|"Vote"|"Guess"|"Result";
export const gameState = atom<GameState>({
    key: 'gameState',
    default: "Menu"
})